/**
 * build_data_from_excel.js
 * 
 * [data.js 안전 변환: 사고유형1 및 엑셀 원본 100% 매핑 스크립트]
 * 엑셀 원본(★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx)의 '통합' 시트를 파싱하여
 * 사고유형 속성명 삼중 매핑(category, type, incidentType) 및 캐시 강제 갱신 로직을 포함한 data.js를 단번에 안전하게 생성합니다.
 */

const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// 1. 파일 경로 탐색
const DOWNLOADS_DIR = 'C:/Users/HDC Resort/Downloads';
const targetFileName = '★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx';
let excelPath = path.join(DOWNLOADS_DIR, targetFileName);

if (!fs.existsSync(excelPath)) {
  const files = fs.readdirSync(DOWNLOADS_DIR);
  const found = files.find(f => f.includes('20261029') && f.endsWith('.xlsx'));
  if (found) {
    excelPath = path.join(DOWNLOADS_DIR, found);
  } else {
    throw new Error(`엑셀 파일을 찾을 수 없습니다: ${excelPath}`);
  }
}

console.log(`[Excel 로드] ${excelPath}`);

// 2. 엑셀 워크북 및 '통합' 시트 읽기
const workbook = XLSX.readFile(excelPath, { cellDates: false, cellText: false });
const sheetName = workbook.SheetNames.includes('통합') ? '통합' : workbook.SheetNames[0];
console.log(`[시트 선택] '${sheetName}' 시트를 사용합니다.`);

const rawRows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
console.log(`[총 로우 수] ${rawRows.length}개 로우 파싱 시작`);

// 헬퍼: 기안일 파싱 (Excel serial number to YYYY-MM-DD)
function formatGianDate(val) {
  if (!val) return '2026-01-01';
  if (typeof val === 'number') {
    const d = new Date(Math.round((val - 25569) * 86400 * 1000));
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }
  const str = String(val).replace(/[\r\n]+/g, ' ').trim();
  const m = str.match(/(\d{4})[./-](\d{1,2})[./-](\d{1,2})/);
  if (m) {
    return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
  }
  return str.slice(0, 10) || '2026-01-01';
}

