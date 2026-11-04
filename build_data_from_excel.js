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

  // 2. 사업장/부서 구분 매핑 (C열 구분1, B열 부문/부서)
  const team = row['구분1'] ? String(row['구분1']).replace(/[\r\n]+/g, ' ').trim() : '미분류';            // C열 (사업장)
  const department = row['부문/부서'] ? String(row['부문/부서']).replace(/[\r\n]+/g, ' ').trim() : '';     // B열 (부문/부서)

  // 화면 렌더링 로직 (사업장과 부서가 같으면 괄호 생략, 다르면 괄호 표기)
  const displayLocation = (department && department !== team)
    ? `${team} (${department})`  // 예: 밸리팀 (골프), 힐스빌리지 (리조트)
    : team;                      // 같은 값이면 '밸리팀' 하나만 깔끔하게 표기
  
  // 3. 세부 장소 및 제목 생성
  const detailLocation = row['위치(세부)'] ? String(row['위치(세부)']).trim() : '기타 장소';
  const title = `[${detailLocation}] ${cleanType} 사고`;

  // 4. 피해 대상 매핑 (반드시 엑셀 E열 '구분2' 헤더 값 기준 직접 매핑, 사고 내용 본문 검색 금지)
  const rawVictim = row['구분2'] !== undefined && row['구분2'] !== null ? String(row['구분2']) : (row['구분 2'] !== undefined && row['구분 2'] !== null ? String(row['구분 2']) : '');
  const cleanVictim = rawVictim.replace(/[\r\n]+/g, ' ').trim();

  let victimType = '기타';
  let victimName = '';

  // 괄호 안에 이름이 있는 경우 추출 (예: '캐디(손호준)', '캐디 (손호준)', '직원(박덕재)' -> '손호준', '박덕재')
  const parenMatch = cleanVictim.match(/\(([^)]+)\)/);
  if (parenMatch && parenMatch[1]) {
    victimName = parenMatch[1].replace(/[\r\n]+/g, '').trim();
  }

  if (cleanVictim.includes('고객')) {
    victimType = '고객';
  } else if (cleanVictim.includes('캐디')) {
    victimType = '캐디';
  } else if (
    cleanVictim.includes('직원') ||
    cleanVictim.includes('근로자') ||
    cleanVictim.includes('일용직') ||
    cleanVictim.includes('협력사') ||
    cleanVictim.includes('실습생')
  ) {
    victimType = '직원';
  } else {
    victimType = '기타';
  }

  if (!victimName) {
    const rawName = row['성명'] || row['피해자명'] || row['피해자'] || '';
    victimName = String(rawName).replace(/[\r\n]+/g, '').trim() || '익명';
  }
  // 5. 보험금 / 비용 숫자 변환
  const rawCost = row['보험금'] !== undefined && row['보험금'] !== '' ? row['보험금'] : row[' 보험금 '];
  const insuranceCost = typeof rawCost === 'number' ? rawCost : (Number(String(rawCost || '').replace(/,/g, '').trim()) || 0);

  // Q열 헤더명('산업재해조사표' 및 '산재조사표') 모두 대응
  const reportStatus = row['산업재해조사표'] || row['산재조사표'] || row['산재 보고'] || '';
  const isSubmitted = String(reportStatus).trim().includes('제출완료');

  return {
    id: row['문서번호'] || `INC-${Date.now()}-${index}`,
    docNo: row['문서번호'] ? String(row['문서번호']).trim() : `미부여-${index}`,
    date: row['발생일시'] ? String(row['발생일시']).replace(/\n/g, ' ').trim() : '',
    year: Number(row['발생년(피벗)']) || (row['발생일시'] ? parseInt(String(row['발생일시']).slice(0, 4)) : 2026),
    month: Number(row['발생월(피벗)']) || 0,
    team: team,
    department: department,
    displayLocation: displayLocation,
    location: detailLocation,
    type: cleanType,           // 정제된 '사고유형1' 주입
    title: title,
    description: row['내용'] ? String(row['내용']).trim() : '',
    countermeasure: row['재발방지대책'] ? String(row['재발방지대책']).trim() : '',
    victimType: victimType,
    victimName: victimName,
    victimDetail: cleanVictim,
    insuranceCost: insuranceCost,
    industrialAccident: isSubmitted ? '제출완료' : '해당 없음',
    status: '조치완료'
  };
};

