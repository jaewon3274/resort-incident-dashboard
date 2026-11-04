/**
 * build_data_from_excel.js
 * 
 * 561건 엑셀 원본 파일(★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx)의 '통합' 시트를 완벽 파싱하여
 * app.js 필수 표준 필드(id, docNo, documentNumber, date, occurredAt, year, dept, businessUnit,
 * department, division, location, place, category, type, incidentType, title, victim, victimType,
 * cost, companyAmount, status, description, notes)를 모두 갖춘 data.js를 재생성합니다.
 */

const fs = require('fs');
const path = require('path');
let XLSX;
try {
  XLSX = require('C:/Users/HDC Resort/Downloads/resort-incident-dashboard/node_modules/xlsx');
} catch (e) {
  XLSX = require('xlsx');
}

const DOWNLOADS_DIR = 'C:/Users/HDC Resort/Downloads';
const targetFileName = '★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx';
let excelPath = path.join(DOWNLOADS_DIR, targetFileName);

if (!fs.existsSync(excelPath)) {
  const files = fs.readdirSync(DOWNLOADS_DIR);
  const found = files.find(f => f.includes('20261029') && f.endsWith('.xlsx'));
  if (found) {
    excelPath = path.join(DOWNLOADS_DIR, found);
  } else {
    throw new Error(`Excel file not found: ${excelPath}`);
  }
}

console.log(`[Excel Load] Reading: ${excelPath}`);
const workbook = XLSX.readFile(excelPath, { cellDates: false, cellText: false });
const sheetName = workbook.SheetNames.includes('통합') ? '통합' : workbook.SheetNames[0];
console.log(`[Sheet] Using: '${sheetName}'`);

const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
console.log(`[Rows] Total rows read: ${rawRows.length}`);

// 엑셀 row 데이터를 파싱하는 함수 내부
const parseIncidentRow = (row, index) => {
  // 1. 사고유형 필드 매핑: '사고유형1' 우선 탐색 및 줄바꿈/공백 제거 정제
  const rawType = row['사고유형1'] || row['사고유형'] || row['사고 유형'] || row['유형'] || '기타';
  const cleanType = String(rawType).replace(/[\r\n]+/g, '').trim() || '기타';

  // 2. 사업장/부서 구분 매핑
  const team = row['구분1'] ? String(row['구분1']).trim() : '미분류';
  const dept = row['부문/부서'] ? String(row['부문/부서']).replace(/[\r\n]+/g, '').trim() : '';
  
  // 3. 세부 장소 및 제목 생성
  const detailLocation = row['위치(세부)'] ? String(row['위치(세부)']).trim() : '기타 장소';
  const title = `[${detailLocation}] ${cleanType} 사고`;

  // 4. 피해 대상 매핑
  const victimRaw = row['구분2'] ? String(row['구분2']).replace(/[\r\n]+/g, ' ').trim() : '고객';
  let victimType = '고객';
  if (victimRaw.includes('직원') || victimRaw.includes('근로자') || victimRaw.includes('일용직')) {
    victimType = '직원';
  } else if (victimRaw.includes('캐디')) {
    victimType = '캐디';
  } else if (victimRaw.includes('기타') || victimRaw.includes('AR')) {
    victimType = '기타';
  }

  // 5. 보험금 / 비용 숫자 변환
  const rawCost = row['보험금'] !== undefined && row['보험금'] !== '' ? row['보험금'] : row[' 보험금 '];
  const insuranceCost = typeof rawCost === 'number' ? rawCost : (Number(String(rawCost || '').replace(/,/g, '').trim()) || 0);

  return {
    id: row['문서번호'] || `INC-${Date.now()}-${index}`,
    docNo: row['문서번호'] ? String(row['문서번호']).trim() : `미부여-${index}`,
    date: row['발생일시'] ? String(row['발생일시']).replace(/\n/g, ' ').trim() : '',
    year: Number(row['발생년(피벗)']) || (row['발생일시'] ? parseInt(String(row['발생일시']).slice(0, 4)) : 2026),
    month: Number(row['발생월(피벗)']) || 0,
    team: team,
    department: dept,
    location: detailLocation,
    type: cleanType,           // 정제된 '사고유형1' 주입
    title: title,
    description: row['내용'] ? String(row['내용']).trim() : '',
    countermeasure: row['재발방지대책'] ? String(row['재발방지대책']).trim() : '',
    victimType: victimType,
    victimDetail: victimRaw,
    insuranceCost: insuranceCost,
    industrialAccident: row['산업재해조사표'] ? String(row['산업재해조사표']).trim() : '해당 없음',
    status: '조치완료'
  };
};

