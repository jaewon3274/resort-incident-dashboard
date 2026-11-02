/**
 * IPARK 리조트 안전사고 모니터링 시스템 - 데이터 파서 및 업데이트 자동화 스크립트
 * 561건 전체 사고유형 다중 키 검사 및 지능형 키워드 분류 fallback 적용
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 1. 사고유형 추출 다중 키 검사 (Multi-key inspection)
function extractIncidentType(raw) {
  if (!raw) return "";
  const val = raw.incidentType ||
              raw.type ||
              raw['사고유형1'] ||
              raw['사고유형'] ||
              raw['사고 구분'] ||
              raw['사고구분'] ||
              raw['유형'] ||
              raw['사고 형태'] ||
              raw['사고형태'] ||
              raw['사고분류'] ||
              raw['사고종류'] ||
              raw['사고 종류'] ||
              raw['분류'] ||
              raw.category ||
              raw.Category ||
              "";
  return String(val).replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
}

// 2. 지능형 키워드 분류 Fallback 로직
// 만약 사고유형이 공란이거나 '기타'이더라도, 사고 경위나 제목/위치에 키워드가 있다면 정확히 자동 분류
function resolveCategoryFallback(category, contextText) {
  let cat = (category || "").trim();
  // 정규화 (줄바꿈 제거 및 표준화)
  cat = cat.replace(/[\r\n]+/g, "").trim();
  if (cat === "타구사고 (차량)") cat = "타구사고(차량)";
  if (cat === "대물사고 (차량피해)") cat = "대물사고(차량피해)";
  if (cat === "대물사고 (골프백)") cat = "대물사고(골프백)";
  if (cat === "장비사고 (샌드프로)") cat = "장비사고(샌드프로)";

  // 명확한 세부 유형이 있는 경우 그대로 반환
  if (cat && cat !== "기타" && cat !== "안전 사고" && cat !== "None") {
    return cat;
  }

  if (!contextText) return cat || "기타";
  const t = String(contextText).toLowerCase();

  // 지능형 키워드 매칭
  if (/타구|티샷|해저드샷|헤드샷|비구/.test(t) || (/볼/.test(t) && /맞|타격|날아|충격|안면|허벅지|가슴|두부/.test(t))) {
    if (/차량|유리|앞유리|본넷|도어|차/.test(t) && /볼|타구/.test(t)) {
      return "타구사고(차량)";
    }
    return "타구사고";
  }

  if (/카트/.test(t) && /전복|추락|끼임|충돌|접촉|부딪|운전|주행|하차|오작동|깔림/.test(t)) {
    return "카트사고";
  }
  if (/카트/.test(t)) {
    return "카트사고";
  }

  if (/넘어|미끄러|낙상|접지름|헛디딤|스텝|디딤|발목/.test(t)) {
    return "넘어짐";
  }

  if (/부딪|충돌|접촉|가격|타박/.test(t)) {
    return "부딪힘";
  }

  if (/열상|봉합|꿰매/.test(t)) {
    return "열상";
  }

  if (/베임|창상|자상|찔림|유리/.test(t)) {
    return "베임";
  }

  if (/골절|부러/.test(t)) {
    return "골절";
  }

  if (/화상/.test(t)) {
    return "화상";
  }

  if (/화재|불|연기/.test(t)) {
    return "화재";
  }

  if (/감전|전류|스파크/.test(t)) {
    return "감전";
  }

  if (/물에 빠짐|빠짐|낙하|추락|맨홀/.test(t)) {
    return "빠짐";
  }

  if (/벌|벌레|쏘임|물림|말벌/.test(t)) {
    return "벌 쏘임";
  }

  if (/클럽|샤프트|골프채/.test(t) && /파손|손상|부러/.test(t)) {
    return "클럽 파손";
  }

  if (/차량|접촉사고|주차|범퍼|덴트/.test(t)) {
    return "차량사고";
  }

  if (/시설물|시설|기물|문짝|타일|누수|천장|승강기|엘리베이터/.test(t)) {
    return "시설물";
  }

  return "기타";
}

// 3. 부서 정밀 자동 매핑 (4대 CC 전담팀 및 콘도/부대시설 격리)
function inferDept(item) {
  if (!item) return "기타";
  const origDept = (item.dept || "").trim();
  const resort = (item.resort || "").trim();
  const loc = (item.locationDetail || "").trim();
  const zone = (item.zone || "").trim();
  const title = (item.title || "").trim();
  const desc = (item.description || "").trim();
  const cat = (item.category || "").trim();
  const fullText = `${origDept} ${resort} ${loc} ${zone} ${title} ${desc} ${cat}`.toLowerCase();

  const isGolfCourseSpecific = /파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h|오크\s*\d*h|힐\s*\d*h|브릿지\s*\d*h|루나\s*\d*h|솔라\s*\d*h|인\s*\d*h|아웃\s*\d*h|\b\d+h\b|페어웨이|티잉|티박스|그린|벙커|러프|해저드|크리크|카트도로|캐디|골프카트/i.test(fullText);

  const isCondoRoomVillage = (
    /콘도|객실|호실|빌리지|d콘도|골프빌리지|타워[a-d]?|숙박|프런트|하우스키핑|스위트|베개|침대|욕실|발코니|테라스|객실키|침구/i.test(fullText) ||
    /빌리지|콘도|객실/i.test(resort) ||
    /빌리지|콘도|객실/i.test(loc)
  );

  const isSaunaLeisure = (
    /사우나|스파|아쿠아|수영장|자쿠지|노천탕|락커|락카|냉탕|온탕|열탕|샤워실/i.test(fullText) ||
    /스키장|스키|눈썰매|슬로프|리프트|렌탈/i.test(fullText) ||
    /레저팀|스키장/.test(resort) ||
    /레저팀/.test(origDept)
  );

  const isFnb = (
    /식음|f&b|레스토랑|카페|주방|조식|뷔페|식당|다이닝|바비큐|베이커리|피오레토|파크키친/i.test(fullText) ||
    /식음팀/.test(origDept)
  );

  const isFacility = (
    /시설|기계|전기|보일러|영선|승강기|엘리베이터|방재|소방|변전|정화조|누수|정전|동파|조경/i.test(fullText) ||
    /시설팀/.test(origDept)
  );

  if (!isGolfCourseSpecific) {
    if (isCondoRoomVillage && !isSaunaLeisure && !isFnb) return "객실팀";
    if (isSaunaLeisure) return "레저팀";
    if (isFnb) return "식음팀";
    if (isFacility) return "시설팀";
  }

  if (/성문안|루나|솔라/i.test(fullText)) return "성문안팀";
  if (/월송리|월송|인\s*\d*h|아웃\s*\d*h/i.test(fullText)) return "월송리팀";
  if (/힐스팀|힐스cc|힐\s*\d*h|브릿지\s*\d*h/i.test(fullText)) return "힐스팀";
  if (/밸리팀|밸리cc|오크\s*\d*h|파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h/i.test(fullText)) return "밸리팀";

  if (["밸리팀", "힐스팀", "성문안팀", "월송리팀", "레저팀", "시설팀", "객실팀", "식음팀"].includes(origDept)) return origDept;
  if (["밸리팀", "힐스팀", "성문안팀", "월송리팀", "레저팀", "시설팀", "객실팀", "식음팀"].includes(resort)) return resort;
  if (/골프|경기/.test(resort) || /경기/.test(origDept)) return "밸리팀";
  return "시설팀";
}

// 4. 메인 실행 함수
function updateDataFromSource() {
  console.log("=== [IPARK 리조트] 안전사고 데이터 정규화 및 복구 스크립트 실행 ===");

  // scratch_561_records.json 이 생성되어 있으면 이를 1순위로 읽음
  let records = [];
  const scratchPath = path.join(__dirname, 'scratch_561_records.json');
  if (fs.existsSync(scratchPath)) {
    console.log(`[Source] scratch_561_records.json 에서 원본 561건 데이터를 로드합니다.`);
    records = JSON.parse(fs.readFileSync(scratchPath, 'utf8'));
  } else {
    // data.js 에서 로드
    const dataJs = require('./data.js');
    records = dataJs.INITIAL_INCIDENTS || [];
  }

  console.log(`총 ${records.length}건의 데이터를 정규화 및 복구 검사합니다.`);

  let restoredCount = 0;
  const categoryCounts = {};

  records.forEach((item, idx) => {
    // 1. 사고유형 추출 및 키워드 fallback
    const rawType = extractIncidentType(item);
    const resolvedCat = resolveCategoryFallback(rawType || item.category, `${item.description || ""} ${item.title || ""} ${item.locationDetail || ""}`);

    if (item.category !== resolvedCat) {
      item.category = resolvedCat;
      restoredCount++;
    }

    // 2. 제목 복원: '[장소] {원래사고유형} 사고'
    const locPrefix = item.locationDetail && item.locationDetail !== "공용 구역"
      ? `[${item.locationDetail}]`
      : (item.resort ? `[${item.resort}]` : "");
    const expectedTitle = `${locPrefix} ${item.category} 사고`.trim();

    // 만약 제목이 '[장소] 기타 사고'로 변조되어 있거나 비어 있다면 원래 유형 사고로 환원
    if (!item.title || item.title.includes("기타 사고") || item.title.endsWith(" 사고") === false) {
      if (item.category !== "기타" || !item.title) {
        item.title = expectedTitle;
        restoredCount++;
      }
    }

    // 3. 부서 재검증
    item.dept = inferDept(item);

    // 4. 가상 비용 0원 초기화
    item.cost = 0;
    item.totalAmount = 0;
    item.companyAmount = 0;
    item.personalAmount = 0;
    item.faultRatio = "과실 미산정";

    categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
  });

  // 5. 최신순 정렬 (발생일시 내림차순, 문서번호 내림차순)
  records.sort((a, b) => {
    const da = String(a.date || a.reportDate || "");
    const db = String(b.date || b.reportDate || "");
    if (da !== db) return db.localeCompare(da);
    return String(b.id || "").localeCompare(String(a.id || ""));
  });

  console.log(`\n[복구 완료 요약]`);
  console.log(`- 전체 사고 건수: ${records.length}건`);
  console.log(`- 교정/복구 건수: ${restoredCount}필드`);
  console.log(`- 유형별 분포:`, categoryCounts);

  // 6. data.js 파일 생성 및 저장
  const fileHeader = `/**\n * 리조트 안전사고 모니터링 시스템 - 실무 데이터 (561건 정규화 영구 기본값 탑재)\n * IPARK RESORT SAFETY ACCIDENT DATA\n * 최종 업데이트: 2026-10-29 (사고유형 및 제목 전수 복구 완료)\n */\n`;
  const incidentsJson = JSON.stringify(records, null, 2);

  const storageCode = `