function inferZoneFromLocation(location, dept, team) {
  const loc = String(location || "").trim();
  const subDept = String(dept || "").trim();
  const subTeam = String(team || "").trim();

  // 1. D열('위치(세부)') 텍스트 최우선 검사
  if (loc) {
    const isCartRoad = /카트\s*도로/.test(loc);

    // 1-1. 주차장 / 도로: D열에 '주차장', '지하주차장', '도로', '군도변', '진입로'가 포함되면 -> '주차장/도로'
    // (단, '카트도로'는 골프 코스 전용 도로이므로 제외)
    if (/주차장|지하주차장|군도변|진입로/.test(loc) || (!isCartRoad && /도로/.test(loc))) {
      return "주차장/도로";
    }

    // 1-2. 골프 코스: D열에 'H'(예: 파인4H, 16H), '티박스', '그린', '페어웨이', '벙커', '카트도로'가 포함되면 -> '골프 코스'
    if (isCartRoad || /[0-9]+[hH]|[hH]홀|홀\b|티박스|티잉|그린|페어웨이|벙커|러프/.test(loc) || (/[hH]/.test(loc) && /파인|오크|메이플|체리|버치|골프|브릿지|힐스|밸리|월송|성문/.test(loc))) {
      return "골프 코스";
    }

    // 1-3. 콘도 / 객실: D열에 '객실', '콘도', '빌리지', '타워'가 포함되면 -> '콘도/객실'
    if (/객실|콘도|빌리지|타워|호실/.test(loc)) {
      return "콘도/객실";
    }

    // 1-4. 레저 / 야외시설: D열에 '슬로프', '스키장', '수영장', '스파', '사우나', '놀이동산'이 포함되면 -> '레저/야외시설'
    if (/슬로프|스키장|수영장|스파|사우나|놀이동산|리프트|렌탈|눈썰매/.test(loc)) {
      return "레저/야외시설";
    }

    // 1-5. 부대 / 영업시설: D열에 '클럽하우스', '스타트하우스', '식당', '락커'가 포함되면 -> '부대/영업시설'
    if (/클럽하우스|스타트하우스|식당|락커|락카|레스토랑|카페|프로샵|로비|프런트|연회/.test(loc)) {
      return "부대/영업시설";
    }
  }

  // 2. 그 외 명시되지 않은 경우에만 C열/B열 기준으로 보조 분류
  const context = `${subDept} ${subTeam}`.toLowerCase();

  if (/주차|도로|교통/.test(context)) {
    return "주차장/도로";
  }
  if (/골프|cc\b|라운드/.test(context)) {
    return "골프 코스";
  }
  if (/슬로프|스키|레저|수영|스파|사우나/.test(context)) {
    return "레저/야외시설";
  }
  if (/콘도|호텔|객실|빌리지|숙박/.test(context)) {
    return "콘도/객실";
  }
  if (/클럽하우스|스타트|식음|f&b|식당|조리|영업/.test(context)) {
    return "부대/영업시설";
  }

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
  const zoneStr = inferZoneFromLocation(parsed.location, parsed.department, parsed.team);
  const severityStr = inferSeverity(parsed.description, parsed.type);
  const reportDateStr = parsed.date.length >= 10 ? parsed.date.slice(0, 10).replace(/\./g, '-') : `${parsed.year}-01-01`;

  const item = {
    ...parsed,
    id: validIdx + 1,
    documentNumber: parsed.docNo,
    occurredAt: parsed.date,
    dept: parsed.department || parsed.team,
    department: parsed.department,
    team: parsed.team,
    displayLocation: parsed.displayLocation,
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
    victimName: parsed.victimName || '익명',
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
  const DEFAULT_VERSION = "20261104_vCHART_ZONE_FIX";
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