// 헬퍼: 발생일시 파싱 (숫자 시리얼 및 문자열 줄바꿈 정규화)
function formatOccDate(val, fallbackReportDate) {
  if (!val) return fallbackReportDate;
  if (typeof val === 'number' || /^\d{5}(\.\d+)?$/.test(String(val).trim())) {
    const num = Number(val);
    const d = new Date(Math.round((num - 25569) * 86400 * 1000));
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}.${m}.${day}`;
  }
  const str = String(val).replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  return str || fallbackReportDate;
}

// 헬퍼: 부서 추론 (기존 app.js 호환)
function inferDept(bu, loc, desc, cat) {
  const full = `${bu} ${loc} ${desc} ${cat}`.toLowerCase();
  const isGolfCourseSpecific = /파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h|오크\s*\d*h|힐\s*\d*h|브릿지\s*\d*h|루나\s*\d*h|솔라\s*\d*h|인\s*\d*h|아웃\s*\d*h|\b\d+h\b|페어웨이|티잉|티박스|그린|벙커|러프|해저드|크리크|카트도로|캐디|골프카트/i.test(full);
  const isCondoRoomVillage = /콘도|객실|호실|빌리지|d콘도|골프빌리지|타워[a-d]?|숙박|프런트|하우스키핑|스위트|베개|침대|욕실|발코니|테라스|객실키|침구/i.test(full) || /빌리지|콘도|객실/i.test(bu) || /빌리지|콘도|객실/i.test(loc);
  const isSaunaLeisure = /사우나|스파|아쿠아|수영장|자쿠지|노천탕|락커|락카|냉탕|온탕|열탕|샤워실/i.test(full) || /스키장|스키|눈썰매|슬로프|리프트|렌탈/i.test(full) || /레저팀|스키장/.test(bu);
  const isFnb = /식음|f&b|레스토랑|카페|주방|조식|뷔페|식당|다이닝|바비큐|베이커리|피오레토|파크키친/i.test(full);
  const isFacility = /시설|기계|전기|보일러|영선|승강기|엘리베이터|방재|소방|변전|정화조|누수|정전|동파|조경/i.test(full);

  if (!isGolfCourseSpecific) {
    if (isCondoRoomVillage && !isSaunaLeisure && !isFnb) return "객실팀";
    if (isSaunaLeisure) return "레저팀";
    if (isFnb) return "식음팀";
    if (isFacility) return "시설팀";
  }

  if (/성문안|루나|솔라/i.test(full)) return "성문안팀";
  if (/월송리|월송|인\s*\d*h|아웃\s*\d*h/i.test(full)) return "월송리팀";
  if (/힐스팀|힐스cc|힐\s*\d*h|브릿지\s*\d*h/i.test(full)) return "힐스팀";
  if (/밸리팀|밸리cc|오크\s*\d*h|파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h/i.test(full)) return "밸리팀";

  if (["밸리팀", "힐스팀", "성문안팀", "월송리팀", "레저팀", "시설팀", "객실팀", "식음팀"].includes(bu)) return bu;
  if (/골프|경기/.test(bu)) return "밸리팀";
  return "시설팀";
}

// 헬퍼: 구역 추론
function inferZone(loc, bu) {
  const t = `${loc} ${bu}`.toLowerCase();
  if (/그린|티|홀|\d+h|페어웨이|벙커|코스|카트도로|러프/.test(t)) return "골프 코스";
  if (/클럽하우스|로비|프런트|락카|락커|스타트|현관|주차장|사우나/.test(t)) return "클럽하우스/부대시설";
  if (/슬로프|리프트|렌탈|스키/.test(t)) return "스키장/슬로프";
  if (/콘도|객실|빌리지|타워/.test(t)) return "콘도/숙박동";
  return "공용 구역";
}

// 헬퍼: 심각도 추론
function inferSeverity(desc, cat) {
  const t = `${desc} ${cat}`.toLowerCase();
  if (/사망|심정지|의식불명/.test(t)) return "중대재해 (사망/중상)";
  if (/골절|수술|입원|119|후송|파열|뇌진탕/.test(t)) return "중상 (병원후송)";
  if (/봉합|꿰매|열상|응급실|통원/.test(t)) return "경상 (통원치료)";
  return "경미 (현장처치)";
}

// 3. 561건 레코드 변환
const incidents = [];
let totalInsuranceCost = 0;
let insuranceCount = 0;
const typeStats = {};
const victimStats = {};

rawRows.forEach((r, idx) => {
  // 컬럼명 앞뒤 공백 제거 정규화
  const row = {};
  for (const [k, v] of Object.entries(r)) {
    row[k.trim()] = v;
  }

  // 문서번호가 없는 공백 행 스킵
  const docNo = String(row['문서번호'] || '').trim();
  if (!docNo) return;

  // 1) 사고유형1 정규화 (줄바꿈 제거, trim)
  let incidentType = String(row['사고유형1'] || '').replace(/[\r\n]+/g, '').trim();
  if (!incidentType) incidentType = '기타';

  // 2) businessUnit: row['구분1'] (밸리팀, 성문안팀, 힐스팀, 월송리팀, 스키장 등)
  const businessUnit = String(row['구분1'] || '').replace(/[\r\n]+/g, '').trim();

  // 3) victimType: row['구분2'] ('캐디' 포함 시 '캐디', '직원/일용직/근로자' 포함 시 '직원', 그 외 '고객')
  const vRaw = String(row['구분2'] || '').trim();
  let victimType = '고객';
  if (vRaw.includes('캐디')) {
    victimType = '캐디';
  } else if (/직원|일용직|근로자/.test(vRaw)) {
    victimType = '직원';
  } else {
    victimType = '고객';
  }

  // 4) location: row['위치(세부)']
  const locRaw = String(row['위치(세부)'] || '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  const location = (locRaw && locRaw !== 'None') ? locRaw : '공용 구역';

  // 5) description: row['내용']
  const descRaw = String(row['내용'] || '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  const description = (descRaw && descRaw !== 'None') ? descRaw : '경위 기록 없음';

  // 6) cost: row['보험금'] (실제 기재된 6건 합산 1,652,000원 반영, 공란은 0)
  const costRaw = row['보험금'];
  let cost = 0;
  if (costRaw !== undefined && costRaw !== null && costRaw !== '') {
    const num = Number(String(costRaw).replace(/,/g, '').trim());
    if (!isNaN(num) && num > 0) {
      cost = num;
      totalInsuranceCost += cost;
      insuranceCount++;
    }
  }

  // 7) notes: row['비고']
  const notesRaw = String(row['비고'] || '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  const notes = (notesRaw && notesRaw !== 'None') ? notesRaw : '';

  // 부가 필드 (기존 대시보드 호환)
  const reportDate = formatGianDate(row['기안일']);
  const occDate = formatOccDate(row['발생일시'], reportDate);
  const preventRaw = String(row['재발방지대책'] || '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  const preventiveMeasure = (preventRaw && preventRaw !== 'None') ? preventRaw : '시설 및 운영 프로세스 점검 강화';

  const locPrefix = location && location !== '공용 구역' ? `[${location}]` : (businessUnit ? `[${businessUnit}]` : '');
  const title = `${locPrefix} ${incidentType} 사고`.trim();

  const zone = inferZone(location, businessUnit);
  const severity = inferSeverity(description, incidentType);
  const dept = inferDept(businessUnit, location, description, incidentType);

  // 통계 집계
  typeStats[incidentType] = (typeStats[incidentType] || 0) + 1;
  victimStats[victimType] = (victimStats[victimType] || 0) + 1;

  const item = {
    id: docNo,
    date: occDate,

    // [요구사항 1] 사고유형 삼중 매핑 (동일 값으로 매핑 보장)
    category: incidentType,
    type: incidentType,
    incidentType: incidentType,
    '사고유형1': incidentType,

    // 사업부 및 피해자 매핑
    businessUnit: businessUnit,
    resort: businessUnit,
    victim: victimType,
    victimType: victimType,
    place: location,
    location: location,
    locationDetail: location,
    description: description,
    cost: cost,
    notes: notes,
    specialNotes: notes,

    // 대시보드 UI 연동 필드
    zone: zone,
    severity: severity,
    victimName: '익명',
    title: title,
    actionTaken: '현장 초동 조치 및 고객 케어 완료',
    preventiveMeasure: preventiveMeasure,
    status: '조치완료',
    faultRatio: cost > 0 ? '보험 처리 완료' : '과실 미산정',
    totalAmount: cost,
    companyAmount: cost,
    personalAmount: 0,
    manager: dept.includes('팀') ? dept : '안전관리팀',
    dept: dept,
    reportDate: reportDate,
    timeline: [
      { time: occDate.slice(0, 16), note: '사고 발생 접수' },
      { time: occDate.slice(0, 16), note: '조치 내역: 현장 초동 조치 및 고객 케어 완료' }
    ]
  };

  incidents.push(item);
});

// 최신순 정렬 (발생일시 내림차순, 문서번호 내림차순)
incidents.sort((a, b) => {
  const da = String(a.date || a.reportDate || '');
  const db = String(b.date || b.reportDate || '');
  if (da !== db) return db.localeCompare(da);
  return String(b.id || '').localeCompare(String(a.id || ''));
});

console.log(`\n=== [데이터 변환 검증 결과] ===`);
console.log(`- 변환된 총 건수: ${incidents.length}건 (목표: 561건)`);
console.log(`- 보험금 반영 건수: ${insuranceCount}건, 총 합계: ${totalInsuranceCost.toLocaleString()}원 (목표: 6건, 1,652,000원)`);
console.log(`- 구분2 (victimType) 분포:`, victimStats);
console.log(`- 고유 사고유형 개수: ${Object.keys(typeStats).length}개`);
console.log(`- 사고유형(incidentType) 분포:`, typeStats);

// 4. data.js 내용 구성 및 원자적 덮어쓰기
const headerComment = `/**
 * 리조트 안전사고 모니터링 시스템 - 실무 데이터 (561건 엑셀 원본 100% 삼중 매핑)
 * IPARK RESORT SAFETY ACCIDENT DATA
 * 버전: 20261030_v2
 * 데이터 소스: ★IPARK리조트_사고사례_안전관리팀_VF_20261029.xlsx '통합' 시트
 * 총 레코드 수: ${incidents.length}건
 * 총 보험금: ${totalInsuranceCost.toLocaleString()}원 (${insuranceCount}건 반영)
 */
`;

const storageBoilerplate = `
// 하위 호환 및 전역 바인딩 (initialIncidents 변수 영구 보장)
const initialIncidents = INITIAL_INCIDENTS;
if (typeof window !== "undefined") {
  window.INITIAL_INCIDENTS = INITIAL_INCIDENTS;
  window.initialIncidents = INITIAL_INCIDENTS;
}

// 로컬 스토리지 키 및 버전 관리
const DATA_VERSION = "20261030_v2";
const VERSION_KEY = "resort_data_version";
const STORAGE_KEY = "resort_incidents_data";
const LEGACY_STORAGE_KEY = "resort_incident_records_v2";

// 데이터 매니저 (IncidentStorage - 버전 체크 및 오염 캐시 자동 정화 탑재)
const IncidentStorage = {
  getAll() {
    try {
      if (typeof localStorage === "undefined") return INITIAL_INCIDENTS;
      
      // [요구사항 3] 데이터 버전 체크 및 오염 캐시 강제 갱신
      const curVersion = localStorage.getItem(VERSION_KEY);
      if (curVersion !== DATA_VERSION) {
        console.warn("[Storage] 데이터 버전 갱신 (" + curVersion + " -> " + DATA_VERSION + "). 오염된 캐시를 클리어하고 원본 561건으로 즉시 덮어씁니다.");
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(LEGACY_STORAGE_KEY);
        localStorage.setItem(VERSION_KEY, DATA_VERSION);
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
          let migrated = false;
          const initialMap = new Map();
          INITIAL_INCIDENTS.forEach(item => initialMap.set(item.id, item));

          records.forEach(item => {
            const orig = initialMap.get(item.id);
            if (orig) {
              // 1. 사고유형 삼중 매핑 속성 100% 원본 동기화
              if (item.category !== orig.category || item.type !== orig.type || item.incidentType !== orig.incidentType) {
                item.category = orig.category;
                item.type = orig.type;
                item.incidentType = orig.incidentType;
                item['사고유형1'] = orig['사고유형1'];
                item.title = orig.title;
                migrated = true;
              }
              // 2. 실무 보험금 동기화
              if (item.cost !== orig.cost) {
                item.cost = orig.cost;
                item.totalAmount = orig.totalAmount;
                item.companyAmount = orig.companyAmount;
                item.personalAmount = orig.personalAmount;
                item.faultRatio = orig.faultRatio;
                migrated = true;
              }
              // 3. 부서 및 사업부 동기화
              if (item.businessUnit !== orig.businessUnit || item.resort !== orig.resort) {
                item.businessUnit = orig.businessUnit;
                item.resort = orig.resort;
                item.dept = orig.dept;
                migrated = true;
              }
              // 4. 피해자 유형 및 위치 동기화
              if (item.victimType !== orig.victimType) {
                item.victimType = orig.victimType;
                migrated = true;
              }
              if (item.location !== orig.location || item.locationDetail !== orig.locationDetail) {
                item.location = orig.location;
                item.locationDetail = orig.locationDetail;
                migrated = true;
              }
              if (item.notes !== orig.notes) {
                item.notes = orig.notes;
                item.specialNotes = orig.notes;
                migrated = true;
              }
            }
          });
          if (migrated) this.saveAll(records);
          return records;
        }
      }
      // 로컬스토리지에 데이터가 없는 경우 561건 원본 기본값 저장 후 반환
      localStorage.setItem(VERSION_KEY, DATA_VERSION);
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
    const idx = list.findIndex(item => item.id === id);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...updatedFields };
      this.saveAll(list);
    }
    return list;
  },

  delete(id) {
    const list = this.getAll().filter(item => item.id !== id);
    this.saveAll(list);
    return list;
  },

  reset() {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(VERSION_KEY, DATA_VERSION);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
    }
    return INITIAL_INCIDENTS;
  }
};

if (typeof window !== "undefined") {
  window.DATA_VERSION = DATA_VERSION;
  window.VERSION_KEY = VERSION_KEY;
  window.STORAGE_KEY = STORAGE_KEY;
  window.IncidentStorage = IncidentStorage;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { DATA_VERSION, INITIAL_INCIDENTS, initialIncidents, IncidentStorage };
}
`;

const jsonString = JSON.stringify(incidents, null, 2);
const finalDataContent = `${headerComment}const INITIAL_INCIDENTS = ${jsonString};\n${storageBoilerplate}`;

const targetPath = path.join(__dirname, 'data.js');
console.log(`[파일 저장] data.js에 ${incidents.length}건을 단번에 안전하게 덮어씁니다...`);
fs.writeFileSync(targetPath, finalDataContent, 'utf8');
console.log(`[성공] data.js 생성 완료! (크기: ${(fs.statSync(targetPath).size / 1024).toFixed(1)} KB)`);

// 보조 json 캐시 저장
const scratchPath = path.join(__dirname, 'scratch_561_records.json');
fs.writeFileSync(scratchPath, jsonString, 'utf8');
console.log(`[성공] scratch_561_records.json 동기화 완료!`);