// 하위 호환 및 전역 바인딩 (initialIncidents 변수 영구 보장)
const initialIncidents = INITIAL_INCIDENTS;
if (typeof window !== "undefined") {
  window.INITIAL_INCIDENTS = INITIAL_INCIDENTS;
  window.initialIncidents = INITIAL_INCIDENTS;
}

// 로컬 스토리지 키 (영구 보존용 단일 표준 키)
const STORAGE_KEY = "resort_incidents_data";
const LEGACY_STORAGE_KEY = "resort_incident_records_v2";

// 데이터 매니저 (IncidentStorage - 오염 자동 치유 및 동기화 탑재)
const IncidentStorage = {
  getAll() {
    try {
      if (typeof localStorage === "undefined") return INITIAL_INCIDENTS;
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
            // 1. 오염된 '기타' 사고유형 및 '[장소] 기타 사고' 제목 원복 치유
            const orig = initialMap.get(item.id);
            if (orig) {
              if (orig.category !== "기타" && (item.category === "기타" || (item.title && item.title.includes("기타 사고")))) {
                item.category = orig.category;
                item.title = orig.title;
                migrated = true;
              }
              if (item.dept !== orig.dept) {
                item.dept = orig.dept;
                migrated = true;
              }
            }
            // 2. 가상 비용 0원 유지
            if (item.cost > 0 || item.companyAmount > 0) {
              item.cost = 0;
              item.totalAmount = 0;
              item.companyAmount = 0;
              item.personalAmount = 0;
              item.faultRatio = "과실 미산정";
              migrated = true;
            }
          });
          if (migrated) this.saveAll(records);
          return records;
        }
      }
      // 로컬스토리지에 데이터가 없는 경우 561건 원본 기본값 저장 후 반환
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
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(INITIAL_INCIDENTS));
    }
    return INITIAL_INCIDENTS;
  }
};

if (typeof window !== "undefined") {
  window.STORAGE_KEY = STORAGE_KEY;
  window.IncidentStorage = IncidentStorage;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { INITIAL_INCIDENTS, initialIncidents, IncidentStorage };
}
`;

  const finalContent = `${fileHeader}const INITIAL_INCIDENTS = ${incidentsJson};\n${storageCode}`;
  fs.writeFileSync(path.join(__dirname, 'data.js'), finalContent, 'utf8');
  console.log(`[완료] data.js에 561건 정규화 원본 데이터가 성공적으로 저장되었습니다.\n`);
}

if (require.main === module) {
  updateDataFromSource();
}

module.exports = {
  extractIncidentType,
  resolveCategoryFallback,
  inferDept,
  updateDataFromSource
};