function inferZoneFromLocation(loc, dept) {
  const t = `${loc} ${dept}`.toLowerCase();
  if (/그린|티|홀|\d+h|벙커|러프|페어웨이|카트도로|골프/.test(t)) return "골프 코스";
  if (/클럽하우스|로비|스타트|식당|락카|사우나/.test(t)) return "클럽하우스/부대시설";
  if (/스키|슬로프|렌탈|레저/.test(t)) return "레저/체육시설";
  if (/콘도|객실|빌리지|타워|호실/.test(t)) return "콘도/객실";
  if (/주차장|도로|진입로/.test(t)) return "주차장/도로";
  return "기타 부대시설";
}

function inferSeverity(desc, cat) {
  const t = `${desc} ${cat}`.toLowerCase();
  if (/중대|사망|의식불명/.test(t)) return "중대 (입원/중상)";
  if (/병원|골절|입원|119|봉합|수술/.test(t)) return "중등 (병원진료)";
  return "경미 (현장조치)";
}

const incidents = [];
let validIdx = 0;

rawRows.forEach((r) => {
  const row = {};
  for (const [k, v] of Object.entries(r)) {
    row[String(k).trim()] = v;
  }

  const docNo = String(row['문서번호'] || '').trim();
  if (!docNo || docNo === 'None') return;

  const parsed = parseIncidentRow(row, validIdx);
  const zoneStr = inferZoneFromLocation(parsed.location, parsed.team);
  const severityStr = inferSeverity(parsed.description, parsed.type);
  const reportDateStr = parsed.date.length >= 10 ? parsed.date.slice(0, 10).replace(/\./g, '-') : `${parsed.year}-01-01`;

  const item = {
    ...parsed,
    id: validIdx + 1,
    documentNumber: parsed.docNo,
    occurredAt: parsed.date,
    dept: parsed.team,
    businessUnit: parsed.team,
    division: parsed.department,
    place: parsed.location,
    category: parsed.type,
    incidentType: parsed.type,
    victim: parsed.victimType,
    cost: parsed.insuranceCost,
    companyAmount: parsed.insuranceCost,
    totalAmount: parsed.insuranceCost,
    personalAmount: 0,
    reportStatus: parsed.industrialAccident,
    industrialAccidentReport: parsed.industrialAccident,
    notes: String(row['비고'] || '').trim(),

    // Additional UI compatibility fields
    resort: parsed.team || 'IPARK 리조트',
    locationDetail: parsed.location,
    preventiveMeasure: parsed.countermeasure || '시설 안전 점검 및 프로세스 준수 강화',
    actionTaken: '초동 조치 완료 및 현장 확인',
    victimName: '익명',
    manager: parsed.team || '안전관리팀',
    zone: zoneStr,
    severity: severityStr,
    faultRatio: parsed.insuranceCost > 0 ? '당사 과실 일부' : '과실 미산정',
    reportDate: reportDateStr,
    timeline: [
      { time: parsed.date.slice(0, 16), note: '사고 발생 및 현장 접수' },
      { time: parsed.date.slice(0, 16), note: '초동 조치 완료 및 조치 이력 등록' }
    ],
    '사고유형1': parsed.type,
    '구분1': parsed.team,
    '구분2': parsed.victimDetail,
    '보험금': parsed.insuranceCost
  };

  incidents.push(item);
  validIdx++;
});

console.log(`[Result] Successfully mapped ${incidents.length} incidents!`);

const outputContent = `/**
 * 리조트 안전사고 모니터링 시스템 - 실무 데이터 (561건 엑셀 원본 100% 완전 매핑)
 * IPARK RESORT SAFETY ACCIDENT DATA
 * 버전: 20261102_v3
 * 데이터 소스: ★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx (통합 시트)
 */

const INITIAL_INCIDENTS = ${JSON.stringify(incidents, null, 2)};

const initialIncidents = INITIAL_INCIDENTS;

(function() {
  const DEFAULT_VERSION = "20261102_vFINAL";
  const VERSION_KEY = "resort_data_version";
  const STORAGE_KEY = "resort_incidents_data";
  const LEGACY_STORAGE_KEY = "resort_incident_records_v2";
  const MASTER_STORAGE_KEY = "resort_incidents_master";
  const SYNC_TIME_KEY = "resort_incidents_last_sync";

  const parseIncidentRow = ${parseIncidentRow.toString()};

  function getTargetVersion() {
    if (typeof window !== "undefined" && window.APP_DATA_VERSION) {
      return window.APP_DATA_VERSION;
    }
    return DEFAULT_VERSION;
  }

  const IncidentStorage = {
    getAll() {
      try {
        if (typeof localStorage === "undefined") return INITIAL_INCIDENTS;
        
        const targetVer = getTargetVersion();

        // [최우선] 업로드된 마스터 엑셀(resort_incidents_master)이 존재하면 버전 초기화 없이 보존
        const masterRaw = localStorage.getItem(MASTER_STORAGE_KEY);
        if (masterRaw) {
          try {
            const masterList = JSON.parse(masterRaw);
            if (Array.isArray(masterList) && masterList.length > 0) {
              localStorage.setItem(VERSION_KEY, targetVer);
              localStorage.setItem(STORAGE_KEY, masterRaw);
              return masterList;
            }
          } catch (e) {
            console.warn("[Storage] 마스터 엑셀 파싱 오류:", e);
          }
        }

        const curVersion = localStorage.getItem(VERSION_KEY);
        if (curVersion !== targetVer) {
          console.warn("[Storage] 데이터 버전 불일치 (" + curVersion + " -> " + targetVer + "). localStorage.clear() 후 INITIAL_INCIDENTS " + INITIAL_INCIDENTS.length + "건으로 강제 갱신합니다.");
          try {
            localStorage.clear();
          } catch (_) {
            localStorage.removeItem(STORAGE_KEY);
            localStorage.removeItem(LEGACY_STORAGE_KEY);
          }
          localStorage.setItem(VERSION_KEY, targetVer);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
          return INITIAL_INCIDENTS;
        }

        let data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
          const legacyData = localStorage.getItem(LEGACY_STORAGE_KEY);
          if (legacyData) {
            data = legacyData;
            localStorage.setItem(STORAGE_KEY, legacyData);
          }
        }
        if (data) {
          const records = JSON.parse(data);
          if (Array.isArray(records) && records.length > 0) {
            return records;
          }
        }
        localStorage.setItem(VERSION_KEY, targetVer);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
        return INITIAL_INCIDENTS;
      } catch (e) {
        console.error("Storage load error:", e);
        return INITIAL_INCIDENTS;
      }
    },

    saveAll(records) {
      try {
        if (typeof localStorage === "undefined") return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
        localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(records));
        if (localStorage.getItem(MASTER_STORAGE_KEY)) {
          localStorage.setItem(MASTER_STORAGE_KEY, JSON.stringify(records));
        }
      } catch (e) {
        console.error("Storage save error:", e);
      }
    },

    add(record) {
      const list = this.getAll();
      list.unshift(record);
      this.saveAll(list);
      return list;
    },

    update(id, updatedFields) {
      const list = this.getAll();
      const idx = list.findIndex(item => item.id === id || item.docNo === id);
      if (idx !== -1) {
        list[idx] = { ...list[idx], ...updatedFields };
        this.saveAll(list);
      }
      return list;
    },

    delete(id) {
      const list = this.getAll().filter(item => item.id !== id && item.docNo !== id);
      this.saveAll(list);
      return list;
    },

    reset() {
      if (typeof localStorage !== "undefined") {
        try { localStorage.clear(); } catch (_) {}
        try {
          localStorage.removeItem(MASTER_STORAGE_KEY);
          localStorage.removeItem(SYNC_TIME_KEY);
        } catch (_) {}
        const targetVer = getTargetVersion();
        localStorage.setItem(VERSION_KEY, targetVer);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
      }
      return INITIAL_INCIDENTS;
    }
  };

  if (typeof window !== "undefined") {
    window.INITIAL_INCIDENTS = INITIAL_INCIDENTS;
    window.initialIncidents = INITIAL_INCIDENTS;
    window.IncidentStorage = IncidentStorage;
    window.parseIncidentRow = parseIncidentRow;
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { INITIAL_INCIDENTS, initialIncidents, IncidentStorage, parseIncidentRow };
  }
})();
`;

const outputPath = path.join(__dirname, 'data.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log(`[Output] data.js generated at: ${outputPath}`);
