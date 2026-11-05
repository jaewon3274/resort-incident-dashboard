// ==========================================================================
// 0. Global System & Data Version Definition
// ==========================================================================
window.APP_DATA_VERSION = '20261104_vCHART_ZONE_FIX';
const DATA_VERSION = window.APP_DATA_VERSION;

// ==========================================================================
// 1. Authentication Gateway Logic (사내 보안 로그인 게이트웨이)
// ==========================================================================
const AUTH_KEY = "ipark_auth";
const VALID_CREDENTIALS = {
  id: "safety",
  pw: "240124!"
};

function checkAuthStatus() {
  // Clear any unintended persistent storage
  try {
    localStorage.removeItem("ipark_auth");
    localStorage.removeItem("ipark_safety_auth");
    localStorage.removeItem("safety_logged_in");
  } catch (_) {}

  const isAuth = sessionStorage.getItem(AUTH_KEY) === "true";
  const overlay = document.getElementById("login-gateway-overlay");
  const errorMsg = document.getElementById("login-error-msg");

  if (!isAuth) {
    document.body.classList.add("auth-locked");
    if (overlay) {
      overlay.classList.remove("hidden");
      overlay.style.display = "flex";
    }
    const idInput = document.getElementById("login-id");
    if (idInput && typeof idInput.focus === "function") setTimeout(() => idInput.focus(), 150);
  } else {
    document.body.classList.remove("auth-locked");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.style.display = "none";
    }
    if (errorMsg) errorMsg.style.display = "none";
  }
}
window.checkAuthStatus = checkAuthStatus;

window.handleLogin = function() {
  const idInput = document.getElementById("login-id");
  const pwInput = document.getElementById("login-pw");
  const errorMsg = document.getElementById("login-error-msg");

  const inputId = (idInput ? idInput.value : "").trim();
  const inputPw = (pwInput ? pwInput.value : "").trim();

  if (inputId === VALID_CREDENTIALS.id && inputPw === VALID_CREDENTIALS.pw) {
    sessionStorage.setItem(AUTH_KEY, "true");
    if (errorMsg) errorMsg.style.display = "none";
    checkAuthStatus();
    showToast("IPARK리조트 안전관리시스템에 로그인되었습니다.", "success");
  } else {
    if (errorMsg) {
      errorMsg.style.display = "flex";
      const spanEl = errorMsg.querySelector("span");
      if (spanEl) spanEl.textContent = "아이디 또는 비밀번호가 일치하지 않습니다.";
    }
    if (pwInput) {
      pwInput.value = "";
      if (typeof pwInput.focus === "function") pwInput.focus();
    }
  }
};

window.handleLogout = function() {
  sessionStorage.removeItem(AUTH_KEY);
  sessionStorage.removeItem("ipark_safety_auth");
  try {
    localStorage.removeItem("ipark_auth");
    localStorage.removeItem("ipark_safety_auth");
  } catch (_) {}
  location.reload();
};

// ==========================================================================
// [요구사항 2] 사고유형 다중 검사 방어 파싱 헬퍼 함수
// ==========================================================================
// [표준 데이터 필드 다중 Fallback 접근 함수]
function getIncidentDate(item) {
  if (!item) return "";
  const val = item.date || item.occurredAt || item.incidentDate || item['발생일시'] || item.occurDate || item.reportDate || "";
  return String(val).replace(/[\r\n]+/g, " ").trim();
}
window.getIncidentDate = getIncidentDate;

function getIncidentCategory(item) {
  if (!item) return "기타";
  const val = item.category || item.type || item.incidentType || item['사고유형1'] || "기타";
  return String(val).replace(/[\r\n]+/g, "").trim() || "기타";
}
window.getIncidentCategory = getIncidentCategory;

function getIncidentDept(item) {
  if (!item) return "기타";
  const val = item.dept || item.department || item.businessUnit || item['구분1'] || item['부문/부서'] || "기타";
  return String(val).replace(/[\r\n]+/g, "").trim() || "기타";
}
window.getIncidentDept = getIncidentDept;

function getIncidentLocation(item) {
  if (!item) return "";
  const val = item.location || item.place || item.locationDetail || item['위치(세부)'] || "";
  return String(val).replace(/[\r\n]+/g, " ").trim();
}
window.getIncidentLocation = getIncidentLocation;

function getIncidentVictim(item) {
  if (!item) return "고객";
  const val = item.victim || item.victimType || item['구분2'] || "고객";
  return String(val).replace(/[\r\n]+/g, "").trim() || "고객";
}
window.getIncidentVictim = getIncidentVictim;

function getIncidentCost(item) {
  if (!item) return 0;
  const raw = (item.insuranceCost !== undefined && item.insuranceCost !== null && item.insuranceCost !== "")
    ? item.insuranceCost
    : ((item.cost !== undefined && item.cost !== null && item.cost !== "")
      ? item.cost
      : ((item.companyAmount !== undefined && item.companyAmount !== null && item.companyAmount !== "")
        ? item.companyAmount
        : (item['보험금'] !== undefined && item['보험금'] !== null && item['보험금'] !== "" ? item['보험금'] : item.totalAmount)));
  const num = typeof raw === "number" ? raw : Number(String(raw || 0).replace(/[^0-9.-]/g, ""));
  return isNaN(num) ? 0 : num;
}
window.getIncidentCost = getIncidentCost;

// ==========================================================================
// [신설] 산업재해조사표 제출 상태 배지 생성 헬퍼
// ==========================================================================
function getReportStatusBadge(status) {
  const norm = String(status || '').replace(/\s+/g, '');
  if (norm === '제출완료') {
    return `<span class="badge badge-report-complete text-emerald-700 bg-emerald-50 border border-emerald-200" style="font-size: 0.74rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 9999px; white-space: nowrap; color: #047857; background-color: #ecfdf5; border: 1px solid #a7f3d0;">제출완료</span>`;
  } else if (norm === '제출예정') {
    return `<span class="badge badge-report-planned text-amber-700 bg-amber-50 border border-amber-200" style="font-size: 0.74rem; font-weight: 700; padding: 0.2rem 0.55rem; border-radius: 9999px; white-space: nowrap; color: #b45309; background-color: #fffbeb; border: 1px solid #fde68a;">제출예정</span>`;
  } else {
    return `<span class="badge badge-report-none text-slate-600 bg-slate-100" style="font-size: 0.74rem; font-weight: 600; padding: 0.2rem 0.55rem; border-radius: 9999px; white-space: nowrap; color: #475569; background-color: #f1f5f9; border: 1px solid #cbd5e1;">해당 없음</span>`;
  }
}
window.getReportStatusBadge = getReportStatusBadge;

function normalizeIncident(item) {
  if (!item || typeof item !== "object") return item;

  const dateVal = getIncidentDate(item);
  const catVal = getIncidentCategory(item);
  const deptVal = getIncidentDept(item);
  const locVal = getIncidentLocation(item);
  const costVal = getIncidentCost(item);
  const buVal = item.businessUnit || item.resort || deptVal || "IPARK 리조트";

  // 피해 대상 매핑 (반드시 엑셀 E열 '구분2' 헤더 값 기준 직접 매핑, 본문 검색 금지)
  const rawVictim = item['구분2'] !== undefined && item['구분2'] !== null ? String(item['구분2']) : (item.victimDetail || item.victimType || item.victim || "");
  const cleanVictim = rawVictim.replace(/[\r\n]+/g, ' ').trim();

  let victimType = "기타";
  let victimName = item.victimName && item.victimName !== "익명" ? item.victimName : "";

  const parenMatch = cleanVictim.match(/\(([^)]+)\)/);
  if (parenMatch && parenMatch[1]) {
    victimName = parenMatch[1].replace(/[\r\n]+/g, '').trim();
  }

  if (cleanVictim.includes("고객")) {
    victimType = "고객";
  } else if (cleanVictim.includes("캐디")) {
    victimType = "캐디";
  } else if (
    cleanVictim.includes("직원") ||
    cleanVictim.includes("근로자") ||
    cleanVictim.includes("일용직") ||
    cleanVictim.includes("협력사") ||
    cleanVictim.includes("실습생")
  ) {
    victimType = "직원";
  } else {
    victimType = "기타";
  }

  if (!victimName) {
    victimName = item.victimName || "익명";
  }

  item.date = dateVal;
  item.occurredAt = dateVal;
  item.category = catVal;
  item.type = catVal;
  item.incidentType = catVal;
  item['사고유형1'] = catVal;
  const teamVal = String(item.team || item['구분1'] || buVal || "미분류").replace(/[\r\n]+/g, " ").trim();
  const rawDeptVal = String(item.department || item['부문/부서'] || (item.dept && item.dept !== teamVal ? item.dept : "") || "").replace(/[\r\n]+/g, " ").trim();
  const displayLocationVal = (rawDeptVal && rawDeptVal !== teamVal) ? `${teamVal} (${rawDeptVal})` : teamVal;
  item.team = teamVal;
  item.department = rawDeptVal;
  item.displayLocation = item.displayLocation || displayLocationVal;
  item.dept = rawDeptVal || deptVal;
  item.businessUnit = teamVal;
  item.resort = teamVal;
  item.victim = victimType;
  item.victimType = victimType;
  item.victimName = victimName;
  if (!item['구분2']) {
    item['구분2'] = cleanVictim || victimType;
  }
  item.location = locVal;
  item.place = locVal;
  item.locationDetail = item.locationDetail || locVal;
  item['위치(세부)'] = locVal;
  item.cost = costVal;
  item.companyAmount = costVal;
  item['보험금'] = costVal;
  item.zone = inferZoneFromLocation(locVal, rawDeptVal || deptVal, teamVal);

  // 산업재해조사표 제출 상태 기본값 및 보정
  if (!item.reportStatus && !item.industrialAccidentReport) {
    item.reportStatus = "해당 없음";
    item.industrialAccidentReport = "해당 없음";
  } else {
    let r = String(item.reportStatus || item.industrialAccidentReport || "해당 없음").trim();
    if (r === "해당없음") r = "해당 없음";
    item.reportStatus = r;
    item.industrialAccidentReport = r;
  }

  return item;
}
window.normalizeIncident = normalizeIncident;

// [요구사항 1] 연도-H1892-시퀀스 자동 채번 헬퍼 함수
function generateAutoDocNumber(dateString) {
  let year = 2026;
  if (dateString) {
    const p = parseIncidentDate(dateString);
    if (p && p.getFullYear()) year = p.getFullYear();
  }
  const prefix = `${year}-H1892-`;
  let maxSeq = 0;
  (state.incidents || []).forEach(item => {
    const doc = String(item?.docNo || item?.documentNumber || item?.id || "");
    if (doc.startsWith(prefix)) {
      const numPart = parseInt(doc.replace(prefix, ""), 10);
      if (!isNaN(numPart) && numPart > maxSeq) {
        maxSeq = numPart;
      }
    }
  });
  const nextSeq = String(maxSeq + 1).padStart(6, "0");
  return `${prefix}${nextSeq}`;
}
window.generateAutoDocNumber = generateAutoDocNumber;

// ==========================================================================
// 2. A4 Summary Report Modal & Printing Logic (A4 요약 보고서 인쇄/PDF)
// ==========================================================================
function openPrintReportModal() {
  const modal = document.getElementById("print-report-modal");
  if (!modal) return;

  populateReportData();

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePrintReportModal() {
  const modal = document.getElementById("print-report-modal");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function populateReportData() {
  const data = (state.filteredIncidents && state.filteredIncidents.length > 0)
    ? state.filteredIncidents
    : (state.incidents || []);

  const total = data.length;
  const resolved = data.filter(x => x.status === "조치완료").length;
  const pending = total - resolved;
  const resolvedRate = total > 0 ? ((resolved / total) * 100).toFixed(1) : 0;
  const medical = data.filter(x => x.severity && (x.severity.includes("병원") || x.severity.includes("중등"))).length;
  const totalCost = data.reduce((sum, x) => sum + (x.cost || x.companyAmount || 0), 0);
  const avgCost = total > 0 ? Math.round(totalCost / total) : 0;

  // 1. Meta
  const today = new Date();
  const dateStr = `${today.getFullYear()}년 ${String(today.getMonth() + 1).padStart(2, "0")}월 ${String(today.getDate()).padStart(2, "0")}일`;
  const docDateEl = document.getElementById("report-doc-date");
  if (docDateEl) docDateEl.textContent = dateStr;

  const docPeriodEl = document.getElementById("report-doc-period");
  if (docPeriodEl) {
    if (state.filters.period === "all") {
      docPeriodEl.textContent = "전체 기간 (2023 ~ 2026)";
    } else {
      docPeriodEl.textContent = `최근 기간 (${state.filters.period})`;
    }
  }

  const docResortEl = document.getElementById("report-doc-resort");
  if (docResortEl) {
    docResortEl.textContent = state.filters.resort === "all" ? "전체 사업장 (모든 리조트)" : state.filters.resort;
  }

  // 2. KPIs
  const totalCountEl = document.getElementById("rk-total-count");
  if (totalCountEl) totalCountEl.textContent = `${total.toLocaleString()}건`;

  const totalDescEl = document.getElementById("rk-total-desc");
  if (totalDescEl) {
    totalDescEl.textContent = (state.filters.resort !== "all" || state.filters.category !== "all")
      ? "필터 조건 조회 결과"
      : "전체 등록 누적 건수";
  }

  const rateEl = document.getElementById("rk-resolved-rate");
  if (rateEl) rateEl.textContent = `${resolvedRate}%`;

  const resolvedCountEl = document.getElementById("rk-resolved-count");
  if (resolvedCountEl) resolvedCountEl.textContent = `완료 ${resolved.toLocaleString()}건 / 진행 ${pending.toLocaleString()}건`;

  const medicalEl = document.getElementById("rk-medical-count");
  if (medicalEl) medicalEl.textContent = `${medical.toLocaleString()}건`;

  const costEl = document.getElementById("rk-total-cost");
  if (costEl) costEl.textContent = totalCost > 0 ? `${Math.round(totalCost / 10000).toLocaleString()}만원` : "0원";

  const avgCostEl = document.getElementById("rk-avg-cost");
  if (avgCostEl) avgCostEl.textContent = avgCost > 0 ? `건당 평균 ${Math.round(avgCost / 10000).toLocaleString()}만원` : "건당 평균 0원";

  // 3. Category TOP 5
  const catMap = {};
  data.forEach(x => {
    const c = getIncidentCategory(x);
    catMap[c] = (catMap[c] || 0) + 1;
  });
  const topCategories = Object.entries(catMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const catTbody = document.getElementById("report-top-categories");
  if (catTbody) {
    catTbody.innerHTML = topCategories.map(([cat, cnt], idx) => {
      const share = total > 0 ? ((cnt / total) * 100).toFixed(1) : 0;
      return `
        <tr>
          <td style="text-align: center; font-weight: 700;">${idx + 1}</td>
          <td style="font-weight: 600;">${escapeHtml(cat)}</td>
          <td style="text-align: right; font-weight: 700;">${cnt.toLocaleString()}건</td>
          <td style="text-align: right; color: #64748b;">${share}%</td>
        </tr>
      `;
    }).join("");
  }

  // 4. Zone TOP 5
  const zoneMap = {};
  data.forEach(x => {
    const z = x.zone || "기타";
    zoneMap[z] = (zoneMap[z] || 0) + 1;
  });
  const topZones = Object.entries(zoneMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const zoneTbody = document.getElementById("report-top-zones");
  if (zoneTbody) {
    zoneTbody.innerHTML = topZones.map(([zn, cnt], idx) => {
      const share = total > 0 ? ((cnt / total) * 100).toFixed(1) : 0;
      return `
        <tr>
          <td style="text-align: center; font-weight: 700;">${idx + 1}</td>
          <td style="font-weight: 600;">${escapeHtml(zn)}</td>
          <td style="text-align: right; font-weight: 700;">${cnt.toLocaleString()}건</td>
          <td style="text-align: right; color: #64748b;">${share}%</td>
        </tr>
      `;
    }).join("");
  }

  // 5. Major Incidents TOP 3~4
  const majorList = data.filter(x => (x.cost && x.cost > 0) || (x.severity && (x.severity.includes("중등") || x.severity.includes("병원") || x.severity.includes("중대")))).slice(0, 4);
  const majorFallback = majorList.length >= 3 ? majorList : data.slice(0, 4);

  const majorTbody = document.getElementById("report-major-incidents");
  if (majorTbody) {
    majorTbody.innerHTML = majorFallback.map(item => {
      const displayCost = item.cost ? `${(item.cost / 10000).toLocaleString()}만원` : "-";
      const descSnippet = item.description || item.title || "사고 내용 기록";
      const actionSnippet = item.actionTaken || item.preventiveMeasure || "현장 안전 조치 완료";
      return `
        <tr>
          <td style="font-size: 0.72rem; white-space: nowrap;">${escapeHtml(item.date ? item.date.slice(0, 10) : "-")}</td>
          <td style="font-family: monospace; font-weight: 700; font-size: 0.72rem;">${escapeHtml(item.id)}</td>
          <td><strong>${escapeHtml(item.resort || "")}</strong><br><span style="color: #64748b; font-size: 0.7rem;">${escapeHtml(item.locationDetail || item.zone || "")}</span></td>
          <td><span style="font-weight: 600;">${escapeHtml(getIncidentCategory(item))}</span></td>
          <td style="line-height: 1.35;">
            <div><strong>[개요]</strong> ${escapeHtml(descSnippet.slice(0, 45))}${descSnippet.length > 45 ? "..." : ""}</div>
            <div style="color: #2563eb; font-size: 0.7rem; margin-top: 2px;"><strong>[조치]</strong> ${escapeHtml(actionSnippet.slice(0, 45))}${actionSnippet.length > 45 ? "..." : ""}</div>
          </td>
          <td style="text-align: right; font-weight: 700; color: #0f172a;">${displayCost}</td>
        </tr>
      `;
    }).join("");
  }
}

window.triggerReportPrint = function() {
  window.print();
};

// Global pageSize variable
let pageSize = 10;

// Global Page Size Change Handler
window.handlePageSizeChange = function(val) {
  const newSize = parseInt(val, 10);
  if (isNaN(newSize) || newSize <= 0) return;
  pageSize = newSize;
  state.pageSize = newSize;
  state.currentPage = 1;

  const selectEl = document.getElementById("pageSizeSelect");
  if (selectEl && selectEl.value !== String(newSize)) {
    selectEl.value = String(newSize);
  }

  renderTable();
  if (typeof window.updatePagination === "function") {
    window.updatePagination();
  }
};

/**
 * 리조트 안전사고 모니터링 시스템 - Core Application Logic
 * (SheetJS 엑셀 대량 불러오기, 보험/보상 비용 전용 분석 모달 & 실시간 인터랙션 탑재)
 */

// State Management

/**
 * 유형별 사고 발생 비중 전용 고정 색상 맵 (COLOR_MAP)
 * - 슬라이스 색상을 단순 순번(index)이 아닌 유형명 기준 고정 매핑하여 필터링/클릭 후에도 고유 색상 유지
 */
const CATEGORY_COLOR_MAP = {
  "넘어짐": "#38bdf8",            // Sky Blue
  "타구사고": "#f59e0b",          // Amber / Orange
  "타구사고(차량)": "#f97316",    // Bright Orange
  "카트사고": "#10b981",          // Emerald Green
  "차량사고": "#ef4444",          // Red
  "부딪힘": "#8b5cf6",            // Purple
  "대물사고(차량피해)": "#06b6d4", // Cyan
  "열상": "#ec4899",              // Pink
  "대물사고": "#14b8a6",          // Teal
  "클럽 파손": "#6366f1",         // Indigo
  "베임": "#f43f5e",              // Rose
  "대물사고(골프백)": "#84cc16",   // Lime
  "끼임": "#d946ef",              // Fuchsia
  "벌 쏘임": "#eab308",           // Yellow
  "낙상사고": "#0ea5e9",          // Light Blue
  "떨어짐": "#0284c7",            // Blue
  "물체에 맞음": "#a855f7",        // Violet
  "근골격계 질환": "#3b82f6",      // Blue
  "감전": "#e11d48",              // Crimson
  "인사사고": "#dc2626",          // Dark Red
  "화상": "#ff5722",              // Deep Orange
  "화재": "#b91c1c",              // Dark Red
  "찔림": "#fb7185",              // Light Rose
  "빠짐": "#0284c7",              // Ocean Blue
  "타구사고(카트)": "#fb923c",     // Orange Peach
  "시설물": "#64748b",            // Slate
  "벌레 물림": "#ca8a04",         // Dark Amber
  "사망": "#475569",              // Charcoal
  "장비사고(샌드프로)": "#059669",  // Forest Green
  "기타": "#94a3b8"               // Slate Gray
};
if (typeof window !== "undefined") {
  window.CATEGORY_COLOR_MAP = CATEGORY_COLOR_MAP;
}

function getCategoryColor(categoryName) {
  if (!categoryName) return "#94a3b8";
  if (categoryName.startsWith("기타 외") || categoryName === "기타") {
    return "#94a3b8";
  }
  if (CATEGORY_COLOR_MAP[categoryName]) {
    return CATEGORY_COLOR_MAP[categoryName];
  }
  let hash = 0;
  for (let i = 0; i < categoryName.length; i++) {
    hash = categoryName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const fallbackPalette = [
    "#38bdf8", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6",
    "#06b6d4", "#ec4899", "#6366f1", "#f97316", "#14b8a6",
    "#84cc16", "#f43f5e", "#a855f7", "#eab308", "#0ea5e9"
  ];
  return fallbackPalette[Math.abs(hash) % fallbackPalette.length];
}
if (typeof window !== "undefined") {
  window.getCategoryColor = getCategoryColor;
}

const state = {
  incidents: [],
  filteredIncidents: [],
  filters: {
    search: "",
    resort: "all",
    dept: "all",
    category: "all",
    victimType: "all",
    severity: "all",
    status: "all",
    period: "all",
    zone: "all",
    reportStatus: "all"
  },
  kpiDrilldownBaseList: [],
  kpiDrillYearFilter: "all",
  currentKpiDrillType: null,
  currentKpiDrillTitle: "",
  trendSelectedItem: null,
  currentPage: 1,
  pageSize: 10,
  sort: {
    column: "id",
    order: "desc"
  },
  currentDetailId: null,
  isEditMode: false,
  editAttachments: [],
  regAttachments: [],
  yoyDrillVictimFilter: "all",
  kpiDrillVictimFilter: "all",
  costModal: {
    year: "all",
    from: "",
    to: ""
  },
  charts: {
    categoryChart: null,
    deptChart: null,
    zoneChart: null,
    trendYearChart: null,
    trendMonthlyChart: null,
    medicalVictimChart: null
  }
};
if (typeof window !== "undefined") {
  window.state = state;
}

/**
 * 피해자 세부 분류 (캐디 / 임직원 / 고객 / 기타)
 * - 임직원(직원): 보라색 뱃지 (bg-purple-50 text-purple-700 border-purple-200)
 * - 캐디: 주황색 뱃지 (bg-amber-50 text-amber-700 border-amber-200)
 * - 고객: 연파랑 뱃지 (bg-blue-50 text-blue-700 border-blue-200)
 * @param {Object} item 사고 객체
 * @returns {{ category: string, label: string, badgeClass: string }}
 */
function classifyVictim(item) {
  if (!item) {
    return {
      category: "other",
      label: "기타",
      badgeClass: "badge-victim-other bg-slate-50 text-slate-700 border-slate-200",
      inlineStyle: "background-color: #f8fafc; color: #334155; border: 1px solid #cbd5e1;"
    };
  }

  // 본문(텍스트) 검색 절대 금지: 오직 item.victimType (또는 E열 '구분2' 헤더 값) 기준으로만 직접 매핑
  const rawType = String(item.victimType || item['구분2'] || item.victim || "").replace(/[\r\n]+/g, " ").trim();

  // 1. 고객: 파란색
  if (rawType.includes("고객")) {
    return {
      category: "customer",
      label: "고객",
      badgeClass: "badge-victim-customer bg-blue-50 text-blue-700 border-blue-200",
      inlineStyle: "background-color: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;"
    };
  }

  // 2. 캐디: 노란/주황색 (amber)
  if (rawType.includes("캐디")) {
    return {
      category: "caddy",
      label: "캐디",
      badgeClass: "badge-victim-caddy bg-amber-50 text-amber-700 border-amber-200",
      inlineStyle: "background-color: #fffbeb; color: #b45309; border: 1px solid #fde68a;"
    };
  }

  // 3. 직원: 보라색 ('직원', '근로자', '일용직', '협력사', '실습생' 등)
  if (
    rawType.includes("직원") ||
    rawType.includes("근로자") ||
    rawType.includes("일용직") ||
    rawType.includes("협력사") ||
    rawType.includes("실습생")
  ) {
    return {
      category: "employee",
      label: "직원",
      badgeClass: "badge-victim-employee bg-purple-50 text-purple-700 border-purple-200",
      inlineStyle: "background-color: #faf5ff; color: #7e22ce; border: 1px solid #e9d5ff;"
    };
  }

  // 4. 그 외 또는 미분류: 회색 '기타'
  return {
    category: "other",
    label: rawType || "기타",
    badgeClass: "badge-victim-other bg-slate-50 text-slate-700 border-slate-200",
    inlineStyle: "background-color: #f8fafc; color: #334155; border: 1px solid #cbd5e1;"
  };
}
window.classifyVictim = classifyVictim;

/**
 * 파일 크기 사람이 읽기 쉬운 포맷으로 변환 (Bytes -> KB, MB)
 */
function formatFileSize(bytes) {
  if (!bytes || bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}
window.formatFileSize = formatFileSize;

/**
 * 파일 확장자 기반 MIME 타입 판별
 */
function getFileTypeFromName(fileName) {
  const ext = (fileName || "").split(".").pop().toLowerCase();
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (ext === "png") return "image/png";
  if (ext === "gif") return "image/gif";
  if (ext === "pdf") return "application/pdf";
  if (ext === "hwp") return "application/x-hwp";
  if (ext === "hwpx") return "application/hwp+zip";
  if (["xls", "xlsx"].includes(ext)) return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (["doc", "docx"].includes(ext)) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  return "application/octet-stream";
}
window.getFileTypeFromName = getFileTypeFromName;

/**
 * 파일 확장자별 아이콘 반환
 */
function getFileIcon(fileName) {
  const ext = (fileName || "").split(".").pop().toLowerCase();
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "🖼️";
  if (ext === "pdf") return "📕";
  if (["hwp", "hwpx"].includes(ext)) return "📝";
  if (["xls", "xlsx", "csv"].includes(ext)) return "📊";
  if (["doc", "docx"].includes(ext)) return "📄";
  return "📁";
}
window.getFileIcon = getFileIcon;

/**
 * 첨부파일 선택 처리 (다중 파일 FileReader DataURL 변환)
 */
function handleFileSelect(event, mode) {
  const files = Array.from(event.target.files || []);
  if (files.length === 0) return;

  const readers = files.map(file => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve({
          id: "att-" + Date.now() + "-" + Math.random().toString(36).substr(2, 6),
          name: file.name,
          size: file.size,
          type: file.type || getFileTypeFromName(file.name),
          data: e.target.result
        });
      };
      reader.readAsDataURL(file);
    });
  });

  Promise.all(readers).then(newAttachments => {
    if (mode === "edit") {
      state.editAttachments = [...(state.editAttachments || []), ...newAttachments];
      renderAttachmentList("edit");
    } else {
      state.regAttachments = [...(state.regAttachments || []), ...newAttachments];
      renderAttachmentList("reg");
    }
  });

  event.target.value = "";
}
window.handleFileSelect = handleFileSelect;

/**
 * 첨부파일 목록에서 개별 파일 삭제
 */
function removeAttachment(attId, mode) {
  if (mode === "edit") {
    state.editAttachments = (state.editAttachments || []).filter(a => a.id !== attId);
    renderAttachmentList("edit");
  } else {
    state.regAttachments = (state.regAttachments || []).filter(a => a.id !== attId);
    renderAttachmentList("reg");
  }
}
window.removeAttachment = removeAttachment;

/**
 * 등록/수정 모달 내 첨부파일 목록 렌더링
 */
function renderAttachmentList(mode) {
  const containerId = mode === "edit" ? "edit-attachment-list" : "reg-attachment-list";
  const container = document.getElementById(containerId);
  if (!container) return;

  const list = mode === "edit" ? (state.editAttachments || []) : (state.regAttachments || []);
  if (list.length === 0) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = list.map(att => `
    <div class="attachment-edit-row">
      <div class="attachment-edit-left">
        <span style="font-size: 1.15rem;">${getFileIcon(att.name)}</span>
        <span class="attachment-file-name" title="${escapeHtml(att.name)}">${escapeHtml(att.name)}</span>
        <span class="attachment-file-size">(${formatFileSize(att.size)})</span>
      </div>
      <button type="button" class="btn-attachment-del" onclick="removeAttachment('${att.id}', '${mode}')" title="파일 첨부 삭제">
        삭제
      </button>
    </div>
  `).join("");
}
window.renderAttachmentList = renderAttachmentList;

/**
 * 첨부파일 미리보기 모달 열기
 * - PDF 및 이미지: 인라인 미리보기
 * - HWP, XLSX 등 브라우저 미지원 포맷: 안내 팝업 및 다운로드 버튼 표기
 */
function openFilePreview(attachment) {
  if (!attachment) return;

  const modal = document.getElementById("filePreviewModal");
  const titleEl = document.getElementById("previewModalTitle");
  const subEl = document.getElementById("previewModalSub");
  const iconEl = document.getElementById("previewModalIcon");
  const bodyEl = document.getElementById("filePreviewBody");
  const dlBtn = document.getElementById("btn-preview-download");
  const dlLabel = document.getElementById("preview-download-label");

  if (!modal || !bodyEl) return;

  const fileName = attachment.name || "첨부파일";
  const ext = fileName.split(".").pop().toLowerCase();
  const isImage = ["jpg", "jpeg", "png", "gif", "webp"].includes(ext) || (attachment.type && attachment.type.startsWith("image/"));
  const isPdf = ext === "pdf" || (attachment.type && attachment.type.includes("pdf"));

  if (titleEl) titleEl.textContent = fileName;
  if (subEl) subEl.textContent = `${formatFileSize(attachment.size)} • ${ext.toUpperCase()} 파일`;
  if (iconEl) iconEl.textContent = getFileIcon(fileName);

  if (dlBtn) {
    dlBtn.href = attachment.data || "#";
    dlBtn.download = fileName;
  }
  if (dlLabel) {
    dlLabel.textContent = `'${fileName}' 원본 다운로드`;
  }

  if (isImage) {
    bodyEl.innerHTML = `
      <div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: auto; padding: 1rem;">
        <img src="${attachment.data}" alt="${escapeHtml(fileName)}" style="max-width: 100%; max-height: 68vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.12);">
      </div>
    `;
  } else if (isPdf) {
    bodyEl.innerHTML = `
      <iframe src="${attachment.data}" style="width: 100%; height: 68vh; border: none; border-radius: 8px;" title="${escapeHtml(fileName)}"></iframe>
    `;
  } else {
    bodyEl.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; max-width: 480px; margin: auto;">
        <div style="font-size: 3.5rem; margin-bottom: 1rem;">📦</div>
        <h4 style="font-size: 1.15rem; font-weight: 800; color: #0f172a; margin-bottom: 0.6rem;">
          브라우저 직접 미리보기 미지원 형식
        </h4>
        <p style="font-size: 0.88rem; color: #64748b; line-height: 1.6; margin-bottom: 1.5rem;">
          해당 파일(<strong>${escapeHtml(ext.toUpperCase())}</strong>)은 보안 및 전용 뷰어 사양에 따라 브라우저 인라인 미리보기를 직접 지원하지 않습니다.<br>
          아래의 [다운로드] 버튼을 눌러 원본 파일명으로 내려받아 확인해 주세요.
        </p>
        <a href="${attachment.data}" download="${escapeHtml(fileName)}" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; font-size: 0.9rem; text-decoration: none;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          ${escapeHtml(fileName)} 바로 다운로드
        </a>
      </div>
    `;
  }

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}
window.openFilePreview = openFilePreview;

function openFilePreviewById(attId) {
  // 1. 현재 상세 모달의 사고 객체 검색
  const incident = state.incidents.find(i => i.id === state.currentDetailId);
  if (incident && incident.attachments) {
    const att = incident.attachments.find(a => a.id === attId);
    if (att) {
      openFilePreview(att);
      return;
    }
  }
  // 2. 수정 중인 첨부파일 목록 검색
  const editAtt = (state.editAttachments || []).find(a => a.id === attId);
  if (editAtt) {
    openFilePreview(editAtt);
    return;
  }
  // 3. 등록 중인 첨부파일 목록 검색
  const regAtt = (state.regAttachments || []).find(a => a.id === attId);
  if (regAtt) {
    openFilePreview(regAtt);
    return;
  }
}
window.openFilePreviewById = openFilePreviewById;

function closeFilePreview() {
  const modal = document.getElementById("filePreviewModal");
  if (modal) modal.classList.remove("active");

  const detailModal = document.getElementById("detail-modal");
  if (!detailModal || !detailModal.classList.contains("active")) {
    document.body.classList.remove("modal-open");
  }
}
window.closeFilePreview = closeFilePreview;

// Navigation History for Detail Modal Back-Navigation
let detailModalOrigin = null;

// ==========================================================================
// [긴급 복구] 탭 전환 함수 전역 조기 선언 및 안전 래퍼
// ==========================================================================
function switchViewTab(tabName) {
  try {
    const monitoringBtn = document.getElementById("tab-btn-monitoring");
    const comparisonBtn = document.getElementById("tab-btn-comparison");
    const monitoringView = document.getElementById("view-monitoring");
    const comparisonView = document.getElementById("view-comparison");

    if (tabName === "monitoring") {
      if (monitoringBtn) monitoringBtn.classList.add("active");
      if (comparisonBtn) comparisonBtn.classList.remove("active");
      if (monitoringView) monitoringView.style.display = "block";
      if (comparisonView) comparisonView.style.display = "none";
    } else if (tabName === "comparison") {
      if (comparisonBtn) comparisonBtn.classList.add("active");
      if (monitoringBtn) monitoringBtn.classList.remove("active");
      if (monitoringView) monitoringView.style.display = "none";
      if (comparisonView) comparisonView.style.display = "block";

      try {
        const selA = document.getElementById("cmp-year-a");
        const selB = document.getElementById("cmp-year-b");
        if (selA && !selA.value) selA.value = "2026";
        if (selB && (!selB.value || selB.value === "2025")) selB.value = "2026";

        const monthYearA = document.getElementById("cmp-month-year-a");
        const monthYearB = document.getElementById("cmp-month-year-b");
        if (monthYearA && !monthYearA.value) monthYearA.value = "2026";
        if (monthYearB && (!monthYearB.value || monthYearB.value === "2025")) monthYearB.value = "2026";

        const curMonth = String(new Date().getMonth() + 1);
        const monthA = document.getElementById("cmp-month-a");
        const monthB = document.getElementById("cmp-month-b");
        if (monthA && (!monthA.value || monthA.value === "5")) monthA.value = curMonth;
        if (monthB && (!monthB.value || monthB.value === "5")) monthB.value = curMonth;
      } catch (cmpInitErr) {
        console.warn("cmp controls init err:", cmpInitErr);
      }

      try {
        if (typeof populateYoyIncidentTypeFilter === "function") populateYoyIncidentTypeFilter();
        if (typeof populateYoyTableBizFilter === "function") populateYoyTableBizFilter();
      } catch (popErr) {
        console.warn("populateYoy filters err:", popErr);
      }

      setTimeout(() => {
        try {
          if (typeof window.executeComparison === "function") window.executeComparison();
        } catch (execErr) {
          console.error("executeComparison err:", execErr);
        }
      }, 50);
    }
  } catch (tabErr) {
    console.error("switchViewTab error:", tabErr);
  }
}
window.switchViewTab = switchViewTab;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  try { checkAuthStatus(); } catch (e) { console.error("checkAuthStatus error:", e); }
  try { loadData(); } catch (e) { console.error("loadData error:", e); }
  try { updateSortHeaderUI(); } catch (e) { console.error("updateSortHeaderUI error:", e); }
  try { setupEventListeners(); } catch (e) { console.error("setupEventListeners error:", e); }
  try { setupCostModalEvents(); } catch (e) { console.error("setupCostModalEvents error:", e); }
  try { populateFilterDropdowns(); } catch (e) { console.error("populateFilterDropdowns error:", e); }
  try { applyFilters(); } catch (e) { console.error("applyFilters error:", e); }
});

// Load Data from LocalStorage (1순위: localStorage 'resort_incidents_data' 영구 데이터)
// DATA_VERSION은 최상단 window.APP_DATA_VERSION 단일 소스 참조
const VERSION_KEY = "resort_data_version";

function loadData() {
  const defaultList = (typeof window.initialIncidents !== "undefined" && Array.isArray(window.initialIncidents) && window.initialIncidents.length > 0)
    ? window.initialIncidents
    : (typeof INITIAL_INCIDENTS !== "undefined" && Array.isArray(INITIAL_INCIDENTS) ? INITIAL_INCIDENTS : []);

  let storedRecords = null;

  // 1. 페이지가 로드될 때 무조건 localStorage를 최우선으로 검사
  try {
    // 1-1. 'resort_base_template_data' 또는 'resort_incidents_master' 최우선 탐색
    const masterRaw = localStorage.getItem('resort_base_template_data') || localStorage.getItem('resort_incidents_master');
    if (masterRaw) {
      try {
        const parsed = JSON.parse(masterRaw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          storedRecords = parsed;
          console.log(`[Dashboard] localStorage 마스터 데이터 발견: ${storedRecords.length}건을 최우선 로드합니다.`);
        }
      } catch (e) {
        console.warn("마스터 데이터 JSON 파싱 실패:", e);
      }
    }

    // 1-2. 마스터 데이터가 없으면 'resort_incidents_data' 또는 'resort_incident_records_v2' 확인
    if (!storedRecords) {
      const dataRaw = localStorage.getItem('resort_incidents_data') || localStorage.getItem('resort_incident_records_v2');
      if (dataRaw) {
        try {
          const parsed = JSON.parse(dataRaw);
          if (Array.isArray(parsed) && parsed.length > 0) {
            storedRecords = parsed;
            console.log(`[Dashboard] localStorage 작업 데이터 발견: ${storedRecords.length}건을 로드합니다.`);
          }
        } catch (e) {
          console.warn("작업 데이터 JSON 파싱 실패:", e);
        }
      }
    }
  } catch (err) {
    console.warn("로컬스토리지 접근 제한 또는 파싱 오류:", err);
  }

  // 2. localStorage에 저장된 데이터가 존재하고 비어있지 않다면:
  //    data.js의 기본값이나 DATA_VERSION 체크로 덮어쓰지 말고 저장된 데이터를 그대로 로드
  if (storedRecords && storedRecords.length > 0) {
    storedRecords.forEach(item => {
      normalizeIncident(item);
    });

    state.incidents = storedRecords;
    sortIncidentsList(state.incidents, "docNo", "desc");

    // 로컬스토리지 키 일괄 동기화 및 버전 보호 처리
    try {
      const jsonStr = JSON.stringify(state.incidents);
      localStorage.setItem('resort_incidents_master', jsonStr);
      localStorage.setItem('resort_base_template_data', jsonStr);
      localStorage.setItem('resort_incidents_data', jsonStr);
      localStorage.setItem('resort_incident_records_v2', jsonStr);
      localStorage.setItem(VERSION_KEY, window.APP_DATA_VERSION);
    } catch (_) {}

    console.log(`[Dashboard] localStorage 보존 데이터 ${state.incidents.length}건 로드 완료 (강력 새로고침 보호).`);
    return;
  }

  // 3. localStorage에 데이터가 전혀 없을 때만 data.js의 기본 데이터를 로드하고 저장
  console.log(`[Dashboard] localStorage 데이터 없음: data.js 기본 데이터(${defaultList.length}건)를 초기 로드합니다.`);
  const cloned = JSON.parse(JSON.stringify(defaultList));
  cloned.forEach(item => {
    normalizeIncident(item);
  });

  state.incidents = cloned;
  sortIncidentsList(state.incidents, "docNo", "desc");

  try {
    const jsonStr = JSON.stringify(state.incidents);
    localStorage.setItem('resort_incidents_master', jsonStr);
    localStorage.setItem('resort_base_template_data', jsonStr);
    localStorage.setItem('resort_incidents_data', jsonStr);
    localStorage.setItem('resort_incident_records_v2', jsonStr);
    localStorage.setItem(VERSION_KEY, window.APP_DATA_VERSION);
    console.log(`[Dashboard] data.js 기본 데이터(${state.incidents.length}건)를 로컬스토리지에 초기 영구 저장했습니다.`);
  } catch (saveErr) {
    console.warn("초기 데이터 로컬스토리지 저장 실패:", saveErr);
  }
}

function setupEventListeners() {
  // [긴급 복구] 탭 전환 이벤트 리스너 명시적 등록 (인라인 onclick 외에 addEventListener 다중 보장)
  try {
    const tabMonitoring = document.getElementById("tab-btn-monitoring");
    if (tabMonitoring) tabMonitoring.addEventListener("click", () => window.switchViewTab("monitoring"));
    const tabComparison = document.getElementById("tab-btn-comparison");
    if (tabComparison) tabComparison.addEventListener("click", () => window.switchViewTab("comparison"));
  } catch (e) {
    console.warn("Tab event listener binding error:", e);
  }
  // 보안 로그인 & 로그아웃 이벤트 바인딩
  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);

  // A4 보고서 인쇄 모달 이벤트 바인딩
  const printSummaryBtn = document.getElementById("btn-print-summary");
  if (printSummaryBtn) printSummaryBtn.addEventListener("click", openPrintReportModal);

  const closePrintModalBtn = document.getElementById("btn-close-print-modal");
  if (closePrintModalBtn) closePrintModalBtn.addEventListener("click", closePrintReportModal);

  const triggerPrintBtn = document.getElementById("btn-trigger-print");
  if (triggerPrintBtn) triggerPrintBtn.addEventListener("click", () => window.triggerReportPrint());

  const printReportModal = document.getElementById("print-report-modal");
  if (printReportModal) {
    printReportModal.addEventListener("click", (e) => {
      if (e.target === printReportModal) closePrintReportModal();
    });
  }

  // 0. 테이블 헤더 클릭 정렬 이벤트
  const thDocNo = document.getElementById("th-doc-no");
  if (thDocNo) thDocNo.onclick = () => handleSortToggle("docNo");
  const thOccurDate = document.getElementById("th-occur-date");
  if (thOccurDate) thOccurDate.onclick = () => handleSortToggle("occurDate");

  // 1. 엑셀 불러오기 버튼 및 파일 선택 이벤트
  const importBtn = document.getElementById("btn-import-excel");
  const fileInput = document.getElementById("excel-file-input");

  if (importBtn && fileInput) {
    importBtn.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", handleExcelFileSelect);
  }

  // 2. 핵심 4대 KPI 카드 클릭 이벤트
  const totalCard = document.getElementById("kpi-card-total") || document.getElementById("kpiTotalIncidentsCard") || document.getElementById("kpi-card-trend");
  if (totalCard) totalCard.addEventListener("click", openTrendAnalysisModal);

  const cardEmployee = document.getElementById("kpiEmployee2026Card") || document.getElementById("kpi-card-employee");
  if (cardEmployee) cardEmployee.addEventListener("click", () => openKpiDrilldown("employee2026"));

  const cardGolf = document.getElementById("kpiGolfCCCard") || document.getElementById("kpi-card-golf");
  if (cardGolf) cardGolf.addEventListener("click", () => openKpiDrilldown("golfCC"));

  const cardCost = document.getElementById("kpi-card-cost") || document.getElementById("kpiCostCard");
  if (cardCost) cardCost.addEventListener("click", openCostAnalysisModal);

  const card2026 = document.getElementById("kpi-card-2026");
  if (card2026) card2026.addEventListener("click", () => openKpiDrilldown("year2026"));

  // KPI 드릴다운 모달 닫기 이벤트 초기화
  const closeKpiDrillBtn = document.getElementById("btn-close-kpi-drilldown");
  const closeKpiDrillFooterBtn = document.getElementById("btn-kpi-drilldown-footer-close");
  const kpiDrillModal = document.getElementById("kpi-drilldown-modal");

  const closeKpiModalFn = () => {
    if (kpiDrillModal) kpiDrillModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  };

  if (closeKpiDrillBtn) closeKpiDrillBtn.addEventListener("click", closeKpiModalFn);
  if (closeKpiDrillFooterBtn) closeKpiDrillFooterBtn.addEventListener("click", closeKpiModalFn);
  if (kpiDrillModal) {
    kpiDrillModal.addEventListener("click", (e) => {
      if (e.target === kpiDrillModal) closeKpiModalFn();
    });
  }

  // 4개 전용 세부 분석 모달 닫기 및 필터 이벤트 초기화
  setupSubAnalysisModals();

  // Search input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.filters.search = e.target.value.trim().toLowerCase();
      state.currentPage = 1;
      applyFilters();
    });
  }

  // Filter dropdowns
  const resortFilter = document.getElementById("filter-resort");
  if (resortFilter) {
    resortFilter.addEventListener("change", (e) => {
      state.filters.resort = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  const categoryFilter = document.getElementById("filter-category");
  if (categoryFilter) {
    categoryFilter.addEventListener("change", (e) => {
      state.filters.category = e.target.value;
      const tableCat = document.getElementById("table-filter-category");
      if (tableCat && tableCat.value !== e.target.value) tableCat.value = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  const statusFilter = document.getElementById("filter-status");
  if (statusFilter) {
    statusFilter.addEventListener("change", (e) => {
      state.filters.status = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  // 신설: 팀/부서 필터 이벤트
  const deptFilter = document.getElementById("filter-dept");
  if (deptFilter) {
    deptFilter.addEventListener("change", (e) => {
      state.filters.dept = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  // 신설: 피해자 세부 분류 필터 이벤트 (상단 메인)
  const victimTypeFilter = document.getElementById("filter-victim-type");
  if (victimTypeFilter) {
    victimTypeFilter.addEventListener("change", (e) => {
      state.filters.victimType = e.target.value;
      const tableVictim = document.getElementById("table-filter-victim-type");
      if (tableVictim && tableVictim.value !== e.target.value) tableVictim.value = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  // 신설: 피해 구분 필터 이벤트 (상단 메인)
  const severityFilter = document.getElementById("filter-severity");
  if (severityFilter) {
    severityFilter.addEventListener("change", (e) => {
      state.filters.severity = e.target.value;
      const tableSev = document.getElementById("table-filter-severity");
      if (tableSev && tableSev.value !== e.target.value) tableSev.value = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  // [신규] 산재조사표 필터 이벤트 바인딩
  const reportStatusFilter = document.getElementById("filter-report-status");
  if (reportStatusFilter) {
    reportStatusFilter.addEventListener("change", (e) => {
      state.filters.reportStatus = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  // [신규] 테이블 상단 간이 빠른 필터 이벤트 & 상단 메인 필터 양방향 동기화
  const tableCatFilter = document.getElementById("table-filter-category");
  if (tableCatFilter) {
    tableCatFilter.addEventListener("change", (e) => {
      state.filters.category = e.target.value;
      const mainCat = document.getElementById("filter-category");
      if (mainCat && mainCat.value !== e.target.value) mainCat.value = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  // 신설: 테이블 간이 피해자 필터 이벤트
  const tableVictimFilter = document.getElementById("table-filter-victim-type");
  if (tableVictimFilter) {
    tableVictimFilter.addEventListener("change", (e) => {
      state.filters.victimType = e.target.value;
      const mainVictim = document.getElementById("filter-victim-type");
      if (mainVictim && mainVictim.value !== e.target.value) mainVictim.value = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  const tableZoneFilter = document.getElementById("table-filter-zone");
  if (tableZoneFilter) {
    tableZoneFilter.addEventListener("change", (e) => {
      state.filters.zone = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  const tableSevFilter = document.getElementById("table-filter-severity");
  if (tableSevFilter) {
    tableSevFilter.addEventListener("change", (e) => {
      state.filters.severity = e.target.value;
      const mainSev = document.getElementById("filter-severity");
      if (mainSev && mainSev.value !== e.target.value) mainSev.value = e.target.value;
      state.currentPage = 1;
      applyFilters();
    });
  }

  const quickResetBtn = document.getElementById("btn-quick-filter-reset");
  if (quickResetBtn) {
    quickResetBtn.addEventListener("click", () => {
      state.filters.category = "all";
      state.filters.victimType = "all";
      state.filters.zone = "all";
      state.filters.severity = "all";
      state.filters.reportStatus = "all";
      const tableReport = document.getElementById("filter-report-status");
      if (tableReport) tableReport.value = "all";

      const tableCat = document.getElementById("table-filter-category");
      if (tableCat) tableCat.value = "all";
      const tableVictim = document.getElementById("table-filter-victim-type");
      if (tableVictim) tableVictim.value = "all";
      const tableZone = document.getElementById("table-filter-zone");
      if (tableZone) tableZone.value = "all";
      const tableSev = document.getElementById("table-filter-severity");
      if (tableSev) tableSev.value = "all";

      const mainCat = document.getElementById("filter-category");
      if (mainCat) mainCat.value = "all";
      const mainVictim = document.getElementById("filter-victim-type");
      if (mainVictim) mainVictim.value = "all";
      const mainSev = document.getElementById("filter-severity");
      if (mainSev) mainSev.value = "all";

      state.currentPage = 1;
      applyFilters();
      showToast("테이블 간이 필터가 초기화되었습니다.", "info");
    });
  }

  const clearAllChipsBtn = document.getElementById("btn-clear-all-chips");
  if (clearAllChipsBtn) {
    clearAllChipsBtn.addEventListener("click", () => {
      resetAllFilters();
      showToast("모든 필터 조건이 해제되었습니다.", "info");
    });
  }

  // 신설: 필터 전체 초기화 버튼
  const resetFiltersBtn = document.getElementById("btn-reset-filters");
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetAllFilters);
  }

  // 신설: 좌측 상단 브랜드 로고 클릭 시 메인 홈 리셋
  const brandHomeBtn = document.getElementById("brand-home-btn");
  if (brandHomeBtn) {
    brandHomeBtn.addEventListener("click", resetAllFilters);
  }

  // 페이지당 표시 건수(Rows Per Page) 셀렉트 박스
  const pageSizeSelect = document.getElementById("pageSizeSelect");
  if (pageSizeSelect) {
    pageSizeSelect.value = String(state.pageSize || pageSize || 10);
    pageSizeSelect.addEventListener("change", (e) => {
      window.handlePageSizeChange(e.target.value);
    });
  }

  // Period tag buttons
  const periodButtons = document.querySelectorAll(".period-btn");
  periodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      periodButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.filters.period = btn.dataset.period;
      state.currentPage = 1;
      applyFilters();
    });
  });

  // Export CSV Button
  const exportBtn = document.getElementById("btn-export-csv");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportToCSV);
  }

  // Reset Data Button (마지막 등록 마스터 엑셀 기준 복원)
  const resetBtn = document.getElementById("btn-reset-data") || document.getElementById("btn-reset-sample");
  if (resetBtn) {
    resetBtn.addEventListener("click", handleResetSample);
  }

  // Register Modal Triggers
  const openRegisterBtn = document.getElementById("btn-open-register");
  const registerModal = document.getElementById("register-modal");
  const closeRegisterBtn = document.getElementById("btn-close-register");
  const cancelRegisterBtn = document.getElementById("btn-cancel-register");
  const registerForm = document.getElementById("incident-register-form");

  if (openRegisterBtn && registerModal) {
    openRegisterBtn.addEventListener("click", () => {
      const now = new Date();
      const localDatetime = now.toISOString().slice(0, 16);
      const dateInput = document.getElementById("reg-date");
      if (dateInput) dateInput.value = localDatetime;

      // 신설: 등록 첨부파일 및 산재 행정 필드 초기화
      state.regAttachments = [];
      renderAttachmentList("reg");
      const regRepStatus = document.getElementById("reg-report-status");
      if (regRepStatus) regRepStatus.value = "해당없음";
      const regNotes = document.getElementById("reg-special-notes");
      if (regNotes) regNotes.value = "";

      registerModal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  }

  const closeRegister = () => {
    if (registerModal) registerModal.classList.remove("active");
    if (registerForm) registerForm.reset();
    state.regAttachments = [];
    renderAttachmentList("reg");
    document.body.classList.remove("modal-open");
  };

  if (closeRegisterBtn) closeRegisterBtn.addEventListener("click", closeRegister);
  if (cancelRegisterBtn) cancelRegisterBtn.addEventListener("click", closeRegister);

  // Detail Modal Elements
  const detailModal = document.getElementById("detail-modal");
  const closeDetailBtn = document.getElementById("btn-close-detail");
  const closeDetailFooterBtn = document.getElementById("btn-detail-footer-close");
  const deleteDetailBtn = document.getElementById("btn-delete-incident-detail");

  // Edit Mode Buttons
  const startEditBtn = document.getElementById("btn-start-edit-detail");
  const cancelEditBtn = document.getElementById("btn-cancel-edit-detail");
  const saveEditBtn = document.getElementById("btn-save-edit-detail");

  const closeDetail = () => {
    if (detailModal) detailModal.classList.remove("active");
    state.currentDetailId = null;
    detailModalOrigin = null;
    switchDetailMode(false);
    document.body.classList.remove("modal-open");
  };

  if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeDetail);
  if (closeDetailFooterBtn) closeDetailFooterBtn.addEventListener("click", closeDetail);

  // 사고 상세 모달 [← 목록으로] 뒤로가기 버튼 연동
  const backToListHeaderBtn = document.getElementById("btn-back-to-list-header");
  const backToListFooterBtn = document.getElementById("btn-back-to-list-footer");
  if (backToListHeaderBtn) backToListHeaderBtn.addEventListener("click", () => handleDetailBackToList());
  if (backToListFooterBtn) backToListFooterBtn.addEventListener("click", () => handleDetailBackToList());

  // 다년도 대조표 드릴다운 모달 닫기 버튼 연동
  const yoyDrillModal = document.getElementById("yoyDrilldownModal");
  const closeYoyDrillBtn = document.getElementById("btn-close-yoy-drilldown");
  const closeYoyDrillFooterBtn = document.getElementById("btn-drilldown-footer-close");
  const closeYoyDrill = () => {
    if (yoyDrillModal) yoyDrillModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  };
  if (closeYoyDrillBtn) closeYoyDrillBtn.addEventListener("click", closeYoyDrill);
  if (closeYoyDrillFooterBtn) closeYoyDrillFooterBtn.addEventListener("click", closeYoyDrill);

  if (deleteDetailBtn) {
    deleteDetailBtn.addEventListener("click", () => {
      if (state.currentDetailId) {
        deleteIncident(state.currentDetailId);
      }
    });
  }

  if (startEditBtn) {
    startEditBtn.addEventListener("click", () => {
      populateEditForm(state.currentDetailId);
      switchDetailMode(true);
    });
  }

  if (cancelEditBtn) {
    cancelEditBtn.addEventListener("click", () => {
      switchDetailMode(false);
    });
  }

  if (saveEditBtn) {
    saveEditBtn.addEventListener("click", handleSaveEdit);
  }

  window.addEventListener("click", (e) => {
    if (e.target === registerModal) closeRegister();
    if (e.target === detailModal) closeDetail();
    if (e.target === yoyDrillModal) closeYoyDrill();
  });

  if (registerForm) {
    registerForm.addEventListener("submit", handleRegisterSubmit);
  }
}

// ==========================================================================
// 2. 당사 지급 보험/보상 비용 전용 분석 모달 로직
// ==========================================================================
function setupCostModalEvents() {
  const costModal = document.getElementById("cost-analysis-modal");
  const closeBtn = document.getElementById("btn-close-cost-modal");
  const footerCloseBtn = document.getElementById("btn-cost-footer-close");
  const applyBtn = document.getElementById("btn-cost-filter-apply");
  const resetBtn = document.getElementById("btn-cost-filter-reset");
  const expenseYearSelect = document.getElementById("expenseYearSelect");

  const closeCostModal = () => {
    if (costModal) costModal.classList.remove("active");
    document.body.classList.remove("modal-open");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeCostModal);
  if (footerCloseBtn) footerCloseBtn.addEventListener("click", closeCostModal);

  window.addEventListener("click", (e) => {
    if (e.target === costModal) closeCostModal();
  });

  // 연도별 빠른 조회 드롭다운 콤보박스 변경 이벤트 (change)
  if (expenseYearSelect) {
    expenseYearSelect.addEventListener("change", (e) => {
      const selectedYear = e.target.value;
      state.costModal.year = selectedYear;
      state.costModal.from = "";
      state.costModal.to = "";

      // 직접 날짜 필터 입력창 초기화
      const fromInput = document.getElementById("cost-date-from");
      const toInput = document.getElementById("cost-date-to");
      if (fromInput) fromInput.value = "";
      if (toInput) toInput.value = "";

      renderCostAnalysisData();
    });
  }

  // 직접 날짜 필터 조회 버튼
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const fromVal = document.getElementById("cost-date-from").value;
      const toVal = document.getElementById("cost-date-to").value;

      state.costModal.year = "custom";
      state.costModal.from = fromVal;
      state.costModal.to = toVal;

      if (expenseYearSelect) expenseYearSelect.value = "all";
      renderCostAnalysisData();
    });
  }

  // 직접 날짜 필터 초기화 버튼
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      document.getElementById("cost-date-from").value = "";
      document.getElementById("cost-date-to").value = "";
      state.costModal.year = "all";
      state.costModal.from = "";
      state.costModal.to = "";

      if (expenseYearSelect) expenseYearSelect.value = "all";
      renderCostYearSelect();
      renderCostAnalysisData();
    });
  }
}

// Open Cost Analysis Modal
function openCostAnalysisModal() {
  const costModal = document.getElementById("cost-analysis-modal");
  if (!costModal) return;

  // Initialize filter state
  state.costModal.year = "all";
  state.costModal.from = "";
  state.costModal.to = "";

  const fromInput = document.getElementById("cost-date-from");
  const toInput = document.getElementById("cost-date-to");
  if (fromInput) fromInput.value = "";
  if (toInput) toInput.value = "";

  renderCostYearSelect();
  renderCostAnalysisData();

  costModal.classList.add("active");
  document.body.classList.add("modal-open");
}

// Render Dynamic Year Options in Combobox (Select)
function renderCostYearSelect() {
  const selectEl = document.getElementById("expenseYearSelect");
  if (!selectEl) return;

  const baseIncidents = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);

  // 1. 최소 최근 4개년(2023년 ~ 2026년) 기본 연도 fallback 보장
  const defaultYears = ["2026", "2025", "2024", "2023"];
  const yearsSet = new Set(defaultYears);

  // 2. 현재 조회 데이터의 '발생일시(occurDate/date)' 또는 '기안일(reportDate)'에서 4자리 연도(YYYY) 모두 수집
  baseIncidents.forEach(item => {
    const occurY = extractYear(item.occurDate || item.date);
    if (occurY) yearsSet.add(occurY);

    const reportY = extractYear(item.reportDate);
    if (reportY) yearsSet.add(reportY);
  });

  // 3. 중복 제거 및 내림차순(최신순: 2026, 2025, 2024, 2023...) 정렬
  const sortedYears = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a));

  // 4. 드롭다운 콤보박스 옵션 생성
  let html = `<option value="all">전체 기간</option>`;
  sortedYears.forEach(year => {
    html += `<option value="${year}">${year}년</option>`;
  });

  selectEl.innerHTML = html;
  selectEl.value = state.costModal.year || "all";
}

// Render Cost Analysis Summary & Detailed Records Table
function renderCostAnalysisData() {
  const { year, from, to } = state.costModal;

  const baseIncidents = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);

  const totalAll = (state.incidents || []).length;
  const isFiltered = Boolean(
    (state.filteredIncidents && state.filteredIncidents.length !== totalAll) ||
    (state.filters && (
      (state.filters.period && state.filters.period !== "all") ||
      (state.filters.resort && state.filters.resort !== "all") ||
      (state.filters.dept && state.filters.dept !== "all") ||
      (state.filters.category && state.filters.category !== "all") ||
      (state.filters.victimType && state.filters.victimType !== "all") ||
      (state.filters.severity && state.filters.severity !== "all") ||
      (state.filters.status && state.filters.status !== "all") ||
      (state.filters.zone && state.filters.zone !== "all") ||
      (state.filters.reportStatus && state.filters.reportStatus !== "all") ||
      state.filters.startDate || state.filters.endDate || state.filters.from || state.filters.to || state.filters.search || state.filters.searchQuery
    ))
  );

  // Filter incidents in period
  const filteredInPeriod = baseIncidents.filter(item => {
    const p = parseIncidentDate(item);
    if (!p) return false;

    // Filter by year: 해당 연도(YYYY.01.01 ~ YYYY.12.31)에 속한 건 필터링
    if (year !== "all" && year !== "custom") {
      if (String(p.getFullYear()) !== String(year)) return false;
    }

    // Filter by custom date range
    if (from || to) {
      const t = p.getTime();
      if (from) {
        const pFrom = parseIncidentDate(from);
        const fromTime = pFrom
          ? new Date(pFrom.getFullYear(), pFrom.getMonth(), pFrom.getDate(), 0, 0, 0, 0).getTime()
          : new Date(`${from}T00:00:00`).getTime();
        if (!isNaN(fromTime) && t < fromTime) return false;
      }
      if (to) {
        const pTo = parseIncidentDate(to);
        const toTime = pTo
          ? new Date(pTo.getFullYear(), pTo.getMonth(), pTo.getDate(), 23, 59, 59, 999).getTime()
          : new Date(`${to}T23:59:59.999`).getTime();
        if (!isNaN(toTime) && t > toTime) return false;
      }
    }

    return true;
  });

  // [신규 요구사항 1 & 2] 실제 지급 금액(getIncidentCost)이 0원 초과 발생한 건만 필터링
  const costItems = filteredInPeriod.filter(item => getIncidentCost(item) > 0);

  // Calculate totals
  const totalAmount = costItems.reduce((acc, curr) => acc + getIncidentCost(curr), 0);
  const count = costItems.length;
  const avgCost = count > 0 ? Math.round(totalAmount / count) : 0;

  // Render Highlight Banner
  let periodText = "전체 기간 당사 지급 총액";
  if (isFiltered && year === "all" && !from && !to) {
    periodText = "선택 기간 당사 지급 총액";
  } else if (year !== "all" && year !== "custom") {
    periodText = `${year}년 당사 지급 총액`;
  } else if (from || to) {
    periodText = `${from || '초기'} ~ ${to || '현재'} 기간 당사 지급 총액`;
  }

  const costModalTitle = document.getElementById("cost-modal-title");
  if (costModalTitle) {
    costModalTitle.innerHTML = isFiltered 
      ? `<span>💳</span> 당사 지급 보상·보험 비용 조회 <span style="font-size: 0.82rem; font-weight: 600; color: #1d4ed8; background: #eff6ff; padding: 2px 8px; border-radius: 9999px; border: 1px solid #bfdbfe; margin-left: 6px;">선택 범위 (${costItems.length.toLocaleString()}건)</span>`
      : `<span>💳</span> 당사 지급 보상·보험 비용 조회 <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 9999px; margin-left: 6px;">전체 누적 (${costItems.length.toLocaleString()}건)</span>`;
  }

  const periodLabelEl = document.getElementById("cost-summary-period");
  const totalAmountEl = document.getElementById("cost-summary-total-amount");
  const countEl = document.getElementById("cost-summary-count");
  const avgEl = document.getElementById("cost-summary-avg");
  const badgeCountEl = document.getElementById("cost-table-count-badge");

  if (periodLabelEl) periodLabelEl.innerText = periodText;
  if (totalAmountEl) totalAmountEl.innerText = totalAmount > 0 ? formatCurrency(totalAmount) : "0원";
  if (countEl) countEl.innerText = `총 ${count.toLocaleString()}건`;
  if (avgEl) avgEl.innerText = count > 0 ? formatCurrency(avgCost) : "0원";
  if (badgeCountEl) badgeCountEl.innerText = `${count.toLocaleString()}건`;

  // Render Table: [요구사항 2] 0원 완전 제외, 실제 지급액이 있는 데이터만 리스트업
  const tableBody = document.getElementById("cost-table-body");
  if (!tableBody) return;

  const displayItems = costItems;

  if (displayItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
          <div style="font-size: 1.8rem; margin-bottom: 0.35rem;">💳</div>
          <div>선택한 기간에 실제 지급된 보상/보험 비용 발생 내역이 없습니다. (지급 건수 0건)</div>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displayItems.map(item => {
    const paid = getIncidentCost(item);
    const paidText = `${paid.toLocaleString()}원`;
    
    // 1) 문서번호 (w-[180px], 폰트 모노스페이스 또는 굵게, 클릭 시 상세조회 안내 링크 느낌)
    const docNo = String(item.docNo || item.documentNumber || item.id || '-').trim();
    
    // 2) 발생일시 (w-[150px], text-slate-500)
    const dateStr = String(item.date || item.occurredAt || '-').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
    
    // 3) 구분/사업장 (w-[120px], 예: 성문안팀, 밸리팀 - font-semibold)
    const teamName = String(item.team || item['구분1'] || item.resort || item.businessUnit || '기타').trim();
    
    // 4) 세부장소 (w-[140px], 엑셀 D열 기준, 예: 18H 벙커, 파인4H - 괄호 없이 깔끔하게)
    const rawPlace = String(item.locationDetail || item.place || item['위치(세부)'] || item.location || '-');
    const cleanPlace = rawPlace.replace(/[()]/g, '').trim() || '-';
    
    // 5) 사고유형 (w-[120px], 깔끔한 둥근 뱃지 렌더링)
    const category = getIncidentCategory(item) || '기타';

    return `
      <tr class="hover:bg-blue-50/50 cursor-pointer border-b border-slate-100 transition-colors" onclick="navigateToDetailFromCost('${escapeHtml(String(item.id))}')" style="cursor: pointer;">
        <td class="w-[180px] py-3 px-4 font-mono font-semibold text-blue-600 hover:text-blue-800" style="width: 180px; padding: 0.75rem 1rem; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-weight: 600; color: #2563eb;">
          <span class="hover:underline">${escapeHtml(docNo)}</span>
        </td>
        <td class="w-[150px] py-3 px-4 text-slate-500 text-xs sm:text-sm" style="width: 150px; padding: 0.75rem 1rem; color: #64748b; font-size: 0.82rem;">
          ${escapeHtml(dateStr)}
        </td>
        <td class="w-[120px] py-3 px-4 font-semibold text-slate-800" style="width: 120px; padding: 0.75rem 1rem; font-weight: 600; color: #1e293b;">
          ${escapeHtml(teamName)}
        </td>
        <td class="w-[140px] py-3 px-4 text-slate-600" style="width: 140px; padding: 0.75rem 1rem; color: #475569;">
          ${escapeHtml(cleanPlace)}
        </td>
        <td class="w-[120px] py-3 px-4" style="width: 120px; padding: 0.75rem 1rem;">
          <span class="badge badge-category inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium" style="background-color: #f1f5f9; color: #334155; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.75rem; border: 1px solid #e2e8f0; font-weight: 500;">
            ${escapeHtml(category)}
          </span>
        </td>
        <td class="w-[150px] py-3 px-4 text-right font-bold text-blue-600" style="width: 150px; padding: 0.75rem 1rem; text-align: right; font-weight: 700; color: #2563eb;">
          ${paidText}
        </td>
      </tr>
    `;
  }).join("")
}

// Navigate from Cost Modal to Incident Detail Modal
window.navigateToDetailFromCost = function(id) {
  detailModalOrigin = { fromModalId: "cost-analysis-modal" };
  const costModal = document.getElementById("cost-analysis-modal");
  if (costModal) costModal.classList.remove("active");

  setTimeout(() => {
    openIncidentDetail(id);
  }, 50);
};

// Universal Navigation from any Sub-Modal to Incident Detail Modal
window.navigateToDetailFromSubModal = function(id) {
  const activeModal = document.querySelector(".modal-overlay.active");
  const modalId = activeModal ? activeModal.id : null;
  detailModalOrigin = modalId ? { fromModalId: modalId } : null;

  const openModals = document.querySelectorAll(".modal-overlay.active");
  openModals.forEach(m => m.classList.remove("active"));

  setTimeout(() => {
    openIncidentDetail(id);
  }, 50);
};

// Navigate from YoY Drilldown Modal to Incident Detail Modal
window.navigateToDetailFromDrilldown = function(id) {
  const tableWrap = document.getElementById("yoy-drilldown-table-wrap");
  const scrollTop = tableWrap ? tableWrap.scrollTop : 0;
  detailModalOrigin = {
    fromModalId: "yoyDrilldownModal",
    resort: state.yoyDrilldown?.resort,
    category: state.yoyDrilldown?.category,
    tab: state.yoyDrilldown?.activeTab || "a",
    scrollTop: scrollTop
  };

  const drillModal = document.getElementById("yoyDrilldownModal");
  if (drillModal) drillModal.classList.remove("active");

  setTimeout(() => {
    openIncidentDetail(id);
  }, 50);
};

// Universal Back to List Handler for Incident Detail Modal
window.handleDetailBackToList = function() {
  const detailModal = document.getElementById("detail-modal");
  if (detailModal) detailModal.classList.remove("active");
  state.currentDetailId = null;
  switchDetailMode(false);
  document.body.classList.remove("modal-open");

  if (!detailModalOrigin || !detailModalOrigin.fromModalId) {
    // 메인 대시보드에서 직접 진입한 경우: 자연스럽게 닫기 처리
    detailModalOrigin = null;
    return;
  }

  const { fromModalId, resort, category, tab, scrollTop } = detailModalOrigin;
  detailModalOrigin = null;

  setTimeout(() => {
    if (fromModalId === "yoyDrilldownModal") {
      if (typeof window.openYoyDrilldown === "function") {
        window.openYoyDrilldown(resort, category, tab, scrollTop);
      }
    } else {
      const prevModal = document.getElementById(fromModalId);
      if (prevModal) {
        prevModal.classList.add("active");
        document.body.classList.add("modal-open");
        if (fromModalId === "kpi-drilldown-modal" && scrollTop > 0) {
          setTimeout(() => {
            const wrap = document.getElementById("kpi-drilldown-table-wrap");
            if (wrap) wrap.scrollTop = scrollTop;
          }, 30);
        }
      }
    }
  }, 50);
};

// ==========================================================================
// 2-1. [KPI 1] 📊 사고 발생 추이 및 통계 브리핑 모달
// ==========================================================================
function openTrendAnalysisModal() {
  const modal = document.getElementById("trend-analysis-modal");
  if (!modal) return;

  state.trendSelectedItem = null; // 초기에는 아무것도 선택되지 않은 전체 표출 상태
  renderTrendAnalysis();
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function renderTrendAnalysis() {
  const allIncidents = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);

  const totalAll = (state.incidents || []).length;
  const isFiltered = Boolean(state.filteredIncidents && state.filteredIncidents.length !== totalAll);

  const trendModalTitle = document.getElementById("trend-modal-title");
  if (trendModalTitle) {
    trendModalTitle.innerHTML = isFiltered 
      ? `<span>📊</span> 사고 발생 추이 및 통계 브리핑 <span style="font-size: 0.82rem; font-weight: 600; color: #1d4ed8; background: #eff6ff; padding: 2px 8px; border-radius: 9999px; border: 1px solid #bfdbfe; margin-left: 6px;">선택 범위 (${allIncidents.length.toLocaleString()}건)</span>`
      : `<span>📊</span> 사고 발생 추이 및 통계 브리핑 <span style="font-size: 0.82rem; font-weight: 600; color: #64748b; background: #f1f5f9; padding: 2px 8px; border-radius: 9999px; margin-left: 6px;">전체 누적 (${allIncidents.length.toLocaleString()}건)</span>`;
  }

  // 1. 연도별 연간 발생 건수 비교 미니 차트
  const years = [];
  const yearCounts = {};

  allIncidents.forEach(item => {
    const y = getIncidentYear(item);
    if (y) {
      if (yearCounts[y] !== undefined) {
        yearCounts[y]++;
      } else {
        yearCounts[y] = 1;
        if (!years.includes(y)) years.push(y);
      }
    }
  });

  if (years.length === 0) {
    ["2023", "2024", "2025", "2026"].forEach(y => {
      years.push(y);
      yearCounts[y] = 0;
    });
  }
  years.sort();

  const trendCtx = document.getElementById("trendYearChart")?.getContext("2d");
  if (trendCtx) {
    if (state.charts.trendYearChart) state.charts.trendYearChart.destroy();

    state.charts.trendYearChart = new Chart(trendCtx, {
      type: "bar",
      data: {
        labels: years.map(y => `${y}년`),
        datasets: [{
          label: "연간 발생 건수",
          data: years.map(y => yearCounts[y] || 0),
          backgroundColor: ["#818cf8", "#38bdf8", "#34d399", "#fbbf24"],
          borderRadius: 6,
          maxBarThickness: 45
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` 발생 건수: ${ctx.raw}건`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: "#334155", font: { weight: 600, size: 12 } } },
          y: { beginAtZero: true, grid: { color: "#cbd5e1" }, ticks: { color: "#334155", font: { weight: 600 }, stepSize: 1 } }
        }
      }
    });
  }

  // 2. 사업장 선택 콤보박스 채우기
  const resortSelect = document.getElementById("trendResortSelect");
  if (resortSelect) {
    const uniqueResorts = [...new Set(allIncidents.map(i => i.resort || i.businessUnit).filter(Boolean))].sort();
    const currentVal = resortSelect.value || "all";
    resortSelect.innerHTML = `<option value="all">전체 사업장 (월별 합산)</option>` +
      uniqueResorts.map(r => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join("");
    resortSelect.value = uniqueResorts.includes(currentVal) ? currentVal : "all";
  }

  renderTrendMonthlyChart(resortSelect ? resortSelect.value : "all");

  // 3 & 4. TOP 3 인터랙티브 랭킹 렌더링
  renderTrendTopRankings();
  renderTrendDetailPanel();
}

// ==========================================================================
// 2-1-B. [KPI 1] 사고 발생 추이 및 통계 브리핑: TOP 3 인터랙티브 선택 & 세부 패널
// ==========================================================================
function renderTrendTopRankings() {
  const allIncidents = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);
  const totalCount = allIncidents.length || 1;

  // 1) 사업장/소속팀 TOP 3 집계
  const teamCounts = {};
  allIncidents.forEach(item => {
    const team = (typeof getIncidentDept === "function" ? getIncidentDept(item) : "") || item.dept || item.department || item.resort || "기타";
    teamCounts[team] = (teamCounts[team] || 0) + 1;
  });
  const topTeams = Object.entries(teamCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => ({
      name,
      count,
      percentage: ((count / totalCount) * 100).toFixed(1) + "%"
    }));

  const topResortsEl = document.getElementById("trend-top-resorts");
  if (topResortsEl) {
    topResortsEl.innerHTML = topTeams.map((team, idx) => {
      const isSelected = state.trendSelectedItem && 
                         state.trendSelectedItem.category === 'team' && 
                         state.trendSelectedItem.name === team.name;
      return `
        <div
          onclick="handleTrendItemSelect('team', '${escapeHtml(team.name)}', ${team.count}, '${team.percentage}')"
          class="trend-top-item ${isSelected ? 'is-selected is-team' : ''}"
          title="클릭하여 '${escapeHtml(team.name)}' 세부 구성 비율 및 사고 목록 조회"
        >
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="trend-top-rank">${idx + 1}</span>
            <span style="font-weight: 600; font-size: 0.875rem; color: #334155;">${escapeHtml(team.name)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-weight: 700; font-size: 0.875rem; color: #1d4ed8;">${team.count}건</span>
            <span style="font-size: 0.75rem; color: #94a3b8;">(${team.percentage})</span>
            <span class="trend-top-chevron">›</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // 2) 사고유형 TOP 3 집계
  const typeCounts = {};
  allIncidents.forEach(item => {
    const type = (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "기타";
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  });
  const topTypes = Object.entries(typeCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name, count]) => ({
      name,
      count,
      percentage: ((count / totalCount) * 100).toFixed(1) + "%"
    }));

  const topCatEl = document.getElementById("trend-top-categories");
  if (topCatEl) {
    topCatEl.innerHTML = topTypes.map((type, idx) => {
      const isSelected = state.trendSelectedItem && 
                         state.trendSelectedItem.category === 'type' && 
                         state.trendSelectedItem.name === type.name;
      return `
        <div
          onclick="handleTrendItemSelect('type', '${escapeHtml(type.name)}', ${type.count}, '${type.percentage}')"
          class="trend-top-item ${isSelected ? 'is-selected is-type' : ''}"
          title="클릭하여 '${escapeHtml(type.name)}' 세부 구성 비율 및 사고 목록 조회"
        >
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="trend-top-rank">${idx + 1}</span>
            <span style="font-weight: 600; font-size: 0.875rem; color: #334155;">${escapeHtml(type.name)}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-weight: 700; font-size: 0.875rem; color: #4338ca;">${type.count}건</span>
            <span style="font-size: 0.75rem; color: #94a3b8;">(${type.percentage})</span>
            <span class="trend-top-chevron">›</span>
          </div>
        </div>
      `;
    }).join("");
  }
}
window.renderTrendTopRankings = renderTrendTopRankings;

function handleTrendItemSelect(category, name, count, percentage) {
  if (state.trendSelectedItem && state.trendSelectedItem.category === category && state.trendSelectedItem.name === name) {
    // 같은 카드를 다시 클릭하면 선택 해제 -> 전체 사고 분석 복원
    state.trendSelectedItem = null;
  } else if (!category && !name) {
    // 닫기 버튼을 클릭했을 때 -> 전체 사고 분석 복원
    state.trendSelectedItem = null;
  } else {
    state.trendSelectedItem = {
      category: category,
      name: name,
      totalCount: count,
      percentage: percentage
    };
  }
  renderTrendTopRankings();
  renderTrendDetailPanel();
}
window.handleTrendItemSelect = handleTrendItemSelect;

function renderTrendDetailPanel() {
  const panel = document.getElementById("trend-detail-panel");
  if (!panel) return;

  const allIncidents = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);

  const sel = state.trendSelectedItem;
  let filtered = [];
  const breakdownMap = {};

  if (!sel) {
    // [요구사항 1] 아무것도 선택하지 않았을 때: 현재 필터 범위 전체 건에 대한 기본 분석
    filtered = [...allIncidents];
    filtered.forEach(item => {
      const t = (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "기타";
      breakdownMap[t] = (breakdownMap[t] || 0) + 1;
    });
  } else if (sel.category === "team") {
    filtered = allIncidents.filter(item => {
      const d = (typeof getIncidentDept === "function" ? getIncidentDept(item) : "") || item.dept || item.department || item.resort || "";
      return d === sel.name;
    });
    filtered.forEach(item => {
      const t = (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "기타";
      breakdownMap[t] = (breakdownMap[t] || 0) + 1;
    });
  } else {
    filtered = allIncidents.filter(item => {
      const t = (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "";
      return t === sel.name;
    });
    filtered.forEach(item => {
      const d = (typeof getIncidentDept === "function" ? getIncidentDept(item) : "") || item.dept || item.department || item.resort || "기타";
      breakdownMap[d] = (breakdownMap[d] || 0) + 1;
    });
  }

  // 최신순 (날짜 내림차순) 정렬
  filtered.sort((a, b) => {
    const da = parseIncidentDate(a)?.getTime() || 0;
    const db = parseIncidentDate(b)?.getTime() || 0;
    return db - da;
  });

  const subBreakdown = Object.entries(breakdownMap)
    .map(([name, cnt]) => ({
      name,
      count: cnt,
      percent: ((cnt / (filtered.length || 1)) * 100).toFixed(1)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 4);

  panel.style.display = "block";
  panel.className = "animate-fadeIn";

  const titleText = sel ? `[${escapeHtml(sel.name)}] 상세 구성 비율 분석` : `[전체 사고 분석] 주요 발생 사고유형 비중 및 내역`;
  const badgeText = sel ? `총 ${sel.totalCount}건 (${sel.percentage})` : `총 ${allIncidents.length}건 (100.0%)`;
  const subCategoryTitle = sel 
    ? (sel.category === 'team' ? '주요 발생 사고유형 비중' : '주요 발생 사업장/팀 비중')
    : '주요 발생 사고유형 비중 (전체)';

  const closeButtonHtml = sel
    ? `<button type="button" onclick="handleTrendItemSelect()" style="font-size: 0.78rem; color: #475569; background: #f1f5f9; border: 1px solid #cbd5e1; cursor: pointer; padding: 0.25rem 0.65rem; border-radius: 0.375rem; font-weight: 600; display: flex; align-items: center; gap: 0.3rem;" onmouseover="this.style.color='#0f172a'; this.style.backgroundColor='#e2e8f0'" onmouseout="this.style.color='#475569'; this.style.backgroundColor='#f1f5f9'" title="선택 해제하고 전체 사고 분석으로 복원">✕ 닫기 (전체 분석 복원)</button>`
    : `<span style="font-size: 0.75rem; color: #64748b; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.375rem; padding: 0.2rem 0.55rem; font-weight: 500;">전체 표출 모드</span>`;

  panel.innerHTML = `
    <div style="border: 1px solid #cbd5e1; border-radius: 0.75rem; padding: 1.25rem; background: #ffffff; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);">
      
      <!-- 세부 구성 비율 헤더 -->
      <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 1px solid #f1f5f9; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="color: #2563eb; font-weight: 700; font-size: 1.15rem; line-height: 1;">↳</span>
          <span style="font-weight: 700; color: #1e293b; font-size: 0.95rem;">
            ${titleText}
          </span>
          <span style="font-size: 0.75rem; background-color: #f1f5f9; color: #475569; padding: 0.15rem 0.55rem; border-radius: 9999px; font-weight: 600;">
            ${badgeText}
          </span>
        </div>
        ${closeButtonHtml}
      </div>

      <!-- 하위 구성비 배지 (어떤 내용으로 구성되어 있는지 요약) -->
      <div style="background-color: #f8fafc; border-radius: 0.5rem; padding: 0.85rem; border: 1px solid #f1f5f9; margin-top: 0.75rem;">
        <span style="font-size: 0.76rem; font-weight: 600; color: #64748b; margin-bottom: 0.5rem; display: block;">
          ${subCategoryTitle}
        </span>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.5rem;">
          ${subBreakdown.map(sub => `
            <div style="background: #ffffff; padding: 0.625rem; border-radius: 0.375rem; border: 1px solid #e2e8f0; display: flex; flex-direction: column; justify-content: space-between;">
              <span style="font-size: 0.75rem; color: #475569; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 500;" title="${escapeHtml(sub.name)}">${escapeHtml(sub.name)}</span>
              <div style="display: flex; align-items: baseline; justify-content: space-between; margin-top: 0.35rem;">
                <span style="font-size: 0.875rem; font-weight: 700; color: #1e293b;">${sub.count}건</span>
                <span style="font-size: 0.75rem; color: #2563eb; font-weight: 600;">${sub.percent}%</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 실제 사고 건별 리스트 테이블 -->
      <div style="margin-top: 1rem;">
        <span style="font-size: 0.76rem; font-weight: 600; color: #64748b; display: flex; align-items: center; gap: 0.3rem; margin-bottom: 0.5rem;">
          <span>📄</span> ${sel ? '세부 사고 등록 내역' : '전체 사고 등록 내역'} (최신순 ${filtered.length}건)
        </span>
        <div style="max-height: 280px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 0.5rem; font-size: 0.75rem;">
          <table style="width: 100%; text-align: left; border-collapse: collapse;">
            <thead style="background-color: #f8fafc; position: sticky; top: 0; color: #475569; border-bottom: 1px solid #e2e8f0; z-index: 2;">
              <tr>
                <th style="padding: 0.5rem 0.75rem; font-weight: 600; width: 145px; white-space: nowrap;">문서번호</th>
                <th style="padding: 0.5rem 0.75rem; font-weight: 600; width: 125px; white-space: nowrap;">발생일시</th>
                <th style="padding: 0.5rem 0.75rem; font-weight: 600; width: 110px;">${!sel ? '사고유형' : (sel.category === 'team' ? '사고유형' : '소속팀')}</th>
                <th style="padding: 0.5rem 0.75rem; font-weight: 600; width: 130px;">발생장소</th>
                <th style="padding: 0.5rem 0.75rem; font-weight: 600;">사고 경위 요약</th>
                <th style="padding: 0.5rem 0.75rem; font-weight: 600; width: 95px; text-align: center; white-space: nowrap;">처리상태</th>
              </tr>
            </thead>
            <tbody>
              ${filtered.length === 0 ? `
                <tr>
                  <td colspan="6" style="padding: 1.5rem; text-align: center; color: #94a3b8;">
                    해당 조건의 등록된 사고 내역이 없습니다.
                  </td>
                </tr>
              ` : filtered.map(row => {
                const isResolved = row.status === '처리완료' || row.status === '보상완료' || row.status === '조치완료';
                const badgeStyle = isResolved
                  ? 'background-color: #ecfdf5; color: #047857; border: 1px solid #a7f3d0;'
                  : 'background-color: #fffbeb; color: #b45309; border: 1px solid #fde68a;';
                const statusIcon = isResolved ? '✓' : '⏱️';
                const docNo = row.docNo || row.documentNumber || row.id || '-';
                const place = row.locationDetail || row.place || row.location || row.zone || '-';
                const desc = row.title || row.description || row.summary || '사고 개요 없음';
                const subCategory = !sel
                  ? ((typeof getIncidentCategory === "function" ? getIncidentCategory(row) : "") || row.category || row.type || '기타')
                  : (sel.category === 'team' 
                    ? ((typeof getIncidentCategory === "function" ? getIncidentCategory(row) : "") || row.category || row.type || '기타') 
                    : ((typeof getIncidentDept === "function" ? getIncidentDept(row) : "") || row.dept || row.department || row.resort || '기타'));

                return `
                  <tr onclick="navigateToDetailFromTrendModal('${escapeHtml(row.id)}')" style="cursor: pointer; border-bottom: 1px solid #f1f5f9; transition: background-color 0.15s ease;" onmouseover="this.style.backgroundColor='#f8fafc'" onmouseout="this.style.backgroundColor='transparent'" title="클릭하여 사고 상세 정보 조회 및 수정">
                    <td style="padding: 0.5rem 0.75rem; font-family: monospace; font-size: 11px; font-weight: 700; color: #2563eb; white-space: nowrap;">${escapeHtml(docNo)}</td>
                    <td style="padding: 0.5rem 0.75rem; color: #64748b; white-space: nowrap;">${escapeHtml(row.date || row.occurredAt || '-')}</td>
                    <td style="padding: 0.5rem 0.75rem; font-weight: 600; color: #334155;">${escapeHtml(subCategory)}</td>
                    <td style="padding: 0.5rem 0.75rem; color: #475569;">${escapeHtml(place)}</td>
                    <td style="padding: 0.5rem 0.75rem; color: #1e293b; font-weight: 500; max-width: 280px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${escapeHtml(desc)}">
                      ${escapeHtml(desc)}
                    </td>
                    <td style="padding: 0.5rem 0.75rem; text-align: center; white-space: nowrap;">
                      <span style="display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.15rem 0.45rem; border-radius: 0.25rem; font-size: 11px; font-weight: 600; ${badgeStyle}">
                        <span>${statusIcon}</span>
                        <span>${escapeHtml(row.status || '접수대기')}</span>
                      </span>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}
window.renderTrendDetailPanel = renderTrendDetailPanel;

function navigateToDetailFromTrendModal(id) {
  const modal = document.getElementById("trend-analysis-modal");
  const scrollTop = modal ? modal.scrollTop : 0;
  detailModalOrigin = {
    fromModalId: "trend-analysis-modal",
    scrollTop: scrollTop
  };

  if (modal) modal.classList.remove("active");

  setTimeout(() => {
    openIncidentDetail(id, detailModalOrigin);
  }, 50);
}
window.navigateToDetailFromTrendModal = navigateToDetailFromTrendModal;

function renderTrendMonthlyChart(selectedResort = "all") {
  const allIncidents = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);
  const targetIncidents = selectedResort === "all"
    ? allIncidents
    : allIncidents.filter(i => (i.resort === selectedResort || i.businessUnit === selectedResort));

  const monthCounts = Array(12).fill(0);
  targetIncidents.forEach(item => {
    const p = parseIncidentDate(item);
    if (p) {
      const m = p.getMonth();
      if (m >= 0 && m < 12) monthCounts[m]++;
    }
  });

  const monthLabels = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const monthlyCtx = document.getElementById("trendMonthlyChart")?.getContext("2d");
  if (monthlyCtx) {
    if (state.charts.trendMonthlyChart) state.charts.trendMonthlyChart.destroy();

    state.charts.trendMonthlyChart = new Chart(monthlyCtx, {
      type: "line",
      data: {
        labels: monthLabels,
        datasets: [{
          label: "월별 발생 건수",
          data: monthCounts,
          borderColor: "#38bdf8",
          backgroundColor: "rgba(56, 189, 248, 0.15)",
          tension: 0.35,
          fill: true,
          pointBackgroundColor: "#38bdf8",
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw}건`
            }
          }
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: "#334155", font: { size: 11, weight: 600 } } },
          y: { beginAtZero: true, grid: { color: "#cbd5e1" }, ticks: { color: "#334155", font: { weight: 600 }, stepSize: 1 } }
        }
      }
    });
  }
}

// ==========================================================================
// 2-2. [KPI 2] ⏳ 미완료/진행 중 사고 집중 관리 모달
// ==========================================================================
function openPendingIncidentsModal() {
  const modal = document.getElementById("pending-incidents-modal");
  if (!modal) return;

  renderPendingIncidents();
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function renderPendingIncidents() {
  const now = getSystemReferenceDate();
  const pendingItems = (state.incidents || []).filter(item => item.status !== "조치완료");

  let urgentCount = 0;
  let warningCount = 0;
  let normalCount = 0;

  const itemsWithDays = pendingItems.map(item => {
    let diffDays = 0;
    const p = parseIncidentDate(item);
    if (p) {
      diffDays = Math.max(0, Math.floor((now.getTime() - p.getTime()) / (1000 * 60 * 60 * 24)));
    }

    if (diffDays >= 7) urgentCount++;
    else if (diffDays >= 3) warningCount++;
    else normalCount++;

    return { item, diffDays };
  });

  itemsWithDays.sort((a, b) => b.diffDays - a.diffDays);

  const totalEl = document.getElementById("pending-total-count");
  const urgentEl = document.getElementById("pending-urgent-count");
  const warningEl = document.getElementById("pending-warning-count");
  const normalEl = document.getElementById("pending-normal-count");

  if (totalEl) totalEl.innerText = `${pendingItems.length}건`;
  if (urgentEl) urgentEl.innerText = `🚨 7일 이상 경과: ${urgentCount}건`;
  if (warningEl) warningEl.innerText = `⚠️ 3~6일 경과: ${warningCount}건`;
  if (normalEl) normalEl.innerText = `ℹ️ 2일 이내: ${normalCount}건`;

  const tbody = document.getElementById("pending-table-body");
  if (!tbody) return;

  if (itemsWithDays.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2.5rem; color: #94a3b8;">
          <div style="font-size: 2rem; margin-bottom: 0.5rem;">🎉</div>
          <div>현재 미결(조사/진행 중)인 안전사고가 없습니다. 모든 사고가 조치 완료되었습니다!</div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = itemsWithDays.map(({ item, diffDays }) => {
    let badgeClass = "normal";
    let badgeIcon = "ℹ️";
    if (diffDays >= 7) {
      badgeClass = "urgent";
      badgeIcon = "🚨";
    } else if (diffDays >= 3) {
      badgeClass = "warning";
      badgeIcon = "⚠️";
    }

    return `
      <tr>
        <td>
          <span class="pending-pill ${badgeClass}">
            ${badgeIcon} D+${diffDays}일
          </span>
        </td>
        <td class="id-cell" onclick="navigateToDetailFromSubModal('${escapeHtml(item.id)}')">${escapeHtml(item.id)}</td>
        <td>
          <div style="font-weight:600; color:#1e293b;">${escapeHtml(item.resort)}</div>
          <div style="font-size:0.75rem; color:#64748b;">${escapeHtml(item.date)}</div>
        </td>
        <td>
          <div style="font-weight:600; color:#1e293b;" class="title-cell" title="${escapeHtml(item.title)}">${escapeHtml(item.title)}</div>
          <div style="font-size:0.75rem; color:#475569;" class="title-cell" title="${escapeHtml(item.description)}">${escapeHtml(item.description)}</div>
        </td>
        <td>
          <span class="badge badge-status-progress">${escapeHtml(item.status)}</span>
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn-quick-resolve" onclick="quickResolveIncident('${escapeHtml(item.id)}')">
            ⚡ 완료 처리
          </button>
        </td>
      </tr>
    `;
  }).join("");
}

window.quickResolveIncident = function(id) {
  const item = state.incidents.find(i => i.id === id);
  if (!item) return;

  const note = prompt(`[문서번호: ${id}] 사고 조치 완료 처리를 진행합니다.\n완료 조치 내역 또는 메모를 입력해 주세요:`, item.actionTaken || "현장 안전 점검 및 고객 케어 완료, 재발 방지 조치 종결");
  if (note === null) return;

  const updatedAction = note.trim() || "현장 안전 점검 및 조치 완료";
  const updatedTimeline = item.timeline ? [...item.timeline] : [];
  const nowStr = new Date().toISOString().slice(0, 16).replace("T", " ");
  updatedTimeline.push({
    time: nowStr,
    note: `[미결 집중 관리 모달] 신속 조치 완료 처리: ${updatedAction}`
  });

  IncidentStorage.update(id, {
    status: "조치완료",
    actionTaken: updatedAction,
    timeline: updatedTimeline
  });

  item.status = "조치완료";
  item.actionTaken = updatedAction;
  item.timeline = updatedTimeline;

  renderPendingIncidents();
  applyFilters();
  showToast(`문서 [${id}]가 신속하게 '조치완료' 상태로 전환되었습니다.`, "success");
};

// ==========================================================================
// 2-3. [KPI 3] 🛡️ 재발 방지 및 시설 개선 대책 모음 모달
// ==========================================================================
function openPreventiveMeasuresModal() {
  const modal = document.getElementById("preventive-measures-modal");
  if (!modal) return;

  populatePreventiveFilters();
  renderPreventiveCards();

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function populatePreventiveFilters() {
  const allIncidents = state.incidents || [];
  const deptSelect = document.getElementById("preventiveDeptSelect");
  const resortSelect = document.getElementById("preventiveResortSelect");

  if (deptSelect) {
    const depts = [...new Set(allIncidents.map(i => i.dept || inferDeptFromIncident(i)).filter(Boolean))].sort();
    const curDept = deptSelect.value || "all";
    deptSelect.innerHTML = `<option value="all">전체 부서 (${depts.length}개)</option>` +
      depts.map(d => `<option value="${escapeHtml(d)}">${escapeHtml(d)}</option>`).join("");
    deptSelect.value = depts.includes(curDept) ? curDept : "all";
  }

  if (resortSelect) {
    const resorts = [...new Set(allIncidents.map(i => i.resort).filter(Boolean))].sort();
    const curResort = resortSelect.value || "all";
    resortSelect.innerHTML = `<option value="all">전체 사업장 (${resorts.length}개)</option>` +
      resorts.map(r => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join("");
    resortSelect.value = resorts.includes(curResort) ? curResort : "all";
  }
}

function inferDeptFromIncident(item) {
  if (!item) return "기타";
  const origDept = getIncidentDept(item);
  const resort = String(item.resort || item.businessUnit || "").trim();
  const loc = getIncidentLocation(item);
  const zone = String(item.zone || "").trim();
  const title = String(item.title || "").trim();
  const desc = String(item.description || item.summary || "").trim();
  const cat = getIncidentCategory(item);
  const fullText = `${origDept} ${resort} ${loc} ${zone} ${title} ${desc} ${cat}`.toLowerCase();

  // 1. 순수 골프장 코스 플레이 여부 판별 (특정 홀 1H~18H, 페어웨이, 티박스, 그린, 벙커, 러프, 카트도로, 캐디, 골프카트 등)
  const isGolfCourseSpecific = /파인\s*\d*h|체리\s*\d*h|메이플\s*\d*h|오크\s*\d*h|힐\s*\d*h|브릿지\s*\d*h|루나\s*\d*h|솔라\s*\d*h|인\s*\d*h|아웃\s*\d*h|\b\d+h\b|페어웨이|티잉|티박스|그린|벙커|러프|해저드|크리크|카트도로|캐디|골프카트/i.test(fullText);

  // 2. 콘도, 객실, 빌리지, 타워, 숙박, 사우나, 식음, 레저, 부대시설 판별
  // [규칙 1 & 3]: 콘도, 객실, 빌리지, 타워, 숙박시설, 사우나, F&B 등 리조트 부대시설 사고는 4대 골프CC팀(밸리/힐스/성문안/월송리)에 절대 배정 불가!
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

  // 일반 주차장 (단, 순수 골프 코스 특정 홀 플레이 사고 제외)
  const isParking = /주차장|지하주차장|지상주차장|야외주차장|옥외주차장|타워주차장|주차타워|전기차 주차장/i.test(fullText);

  // 파크로쉬 (정선 호텔/리조트 - 순수 골프CC와 무관)
  const isParkRoche = /파크로쉬/i.test(resort) || /파크로쉬/i.test(fullText);

  // [부대시설 완전 격리]
  if (isCondoRoomVillage || isSaunaLeisure || isFnb || isParkRoche || (isParking && !isGolfCourseSpecific)) {
    if (isSaunaLeisure) return "레저팀";
    if (isFnb) return "식음팀";
    if (/안전|의무|간호|소방|구급/i.test(fullText)) return "안전관리팀";
    if (
      /시설|영선|설비|전기|누수|타일|수리|승강기|엘리베이터|에어컨|난방|배관|보일러|단지내|군도변|도로/i.test(fullText) ||
      (isParking && !/객실|호실|스위트/.test(fullText))
    ) {
      return "시설팀";
    }
    // 기본 콘도/객실/빌리지 사고는 객실팀 귀속
    return "객실팀";
  }

  // 3. 순수 4대 골프CC 전담팀 매핑
  // [규칙 2]: 원본 부서가 '경기운영', '경기운영팀', '경기팀', '대정골프', '코스관리팀' 이거나 골프 사고인 경우
  const isGolfRelated = (
    /경기운영|경기팀|대정골프|코스관리|골프/.test(origDept) ||
    /골프/.test(zone) ||
    /타구|카트|캐디|골프/.test(cat) ||
    /밸리팀|힐스팀|성문안팀|월송리팀|밸리cc/.test(resort) ||
    isGolfCourseSpecific
  );

  if (isGolfRelated) {
    // 1) 성문안팀: '성문안', '인/아웃코스(성문안)' 관련 골프 사고
    if (/성문안|인코스|아웃코스|\b인\d*h\b|\b아웃\d*h\b/i.test(fullText) || /성문안/.test(resort)) {
      return "성문안팀";
    }
    // 2) 월송리팀: '월송리', '월송', '루나/솔라' 관련 골프 사고
    if (/월송리|월송|루나|솔라|\b루나\d*h\b|\b솔라\d*h\b/i.test(fullText) || /월송리/.test(resort)) {
      return "월송리팀";
    }
    // 3) 힐스팀: '힐스', '오크힐스', '브릿지', '힐' 코스 관련 골프 사고
    if (/오크힐스|힐스|브릿지|\b힐\d*h\b|힐\s*코스/i.test(fullText) || /힐스/.test(resort)) {
      return "힐스팀";
    }
    // 4) 밸리팀: '오크밸리', '파인', '체리', '메이플', '오크' 코스 관련 골프 사고 (단, '오크힐스' 제외)
    if (
      /오크밸리|밸리cc|밸리팀|파인|체리|메이플|\b오크\d*h\b|오크\s*코스/i.test(fullText) ||
      (/오크/i.test(fullText) && !/오크힐스|힐스/i.test(fullText)) ||
      /밸리/.test(resort)
    ) {
      return "밸리팀";
    }
    // 5) 코스 식별이 불가능한 일반 경기 사고인 경우: '골프운영(공통)'
    return "골프운영(공통)";
  }

  // 4. 기존 유효 리조트/지원 부서 유지 (시설팀, 안전관리팀, 조경 등)
  if (origDept && !/경기운영/.test(origDept)) {
    return origDept;
  }

  return "시설팀";
}

if (typeof window !== "undefined") {
  window.inferDeptFromIncident = inferDeptFromIncident;
}

function renderPreventiveCards() {
  const deptFilter = document.getElementById("preventiveDeptSelect")?.value || "all";
  const resortFilter = document.getElementById("preventiveResortSelect")?.value || "all";

  const itemsWithMeasures = (state.incidents || []).filter(item => {
    if (!item.preventiveMeasure || item.preventiveMeasure.trim() === "" || item.preventiveMeasure.includes("없음")) {
      return false;
    }
    const itemDept = item.dept || inferDeptFromIncident(item);
    if (deptFilter !== "all" && itemDept !== deptFilter) return false;
    if (resortFilter !== "all" && item.resort !== resortFilter) return false;
    return true;
  });

  const countBadge = document.getElementById("preventive-count-badge");
  if (countBadge) countBadge.innerText = `등록 대책 ${itemsWithMeasures.length}건`;

  const container = document.getElementById("preventive-cards-grid");
  if (!container) return;

  if (itemsWithMeasures.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <div style="font-size: 2rem; margin-bottom: 0.5rem;">🛡️</div>
        <div>선택한 조건에 해당하는 재발 방지 대책 데이터가 없습니다.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = itemsWithMeasures.map(item => {
    const itemDept = item.dept || inferDeptFromIncident(item);
    return `
      <div class="preventive-card" onclick="navigateToDetailFromSubModal('${escapeHtml(item.id)}')">
        <div class="prev-header">
          <span style="font-size:0.75rem; color:#38bdf8; font-weight:700;">${escapeHtml(item.id)}</span>
          <span class="badge badge-category" style="font-size:0.7rem;">${escapeHtml(itemDept)}</span>
        </div>
        <div class="prev-title">${escapeHtml(item.title)}</div>
        <div class="prev-measure-body">
          <div style="font-size:0.75rem; color:#34d399; font-weight:700; margin-bottom:0.2rem;">💡 개선 및 재발 방지 대책</div>
          ${escapeHtml(item.preventiveMeasure)}
        </div>
        <div class="prev-meta">
          <span>${escapeHtml(item.resort)} (${escapeHtml(item.zone || '시설')})</span>
          <span>담당: ${escapeHtml(item.manager || itemDept)}</span>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================================================
// 2-4. [KPI 4] 🏥 인명 피해 및 의료 후송 현황 분석 모달
// ==========================================================================
function openMedicalAnalysisModal() {
  const modal = document.getElementById("medical-analysis-modal");
  if (!modal) return;

  renderMedicalAnalysis();
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function renderMedicalAnalysis() {
  const allIncidents = state.incidents || [];

  // 1. 구분2(고객 vs 직원 vs 캐디/협력사) 비율 도넛 차트
  const victimCounts = {
    "투숙객/고객": 0,
    "직원/근무자": 0,
    "캐디/협력사": 0,
    "일반방문객": 0,
    "기타": 0
  };

  allIncidents.forEach(item => {
    const vt = (item.victimType || "").toLowerCase();
    if (vt.includes("고객") || vt.includes("투숙") || vt.includes("내장")) {
      victimCounts["투숙객/고객"]++;
    } else if (vt.includes("직원") || vt.includes("근무") || vt.includes("사원")) {
      victimCounts["직원/근무자"]++;
    } else if (vt.includes("캐디") || vt.includes("협력") || vt.includes("외주")) {
      victimCounts["캐디/협력사"]++;
    } else if (vt.includes("방문")) {
      victimCounts["일반방문객"]++;
    } else {
      victimCounts["기타"]++;
    }
  });

  const victimLabels = Object.keys(victimCounts).filter(k => victimCounts[k] > 0);
  const victimData = victimLabels.map(k => victimCounts[k]);
  const victimPalette = ["#38bdf8", "#10b981", "#f59e0b", "#f87171", "#a78bfa"];

  const victimCtx = document.getElementById("medicalVictimChart")?.getContext("2d");
  if (victimCtx) {
    if (state.charts.medicalVictimChart) state.charts.medicalVictimChart.destroy();

    state.charts.medicalVictimChart = new Chart(victimCtx, {
      type: "doughnut",
      data: {
        labels: victimLabels,
        datasets: [{
          data: victimData,
          backgroundColor: victimPalette.slice(0, victimLabels.length),
          borderColor: "#ffffff",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: { color: "#94a3b8", font: { size: 11 } }
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.raw}건`
            }
          }
        },
        cutout: "60%"
      }
    });
  }

  // 2. 피해 심각도별 건수 분류
  let minorCount = 0;
  let modCount = 0;
  let severeCount = 0;
  let propCount = 0;

  allIncidents.forEach(item => {
    const s = (item.severity || "").toLowerCase();
    if (s.includes("경미") || s.includes("현장")) minorCount++;
    else if (s.includes("중등") || s.includes("병원")) modCount++;
    else if (s.includes("중대") || s.includes("이송") || s.includes("응급") || s.includes("119")) severeCount++;
    else propCount++;
  });

  const minorEl = document.getElementById("med-sev-minor");
  const modEl = document.getElementById("med-sev-mod");
  const severeEl = document.getElementById("med-sev-severe");
  const propEl = document.getElementById("med-sev-prop");

  if (minorEl) minorEl.innerText = `${minorCount}건`;
  if (modEl) modEl.innerText = `${modCount}건`;
  if (severeEl) severeEl.innerText = `${severeCount}건`;
  if (propEl) propEl.innerText = `${propCount}건`;

  // 3. 병원 치료 내역 포함 목록
  const medicalItems = allIncidents.filter(item => {
    const s = (item.severity || "").toLowerCase();
    const a = (item.actionTaken || "").toLowerCase();
    const d = (item.description || "").toLowerCase();
    return s.includes("병원") || s.includes("중등") || s.includes("중대") || s.includes("이송") ||
           a.includes("병원") || a.includes("응급") || a.includes("119") || a.includes("치료") || a.includes("소독") ||
           d.includes("병원") || d.includes("치료");
  });

  const countBadge = document.getElementById("med-table-count");
  if (countBadge) countBadge.innerText = `${medicalItems.length}건`;

  const tbody = document.getElementById("medical-table-body");
  if (!tbody) return;

  if (medicalItems.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 2rem; color: #94a3b8;">
          의료 후송 또는 병원 진료 관련 기록이 없습니다.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = medicalItems.map(item => {
    let sevClass = "badge-severity-minor";
    if (item.severity?.includes("중대")) sevClass = "badge-severity-severe";
    else if (item.severity?.includes("중등")) sevClass = "badge-severity-moderate";
    else if (item.severity?.includes("대물")) sevClass = "badge-severity-property";

    return `
      <tr onclick="navigateToDetailFromSubModal('${escapeHtml(item.id)}')">
        <td class="id-cell">${escapeHtml(item.id)}</td>
        <td style="color:#64748b; font-size:0.78rem;">${escapeHtml(item.date)}</td>
        <td>
          <div style="font-weight:600; color:#1e293b;">${escapeHtml(item.resort)}</div>
          <div style="font-size:0.75rem; color:#64748b;">${escapeHtml(item.locationDetail || item.zone)}</div>
        </td>
        <td>
          <span style="color:#2563eb; font-weight:600;">${escapeHtml(item.victimType || '고객')}</span>
          <span style="font-size:0.78rem; color:#475569; margin-left:0.25rem;">(${escapeHtml(item.victimName || '익명')})</span>
        </td>
        <td>
          <span class="badge ${sevClass}">${escapeHtml(item.severity)}</span>
        </td>
        <td>
          <div style="font-size:0.82rem; color:#334155;" class="title-cell" title="${escapeHtml(item.actionTaken)}">
            ${escapeHtml(item.actionTaken || '-')}
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Setup Event Listeners for 4 Sub-Analysis Modals
function setupSubAnalysisModals() {
  const modalConfigs = [
    { modalId: "trend-analysis-modal", closeBtnId: "btn-close-trend-modal", footerCloseId: "btn-trend-footer-close" },
    { modalId: "pending-incidents-modal", closeBtnId: "btn-close-pending-modal", footerCloseId: "btn-pending-footer-close" },
    { modalId: "preventive-measures-modal", closeBtnId: "btn-close-preventive-modal", footerCloseId: "btn-preventive-footer-close" },
    { modalId: "medical-analysis-modal", closeBtnId: "btn-close-medical-modal", footerCloseId: "btn-medical-footer-close" }
  ];

  modalConfigs.forEach(({ modalId, closeBtnId, footerCloseId }) => {
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);
    const footerBtn = document.getElementById(footerCloseId);

    const closeModal = () => {
      if (modal) modal.classList.remove("active");
      document.body.classList.remove("modal-open");
    };

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (footerBtn) footerBtn.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }
  });

  const trendResortSelect = document.getElementById("trendResortSelect");
  if (trendResortSelect) {
    trendResortSelect.addEventListener("change", (e) => {
      renderTrendMonthlyChart(e.target.value);
    });
  }

  const prevDeptSelect = document.getElementById("preventiveDeptSelect");
  if (prevDeptSelect) {
    prevDeptSelect.addEventListener("change", renderPreventiveCards);
  }

  const prevResortSelect = document.getElementById("preventiveResortSelect");
  if (prevResortSelect) {
    prevResortSelect.addEventListener("change", renderPreventiveCards);
  }

  const drilldownTag = document.getElementById("drilldown-filter-tag");
  if (drilldownTag) {
    drilldownTag.addEventListener("click", clearDrilldownFilter);
  }
}

// Chart Drilldown Helpers
function updateDrilldownTag() {
  const tagEl = document.getElementById("drilldown-filter-tag");
  if (!tagEl) return;

  const { category, dept, zone } = state.filters;
  if (category !== "all") {
    tagEl.style.display = "inline-flex";
    tagEl.innerHTML = `📊 유형: ${escapeHtml(category)} <span style="margin-left:3px;font-size:0.7rem;">✕</span>`;
    tagEl.title = "클릭 시 유형 드릴다운 필터 해제";
  } else if (dept !== "all") {
    tagEl.style.display = "inline-flex";
    tagEl.innerHTML = `🏢 부서: ${escapeHtml(dept)} <span style="margin-left:3px;font-size:0.7rem;">✕</span>`;
    tagEl.title = "클릭 시 팀/부서 드릴다운 필터 해제";
  } else if (zone && zone !== "all") {
    tagEl.style.display = "inline-flex";
    tagEl.innerHTML = `📍 구역: ${escapeHtml(zone)} <span style="margin-left:3px;font-size:0.7rem;">✕</span>`;
    tagEl.title = "클릭 시 구역 드릴다운 필터 해제";
  } else {
    tagEl.style.display = "none";
  }
}

function clearDrilldownFilter() {
  state.filters.category = "all";
  state.filters.dept = "all";
  state.filters.zone = "all";
  const catSelect = document.getElementById("filter-category");
  if (catSelect) catSelect.value = "all";
  const deptSelect = document.getElementById("filter-dept");
  if (deptSelect) deptSelect.value = "all";
  state.currentPage = 1;
  applyFilters();
  showToast("차트 드릴다운 필터가 해제되었습니다.", "info");
}

function toggleChartDrilldown(type, value) {
  if (state.filters[type] === value) {
    state.filters[type] = "all";
    if (type === "category") {
      if (state.categoryChartMeta) state.categoryChartMeta.clickedIsOther = false;
      const catSelect = document.getElementById("filter-category");
      if (catSelect) catSelect.value = "all";
      const tableCat = document.getElementById("table-filter-category");
      if (tableCat) tableCat.value = "all";
    } else if (type === "dept") {
      const deptSelect = document.getElementById("filter-dept");
      if (deptSelect) deptSelect.value = "all";
    } else if (type === "zone") {
      const tableZone = document.getElementById("table-filter-zone");
      if (tableZone) tableZone.value = "all";
    }
    showToast(`'${value}' 차트 필터가 해제되었습니다.`, "info");
  } else {
    state.filters[type] = value;
    if (type === "category") {
      if (!state.categoryChartMeta) state.categoryChartMeta = {};
      state.categoryChartMeta.clickedIsOther = Boolean(value.startsWith("기타 외") || value === "기타");
      const catSelect = document.getElementById("filter-category");
      if (catSelect) {
        if (![...catSelect.options].some(o => o.value === value)) {
          catSelect.add(new Option(value, value));
        }
        catSelect.value = value;
      }
      const tableCat = document.getElementById("table-filter-category");
      if (tableCat) {
        if (![...tableCat.options].some(o => o.value === value)) {
          tableCat.add(new Option(value, value));
        }
        tableCat.value = value;
      }
    } else if (type === "dept") {
      const deptSelect = document.getElementById("filter-dept");
      if (deptSelect) deptSelect.value = value;
    } else if (type === "zone") {
      const tableZone = document.getElementById("table-filter-zone");
      if (tableZone) tableZone.value = value;
    }
    showToast(`차트 필터: '${value}' 조건으로 목록이 필터링되었습니다.`, "success");
  }

  state.currentPage = 1;
  applyFilters();
  // 화면 강제 스크롤 점프(scrollIntoView) 제거: 현재 스크롤 위치 그대로 유지
}

// ==========================================================================
// 3. 실무 엑셀(SheetJS) 파싱 및 열 자동 매핑 로직
// ==========================================================================
function handleExcelFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  event.target.value = "";

  if (typeof XLSX === "undefined") {
    alert("SheetJS 엑셀 파싱 라이브러리가 로드되지 않았습니다. 인터넷 연결을 확인해 주세요.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array", cellDates: false });

      if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
        alert("엑셀 파일에 시트가 존재하지 않습니다.");
        return;
      }

      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const rawRows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      if (!rawRows || rawRows.length === 0) {
        alert("선택하신 엑셀 시트에 데이터 행이 존재하지 않습니다.");
        return;
      }

      const parsedRecords = parseExcelRows(rawRows);

      if (parsedRecords.length === 0) {
        alert("유효한 데이터 행을 변환하지 못했습니다. 열 이름을 확인해 주세요.");
        return;
      }

      // 엑셀 파싱 성공 시 마스터 내용으로 완전 교체 핸들러 호출
      handleExcelUploadSuccess(parsedRecords);

    } catch (err) {
      console.error("Excel parse error:", err);
      alert(`엑셀 파일을 읽는 도중 오류가 발생했습니다: ${err.message}`);
    }
  };

  reader.onerror = function() {
    alert("파일을 읽어오는 중 에러가 발생했습니다.");
  };

  reader.readAsArrayBuffer(file);
}

// Smart Column Value Helper
function getColValue(row, candidates, fallback = "") {
  for (const c of candidates) {
    if (row[c] !== undefined && row[c] !== null && String(row[c]).trim() !== "") {
      return String(row[c]).trim();
    }
  }

  const rowKeys = Object.keys(row);
  for (const c of candidates) {
    const cleanCandidate = c.replace(/\s+/g, "").toLowerCase();
    for (const rk of rowKeys) {
      if (rk.replace(/\s+/g, "").toLowerCase() === cleanCandidate) {
        const val = row[rk];
        if (val !== undefined && val !== null && String(val).trim() !== "") {
          return String(val).trim();
        }
      }
    }
  }

  return fallback;
}

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
    type: cleanType,
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
if (typeof window !== 'undefined') {
  window.parseIncidentRow = parseIncidentRow;
}

// Convert Excel Rows to Dashboard Incident Objects
function parseExcelRows(rawRows) {
  const result = [];
  let rowIdx = 0;

  for (const r of rawRows) {
    if (!r) continue;
    // Normalize row keys
    const row = {};
    for (const [k, v] of Object.entries(r)) {
      row[String(k).trim()] = v;
    }

    const hasAnyContent = row['문서번호'] || row['발생일시'] || row['사고유형1'] || row['내용'] || row['위치(세부)'];
    if (!hasAnyContent) continue;

    const parsed = parseIncidentRow(row, rowIdx);

    const occurDate = parsed.date || new Date().toISOString().slice(0, 10);
    const reportDateStr = occurDate.length >= 10 ? occurDate.slice(0, 10).replace(/\./g, '-') : `${parsed.year}-01-01`;
    const zone = inferZoneFromLocation(parsed.location, parsed.department, parsed.team);
    const severity = inferSeverity(parsed.description, parsed.type);

    const item = {
      ...parsed,
      // Compatibility aliases for charts, KPI cards, filters, modals
      documentNumber: parsed.docNo,
      occurredAt: occurDate,
      category: parsed.type,
      incidentType: parsed.type,
      dept: parsed.department || parsed.team,
      resort: parsed.team,
      team: parsed.team,
      department: parsed.department,
      displayLocation: parsed.displayLocation,
      businessUnit: parsed.team,
      division: parsed.department,
      locationDetail: parsed.location,
      place: parsed.location,
      victim: parsed.victimType,
      cost: parsed.insuranceCost,
      companyAmount: parsed.insuranceCost,
      totalAmount: parsed.insuranceCost,
      personalAmount: 0,
      reportStatus: parsed.industrialAccident,
      industrialAccidentReport: parsed.industrialAccident,
      preventiveMeasure: parsed.countermeasure || "시설 안전 점검 및 프로세스 준수 강화",
      actionTaken: "초동 조치 완료 및 현장 확인",
      victimName: parsed.victimName || "익명",
      manager: parsed.team || "안전관리팀",
      zone,
      severity,
      faultRatio: parsed.insuranceCost > 0 ? "당사 과실 일부" : "과실 미산정",
      reportDate: reportDateStr,
      notes: String(row['비고'] || '').trim(),
      timeline: [
        { time: occurDate.slice(0, 16), note: "사고 발생 접수" },
        { time: occurDate.slice(0, 16), note: "초동 조치 완료 및 확인" }
      ],
      '사고유형1': parsed.type,
      '구분1': parsed.team,
      '구분2': parsed.victimDetail,
      '보험금': parsed.insuranceCost
    };

    result.push(item);
    rowIdx++;
  }

  return result;
}

// Location & Dept Based Zone Inference
// Location & Dept Based Zone Inference (D열 '위치(세부)' 최우선 참조)
function inferZoneFromLocation(location, dept, team) {
  const loc = String(location || "").trim();
  const subDept = String(dept || "").trim();
  const subTeam = String(team || "").trim();

  // =========================================================================
  // 1. D열('위치(세부)') 텍스트 최우선 검사
  // =========================================================================
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

  // =========================================================================
  // 2. 그 외 명시되지 않은 경우에만 C열/B열 기준으로 보조 분류
  // =========================================================================
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
if (typeof window !== "undefined") {
  window.inferZoneFromLocation = inferZoneFromLocation;
}

// Severity Inference
function inferSeverity(desc, category) {
  const text = `${desc} ${category}`.toLowerCase();
  if (text.includes("119") || text.includes("응급실") || text.includes("구급차") || text.includes("골절") || text.includes("수술") || text.includes("봉합")) {
    return "중대 (외부이송)";
  }
  if (text.includes("병원") || text.includes("의원") || text.includes("정형외과") || text.includes("깁스") || text.includes("염좌") || text.includes("엑스레이") || text.includes("x-ray")) {
    return "중등 (병원진료)";
  }
  if (text.includes("파손") || text.includes("훼손") || text.includes("크랙") || text.includes("스크래치") || text.includes("스파크") || text.includes("휠")) {
    return "단순 대물";
  }
  return "경미 (현장처치)";
}

// Safe Numeric Parser
function parseNumericCost(val) {
  if (val === undefined || val === null) return 0;
  if (typeof val === "number") return isNaN(val) ? 0 : val;
  const clean = String(val).replace(/[^0-9.-]/g, "");
  const parsed = parseFloat(clean);
  return isNaN(parsed) ? 0 : parsed;
}

// ==========================================================================
// 전역 날짜 정규화 및 파싱 엔진 (Global Incident Date Normalization Engine)
// ==========================================================================

function normalizeDateString(rawStr) {
  if (!rawStr) return "";
  let s = String(rawStr).trim();
  // 1. "202311.07" 오타 패턴 -> "2023.11.07"
  s = s.replace(/\b(19\d{2}|20\d{2})(\d{2})[./-](\d{1,2})\b/g, "$1.$2.$3");
  // 2. "20231107" 8자리 연속 숫자 -> "2023.11.07"
  s = s.replace(/\b(19\d{2}|20\d{2})(\d{2})(\d{2})\b/g, "$1.$2.$3");
  return s;
}

/**
 * 전역 단일 기준 발생일시 파싱 헬퍼 함수
 * 원본의 다양한 비정형 형식(2025.11.14, 2026.03.02, 2023.12.30~2023.12.31, 2025.04.10 12:50경, 2024-01-15 등)을
 * 단일 기준으로 안전하게 파싱하여 new Date(year, month - 1, day) 객체 또는 { startDate, endDate } 범위를 반환합니다.
 * @param {string|object} input - 날짜 문자열 또는 사고 객체(item)
 * @param {object} [options] - { range: true } 설정 시 { startDate, endDate, raw } 반환
 * @returns {Date|{startDate: Date, endDate: Date, raw: string}|null}
 */
function parseIncidentDate(input, options = {}) {
  if (!input) return null;

  // 사고 객체가 직접 전달된 경우 다중 Fallback으로 날짜 추출
  const raw = typeof input === "object" && !(input instanceof Date)
    ? String(input.date || input.occurredAt || input.incidentDate || input['발생일시'] || input.occurDate || input.reportDate || "")
    : String(input);

  const str = normalizeDateString(raw);
  if (!str) return null;

  // 문자열에서 유효한 연·월·일 패턴 ((\d{4})[.-](\d{1,2})[.-](\d{1,2})) 추출
  const datePattern = /(\d{4})[./-](\d{1,2})[./-](\d{1,2})/g;
  const matches = [...str.matchAll(datePattern)];

  // 유효한 연월일 패턴이 아예 없는 비정상 데이터는 null 반환
  if (!matches || matches.length === 0) return null;

  const firstMatch = matches[0];
  const startY = parseInt(firstMatch[1], 10);
  const startM = parseInt(firstMatch[2], 10);
  const startD = parseInt(firstMatch[3], 10);

  // 연월일 기본 유효성 검사 (1~12월, 1~31일)
  if (startM < 1 || startM > 12 || startD < 1 || startD > 31) return null;

  // 시간/분 패턴 추출 (예: "12:50경", "20:23")
  let startH = 0;
  let startMin = 0;
  const timeMatch = str.slice(firstMatch.index + firstMatch[0].length).match(/\s+(\d{1,2}):(\d{1,2})/);
  if (timeMatch) {
    const h = parseInt(timeMatch[1], 10);
    const m = parseInt(timeMatch[2], 10);
    if (h >= 0 && h < 24 && m >= 0 && m < 60) {
      startH = h;
      startMin = m;
    }
  }

  const startDate = new Date(startY, startM - 1, startD, startH, startMin, 0, 0);
  if (isNaN(startDate.getTime())) return null;

  // 기간형 표기인 경우 종료일자 추출 (예: "2023.12.30~2023.12.31")
  let endDate;
  if (matches.length > 1) {
    const secondMatch = matches[1];
    const endY = parseInt(secondMatch[1], 10);
    const endM = parseInt(secondMatch[2], 10);
    const endD = parseInt(secondMatch[3], 10);
    endDate = new Date(endY, endM - 1, endD, 23, 59, 59, 999);
  } else {
    endDate = new Date(startY, startM - 1, startD, 23, 59, 59, 999);
  }

  if (options && options.range === true) {
    return { startDate, endDate, raw: str };
  }

  // Date 객체에 startDate, endDate 및 년/월/일 프로퍼티를 함께 확장 탑재하여 범용성 극대화
  startDate.startDate = startDate;
  startDate.endDate = endDate;
  startDate.year = startY;
  startDate.month = startM;
  startDate.day = startD;

  return startDate;
}

// 기간형 범위 추출 전용 헬퍼
function parseIncidentDateRange(input) {
  return parseIncidentDate(input, { range: true });
}

function getSystemReferenceDate() {
  const current = new Date();
  if (current.getFullYear() >= 2026) {
    return current;
  }
  return new Date("2026-10-28T18:00:00");
}

function extractYear(dateStr) {
  if (!dateStr) return null;
  const p = parseIncidentDate(dateStr);
  return p ? String(p.getFullYear()) : null;
}

function extractStandardDate(dateStr) {
  if (!dateStr) return null;
  const p = parseIncidentDate(dateStr);
  if (!p) return null;
  const y = p.getFullYear();
  const m = String(p.getMonth() + 1).padStart(2, "0");
  const d = String(p.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function getIncidentYear(item) {
  if (!item) return null;
  const p = parseIncidentDate(item);
  return p ? String(p.getFullYear()) : null;
}

window.parseIncidentDate = parseIncidentDate;
window.parseIncidentDateRange = parseIncidentDateRange;
window.getSystemReferenceDate = getSystemReferenceDate;
window.normalizeDateString = normalizeDateString;
window.extractYear = extractYear;
window.extractStandardDate = extractStandardDate;
window.getIncidentYear = getIncidentYear;

// Dynamically Populate Filter Dropdowns
function populateFilterDropdowns() {
  const resortSelect = document.getElementById("filter-resort");
  const deptSelect = document.getElementById("filter-dept");
  const categorySelect = document.getElementById("filter-category");
  const severitySelect = document.getElementById("filter-severity");

  if (resortSelect) {
    const currentResort = state.filters.resort;
    const uniqueResorts = [...new Set(state.incidents.map(i => i.resort || i.businessUnit).filter(Boolean))].sort();

    resortSelect.innerHTML = `<option value="all">전체 사업장 (${uniqueResorts.length}개 구역)</option>` +
      uniqueResorts.map(r => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join("");

    if (uniqueResorts.includes(currentResort)) {
      resortSelect.value = currentResort;
    } else {
      resortSelect.value = "all";
      state.filters.resort = "all";
    }
  }

  // 4대 골프CC 전담팀 및 리조트 부서 체계화 드롭다운 옵션 생성
  if (deptSelect) {
    const currentDept = state.filters.dept;
    const allDepts = [...new Set(state.incidents.map(i => getIncidentDept(i) || inferDeptFromIncident(i)).filter(Boolean))];
    
    const golfCCDefs = [
      { id: "밸리팀", label: "밸리팀 (오크밸리CC)" },
      { id: "힐스팀", label: "힐스팀 (오크힐스CC)" },
      { id: "성문안팀", label: "성문안팀 (성문안CC)" },
      { id: "월송리팀", label: "월송리팀 (월송리CC)" },
      { id: "골프운영(공통)", label: "골프운영(공통)" }
    ];
    const resortDeptDefs = [
      { id: "객실팀", label: "객실팀 (콘도/빌리지/숙박)" },
      { id: "시설팀", label: "시설팀 (영선/설비/주차장)" },
      { id: "레저팀", label: "레저팀 (사우나/스키/레저)" },
      { id: "식음팀", label: "식음팀 (F&B/레스토랑/카페)" },
      { id: "안전관리팀", label: "안전관리팀" }
    ];

    const actualGolf = golfCCDefs.filter(d => allDepts.includes(d.id));
    const actualResort = resortDeptDefs.filter(d => allDepts.includes(d.id));
    const knownIds = [...golfCCDefs.map(d => d.id), ...resortDeptDefs.map(d => d.id)];
    const otherDepts = allDepts.filter(d => !knownIds.includes(d)).sort();

    let html = `<option value="all">전체 팀/부서 (${allDepts.length}개 부서)</option>`;
    if (actualGolf.length > 0) {
      html += `<optgroup label="⛳ 4대 골프CC 전담팀">` +
        actualGolf.map(d => `<option value="${escapeHtml(d.id)}">${escapeHtml(d.label)}</option>`).join("") +
        `</optgroup>`;
    }
    if (actualResort.length > 0) {
      html += `<optgroup label="🏨 리조트 부대시설/운영팀">` +
        actualResort.map(d => `<option value="${escapeHtml(d.id)}">${escapeHtml(d.label)}</option>`).join("") +
        `</optgroup>`;
    }
    if (otherDepts.length > 0) {
      html += `<optgroup label="🏢 지원 및 기타 부서">` +
        otherDepts.map(d => `<option value="${escapeHtml(d)}">${escapeHtml(d)}</option>`).join("") +
        `</optgroup>`;
    }

    deptSelect.innerHTML = html;

    if (allDepts.includes(currentDept)) {
      deptSelect.value = currentDept;
    } else {
      deptSelect.value = "all";
      state.filters.dept = "all";
    }
  }

  // Category dropdowns (메인 상단 + 테이블 간이 빠른 필터)
  const uniqueCategories = [...new Set(state.incidents.map(i => getIncidentCategory(i)).filter(Boolean))].sort();
  if (categorySelect) {
    const currentCategory = state.filters.category;
    categorySelect.innerHTML = `<option value="all">전체 사고 유형 (${uniqueCategories.length}종)</option>` +
      uniqueCategories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");

    if (uniqueCategories.includes(currentCategory)) {
      categorySelect.value = currentCategory;
    } else {
      categorySelect.value = "all";
      state.filters.category = "all";
    }
  }

  const tableCatSelect = document.getElementById("table-filter-category");
  if (tableCatSelect) {
    const currentCategory = state.filters.category;
    tableCatSelect.innerHTML = `<option value="all">전체 사고유형 (${uniqueCategories.length}종)</option>` +
      uniqueCategories.map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
    tableCatSelect.value = uniqueCategories.includes(currentCategory) ? currentCategory : "all";
  }

  // 다년도 비교 분석용 사고 유형 및 사업장 필터 동기화
  if (typeof populateYoyIncidentTypeFilter === "function") {
    populateYoyIncidentTypeFilter();
  }
  if (typeof populateYoyTableBizFilter === "function") {
    populateYoyTableBizFilter();
  }

  // Zone dropdown (테이블 간이 빠른 필터)
  const tableZoneSelect = document.getElementById("table-filter-zone");
  if (tableZoneSelect) {
    const currentZone = state.filters.zone;
    const uniqueZones = [...new Set(state.incidents.map(i => i.zone).filter(Boolean))].sort();
    tableZoneSelect.innerHTML = `<option value="all">전체 구역/장소 (${uniqueZones.length}개 구역)</option>` +
      uniqueZones.map(z => `<option value="${escapeHtml(z)}">${escapeHtml(z)}</option>`).join("");
    tableZoneSelect.value = uniqueZones.includes(currentZone) ? currentZone : "all";
  }

  // Severity dropdowns (메인 상단 + 테이블 간이 빠른 필터)
  if (severitySelect) {
    severitySelect.value = state.filters.severity || "all";
  }
  const tableSevSelect = document.getElementById("table-filter-severity");
  if (tableSevSelect) {
    tableSevSelect.value = state.filters.severity || "all";
  }

  // 신설: 피해자 대상 구분 dropdowns (메인 상단 + 테이블 간이 빠른 필터)
  const victimSelect = document.getElementById("filter-victim-type");
  if (victimSelect) {
    victimSelect.value = state.filters.victimType || "all";
  }
  const tableVictimSelect = document.getElementById("table-filter-victim-type");
  if (tableVictimSelect) {
    tableVictimSelect.value = state.filters.victimType || "all";
  }

  const reportStatusSelect = document.getElementById("filter-report-status");
  if (reportStatusSelect) {
    reportStatusSelect.value = state.filters.reportStatus || "all";
  }
}

// Switch between View Mode and Edit Mode in Detail Modal
function switchDetailMode(isEdit) {
  state.isEditMode = isEdit;
  const viewModeEl = document.getElementById("detail-view-mode");
  const editModeEl = document.getElementById("detail-edit-mode");
  const viewFooterEl = document.getElementById("detail-view-footer");
  const editFooterEl = document.getElementById("detail-edit-footer");

  if (isEdit) {
    if (viewModeEl) viewModeEl.style.display = "none";
    if (viewFooterEl) viewFooterEl.style.display = "none";
    if (editModeEl) editModeEl.style.display = "block";
    if (editFooterEl) editFooterEl.style.display = "flex";
  } else {
    if (editModeEl) editModeEl.style.display = "none";
    if (editFooterEl) editFooterEl.style.display = "none";
    if (viewModeEl) viewModeEl.style.display = "block";
    if (viewFooterEl) viewFooterEl.style.display = "flex";
  }
}

// Populate Edit Form with Current Record
function populateEditForm(id) {
  const item = state.incidents.find(i => i.id === id);
  if (!item) return;

  const docNum = item.docNo || item.documentNumber || item.id || "";
  document.getElementById("edit-id").value = docNum;
  document.getElementById("edit-date").value = item.date;
  document.getElementById("edit-resort").value = item.resort;
  const editDeptEl = document.getElementById("edit-dept");
  if (editDeptEl) editDeptEl.value = item.dept || inferDeptFromIncident(item);
  document.getElementById("edit-zone").value = item.zone || "객실";
  document.getElementById("edit-location-detail").value = item.locationDetail || "";
  document.getElementById("edit-category").value = getIncidentCategory(item);
  document.getElementById("edit-severity").value = item.severity;
  document.getElementById("edit-victim-type").value = item.victimType || "고객";
  document.getElementById("edit-victim-name").value = item.victimName || "";
  document.getElementById("edit-title").value = item.title;
  document.getElementById("edit-desc").value = item.description || "";
  document.getElementById("edit-action").value = item.actionTaken || "";

  document.getElementById("edit-fault-ratio").value = item.faultRatio || "";
  document.getElementById("edit-total-amount").value = item.totalAmount !== undefined ? item.totalAmount : 0;
  document.getElementById("edit-company-amount").value = item.companyAmount !== undefined ? item.companyAmount : (item.cost || 0);
  document.getElementById("edit-personal-amount").value = item.personalAmount !== undefined ? item.personalAmount : 0;

  document.getElementById("edit-preventive").value = item.preventiveMeasure || "";
  document.getElementById("edit-status").value = item.status;
  document.getElementById("edit-manager").value = item.manager || "";

  // 신설: 산재 행정 특이사항 및 첨부파일 연동
  const editReportStatusEl = document.getElementById("edit-report-status");
  if (editReportStatusEl) {
    let r = String(item.reportStatus || item.industrialAccidentReport || "해당 없음").trim();
    if (r === "해당없음") r = "해당 없음";
    editReportStatusEl.value = r;
  }
  const editSpecialNotesEl = document.getElementById("edit-special-notes");
  if (editSpecialNotesEl) editSpecialNotesEl.value = item.specialNotes || "";

  state.editAttachments = Array.isArray(item.attachments) ? JSON.parse(JSON.stringify(item.attachments)) : [];
  renderAttachmentList("edit");
}

// Handle Save Edit Action
function handleSaveEdit() {
  const id = state.currentDetailId;
  if (!id) return;

  const item = state.incidents.find(i => i.id === id);
  if (!item) return;

  const docNoInput = document.getElementById("edit-id");
  const docNo = docNoInput ? docNoInput.value.trim() : "";
  const dateStr = document.getElementById("edit-date").value.trim();
  const resort = document.getElementById("edit-resort").value.trim();
  const editDeptEl = document.getElementById("edit-dept");
  const dept = editDeptEl ? editDeptEl.value : (item.dept || inferDeptFromIncident(item));
  const zone = document.getElementById("edit-zone").value;
  const locationDetail = document.getElementById("edit-location-detail").value.trim();
  const category = document.getElementById("edit-category").value.trim();
  const severity = document.getElementById("edit-severity").value;
  const victimType = document.getElementById("edit-victim-type").value.trim();
  const victimName = document.getElementById("edit-victim-name").value.trim();
  const title = document.getElementById("edit-title").value.trim();
  const description = document.getElementById("edit-desc").value.trim();
  const actionTaken = document.getElementById("edit-action").value.trim();

  const faultRatio = document.getElementById("edit-fault-ratio").value.trim() || "과실 미산정";
  const totalAmount = parseNumericCost(document.getElementById("edit-total-amount").value);
  const companyAmount = parseNumericCost(document.getElementById("edit-company-amount").value);
  const personalAmount = parseNumericCost(document.getElementById("edit-personal-amount").value);

  const preventiveMeasure = document.getElementById("edit-preventive").value.trim();
  const status = document.getElementById("edit-status").value;
  const manager = document.getElementById("edit-manager").value.trim();

  // 신설: 산재조사표 제출 여부 및 특이사항, 첨부파일
  let reportStatus = document.getElementById("edit-report-status") ? document.getElementById("edit-report-status").value : (item.reportStatus || "해당 없음");
  if (reportStatus === "해당없음") reportStatus = "해당 없음";
  const specialNotes = document.getElementById("edit-special-notes") ? document.getElementById("edit-special-notes").value.trim() : "";
  const attachments = state.editAttachments || [];

  if (!title || !description) {
    alert("제목과 상세 경위는 필수 입력 항목입니다.");
    return;
  }

  const updatedTimeline = item.timeline ? [...item.timeline] : [];
  const nowStr = new Date().toISOString().slice(0, 16).replace("T", " ");
  updatedTimeline.push({
    time: nowStr,
    note: `관리자 정보 수정 반영 (상태: ${status}, 지급액: ${companyAmount.toLocaleString()}원, 첨부파일 ${attachments.length}건)`
  });

  const updatedFields = {
    docNo: docNo || item.docNo || item.id,
    documentNumber: docNo || item.documentNumber || item.docNo || item.id,
    date: dateStr,
    category: category,
    type: category,
    incidentType: category,
    '사고유형1': category,
    resort: resort,
    businessUnit: resort,
    dept: dept,
    zone: zone,
    location: locationDetail,
    locationDetail: locationDetail,
    severity: severity,
    victimType: victimType,
    victimName: victimName,
    title: title,
    description: description,
    actionTaken: actionTaken,
    faultRatio: faultRatio,
    totalAmount: totalAmount,
    companyAmount: companyAmount,
    personalAmount: personalAmount,
    cost: companyAmount,
    '보험금': companyAmount,
    preventiveMeasure: preventiveMeasure,
    status: status,
    manager: manager,
    reportStatus: reportStatus,
    industrialAccidentReport: reportStatus,
    industrialAccidentReport: reportStatus,
    notes: specialNotes,
    specialNotes: specialNotes,
    attachments: attachments,
    timeline: updatedTimeline
  };

  IncidentStorage.update(id, updatedFields);
  state.incidents = IncidentStorage.getAll();

  openIncidentDetail(id);
  switchDetailMode(false);

  populateFilterDropdowns();
  applyFilters();
  showToast(`문서 [${id}]의 정보가 성공적으로 수정되었습니다.`, "success");
}

// Delete Incident Record
window.deleteIncident = function(id) {
  if (!id) return;

  const target = state.incidents.find(i => i.id === id);
  const targetTitle = target ? `\n[문서번호: ${target.id}] ${target.title}` : "";

  if (confirm(`정말 이 사고 기록을 삭제하시겠습니까?${targetTitle}`)) {
    IncidentStorage.delete(id);
    state.incidents = IncidentStorage.getAll();

    const detailModal = document.getElementById("detail-modal");
    if (detailModal && detailModal.classList.contains("active")) {
      detailModal.classList.remove("active");
      state.currentDetailId = null;
      document.body.classList.remove("modal-open");
    }

    populateFilterDropdowns();
    applyFilters();
    showToast(`문서 [${id}] 기록이 완전히 삭제되었습니다.`, "danger");
  }
};

// Apply Filters to Data
function applyFilters() {
  const { search, resort, dept, category, victimType, severity, status, period, zone, reportStatus, startDate, endDate, from, to } = state.filters || {};
  const refDate = getSystemReferenceDate();
  const todayStart = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate(), 0, 0, 0, 0);
  const todayEnd = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate(), 23, 59, 59, 999);

  state.filteredIncidents = (state.incidents || []).filter(item => {
    const itemDept = getIncidentDept(item);
    const incidentCategory = getIncidentCategory(item);
    const itemLoc = getIncidentLocation(item);
    const itemVictim = getIncidentVictim(item);

    if (search) {
      const targetStr = `${item?.id || ''} ${item?.title || ''} ${itemLoc} ${item?.description || ''} ${item?.victimName || ''} ${item?.manager || ''} ${item?.resort || item?.businessUnit || ''} ${itemDept} ${item?.faultRatio || ''}`.toLowerCase();
      if (!targetStr.includes(search)) return false;
    }

    if (resort && resort !== "all" && item?.resort !== resort && item?.businessUnit !== resort) {
      return false;
    }

    if (dept && dept !== "all" && itemDept !== dept) {
      return false;
    }

    if (category && category !== "all") {
      if (category.startsWith("기타 외") || (category === "기타" && state.categoryChartMeta && state.categoryChartMeta.clickedIsOther)) {
        // 상위 TOP N에 포함되지 않은 나머지 모든 세부 사고유형들
        const topList = state.categoryChartMeta?.topCategories || [];
        if (topList.includes(incidentCategory)) {
          return false;
        }
      } else if (incidentCategory !== category) {
        return false;
      }
    }

    // 신설: 피해자 세부 분류 필터링 (임직원 / 캐디 / 고객)
    if (victimType && victimType !== "all") {
      const vInfo = classifyVictim(item);
      if (vInfo.category !== victimType) {
        return false;
      }
    }

    // [신규] 산재조사표 필터링 (해당 없음 / 제출예정 / 제출완료)
    if (reportStatus && reportStatus !== "all") {
      let r = String(item.reportStatus || item.industrialAccidentReport || "해당 없음").trim();
      if (r === "해당없음") r = "해당 없음";
      if (r !== reportStatus) {
        return false;
      }
    }

    const itemZone = item?.zone || inferZoneFromLocation(itemLoc, itemDept, item?.resort) || "기타";
    if (zone && zone !== "all" && itemZone !== zone) {
      return false;
    }

    if (severity && severity !== "all") {
      if (!item?.severity || (!item.severity.includes(severity) && item.severity !== severity)) {
        return false;
      }
    }

    if (status && status !== "all" && item?.status !== status) {
      return false;
    }

    // 전역 날짜 파싱 기반 엄격한 기간 필터링
    if (period && period !== "all") {
      const parsedDate = parseIncidentDate(item);
      if (!parsedDate) return false; // 파싱 실패 시 무조건 제외

      const time = parsedDate.getTime();

      if (period === "7d") {
        const d7Start = new Date(todayStart.getTime() - 6 * 24 * 60 * 60 * 1000);
        if (time < d7Start.getTime() || time > todayEnd.getTime()) return false;
      } else if (period === "30d") {
        const d30Start = new Date(todayStart.getTime() - 29 * 24 * 60 * 60 * 1000);
        if (time < d30Start.getTime() || time > todayEnd.getTime()) return false;
      } else if (period === "1m" || period === "month") {
        const m1Start = new Date(refDate.getFullYear(), refDate.getMonth() - 1, refDate.getDate(), 0, 0, 0, 0);
        if (time < m1Start.getTime() || time > todayEnd.getTime()) return false;
      } else if (period === "90d" || period === "3m") {
        const d90Start = new Date(todayStart.getTime() - 89 * 24 * 60 * 60 * 1000);
        if (time < d90Start.getTime() || time > todayEnd.getTime()) return false;
      } else if (period === "year" || period === "2026") {
        if (parsedDate.getFullYear() !== 2026) return false;
      } else if (/^\d{4}$/.test(period)) {
        if (parsedDate.getFullYear() !== parseInt(period, 10)) return false;
      }
    }

    // 직접 기간 지정 (startDate ~ endDate 또는 from ~ to)
    const filterStartStr = startDate || from;
    const filterEndStr = endDate || to;
    if (filterStartStr || filterEndStr) {
      const parsedDate = parseIncidentDate(item);
      if (!parsedDate) return false;

      const time = parsedDate.getTime();

      if (filterStartStr) {
        const pStart = parseIncidentDate(filterStartStr);
        const startTime = pStart
          ? new Date(pStart.getFullYear(), pStart.getMonth(), pStart.getDate(), 0, 0, 0, 0).getTime()
          : new Date(`${filterStartStr}T00:00:00`).getTime();
        if (!isNaN(startTime) && time < startTime) return false;
      }

      if (filterEndStr) {
        const pEnd = parseIncidentDate(filterEndStr);
        const endTime = pEnd
          ? new Date(pEnd.getFullYear(), pEnd.getMonth(), pEnd.getDate(), 23, 59, 59, 999).getTime()
          : new Date(`${filterEndStr}T23:59:59.999`).getTime();
        if (!isNaN(endTime) && time > endTime) return false;
      }
    }

    return true;
  });

  sortFilteredIncidents();
  updateSortHeaderUI();
  updateDrilldownTag();
  renderActiveFilterChips();
  renderAll();
}

// Render All Components
function renderAll() {
  try { renderKPIs(); } catch (e) { console.error("renderKPIs error:", e); }
  try { renderCharts(); } catch (e) { console.error("renderCharts error:", e); }
  try { renderTable(); } catch (e) { console.error("renderTable error:", e); }
}

// Render KPIs: 핵심 4대 관리 지표 체계 (필터 조건에 따른 동적 연동 탑재)
function renderKPIs() {
  try {
    const all = (state.incidents && state.incidents.length > 0)
      ? state.incidents
      : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);
    const totalAll = all.length;

    // [요구사항 1] 상단 4대 요약 카드(KPI) 계산 기준을 'filteredIncidents'로 일원화
    const isFiltered = Boolean(
      (state.filteredIncidents && state.filteredIncidents.length !== totalAll) ||
      (state.filters && (
        (state.filters.period && state.filters.period !== "all") ||
        (state.filters.resort && state.filters.resort !== "all") ||
        (state.filters.dept && state.filters.dept !== "all") ||
        (state.filters.category && state.filters.category !== "all") ||
        (state.filters.victimType && state.filters.victimType !== "all") ||
        (state.filters.severity && state.filters.severity !== "all") ||
        (state.filters.status && state.filters.status !== "all") ||
        (state.filters.zone && state.filters.zone !== "all") ||
        (state.filters.reportStatus && state.filters.reportStatus !== "all") ||
        state.filters.startDate || state.filters.endDate || state.filters.from || state.filters.to || state.filters.search || state.filters.searchQuery
      ))
    );

    const targetList = (state.filteredIncidents && Array.isArray(state.filteredIncidents)) ? state.filteredIncidents : all;
    const currentCount = targetList.length;

    // 1) [카드 1] 총 사고 발생 건수 (filteredIncidents.length 기준)
    const elTotal = document.getElementById("kpiTotalIncidents") || document.getElementById("kpiTotalIncidentCount") || document.getElementById("kpi-total");
    if (elTotal) elTotal.innerText = `${currentCount.toLocaleString()}건`;

    const elSubTotal = document.getElementById("kpi-sub-total");
    if (elSubTotal) {
      if (isFiltered) {
        let periodName = "선택 기간 발생 건수";
        if (state.filters?.period === "year" || state.filters?.period === "2026") periodName = "2026년 (선택 기간 발생 건수)";
        else if (state.filters?.period === "7d") periodName = "최근 7일 (선택 기간 발생 건수)";
        else if (state.filters?.period === "30d") periodName = "최근 30일 (선택 기간 발생 건수)";
        else if (state.filters?.period === "90d" || state.filters?.period === "3m") periodName = "최근 3개월 (선택 기간 발생 건수)";
        elSubTotal.innerHTML = `<span>📅 ${periodName}</span>`;
      } else {
        elSubTotal.innerHTML = `<span>📊 전체 누적 건수 (${totalAll.toLocaleString()}건)</span>`;
      }
    }

    // 2) [카드 2] 직원 안전사고 (필터 적용 시 '선택 기간 직원 안전사고', 전체일 때 '2026년 직원 안전사고')
    const currentYear = new Date().getFullYear();
    const elEmpTitle = document.getElementById("kpi-title-employee");
    if (elEmpTitle) {
      elEmpTitle.textContent = isFiltered ? "선택 기간 직원 안전사고" : `${currentYear}년 직원 안전사고`;
    }

    const cardEmployee = document.getElementById("kpiEmployee2026Card") || document.getElementById("kpi-card-employee");
    if (cardEmployee) {
      cardEmployee.title = isFiltered 
        ? "클릭 시 선택 기간 직원 및 캐디 안전사고 목록 모달이 열립니다"
        : `클릭 시 ${currentYear}년 직원 및 근로자 안전사고 목록 모달이 열립니다`;
    }

    const empKeywords = ["직원", "임직원", "캐디", "진행원", "근로자", "실습생", "일용직", "협력사"];
    const listEmp = targetList.filter(x => {
      if (!x) return false;
      const p = parseIncidentDate(x);
      const isCurrentYear = (x.year === currentYear) || (p && p.getFullYear() === currentYear) || String(x.date || x.occurredAt || "").includes(String(currentYear));
      // 전체(미필터링) 상태일 때는 당해 연도(2026년) 기준 집계, 필터 적용 시 선택 범위(filteredIncidents) 기준 전체 집계
      if (!isFiltered && !isCurrentYear) return false;

      // [원칙 준수] 본문(텍스트) 검색 금지: 오직 victimType 또는 E열 구분2 헤더 기준 직접 매핑
      const rawType = String(x.victimType || x['구분2'] || x.victim || "").replace(/[\r\n]+/g, " ").trim();
      return empKeywords.some(kw => rawType.includes(kw));
    });
    const countEmp = listEmp.length;
    const elEmp = document.getElementById("kpi2026EmployeeCount") || document.getElementById("kpiEmployee2026Count");
    if (elEmp) elEmp.innerText = `${countEmp.toLocaleString()}건`;
    const elSubEmp = document.getElementById("kpi-sub-employee");
    if (elSubEmp) {
      const empRate = currentCount > 0 ? ((countEmp / currentCount) * 100).toFixed(1) : "0.0";
      elSubEmp.innerText = isFiltered ? `⛑️ 선택 범위 직원/캐디 (${empRate}%)` : `⛑️ ${currentYear}년 직원/캐디 집계`;
    }

    // 3) [카드 3] 골프장(4대 CC) 사고 (밸리, 성문안, 힐스, 월송리 - 안전 탐색 Safe Navigation 적용)
    const ccKeywords = ["밸리", "성문안", "힐스", "월송리"];
    const listGolfCC = targetList.filter(x => {
      if (!x) return false;
      const isCC = ccKeywords.some(cc => 
        x.dept?.includes(cc) || 
        x.businessUnit?.includes(cc) || 
        x.department?.includes(cc) || 
        x.division?.includes(cc) ||
        x.resort?.includes(cc) || 
        x.place?.includes(cc) || 
        x.location?.includes(cc) || 
        x.locationDetail?.includes(cc) ||
        x.title?.includes(cc) ||
        (typeof getIncidentDept === "function" && getIncidentDept(x)?.includes(cc))
      );
      if (isCC) return true;
      const loc = (String(x.place || x.location || x.locationDetail || "") + " " + String(x.zone || "")).toLowerCase();
      if (loc.includes("코스") || loc.includes("홀") || loc.includes("그린") || loc.includes("티잉") || loc.includes("카트도로")) return true;
      return false;
    });
    const countGolf = listGolfCC.length;
    const rateGolf = currentCount > 0 ? ((countGolf / currentCount) * 100).toFixed(1) : "0.0";
    const elGolf = document.getElementById("kpiGolfCCCount");
    if (elGolf) elGolf.innerText = `${countGolf.toLocaleString()}건`;
    const elSubGolf = document.getElementById("kpi-sub-golf");
    if (elSubGolf) elSubGolf.innerText = `⛳ 밸리·힐스·성문안·월송리 (${rateGolf}%)`;

    // 4) [카드 4] 당사 지급 / 보상 비용 (현재 범위 내 1원 이상 지급 건 실시간 합산)
    const costItems = targetList.filter(curr => {
      const amt = (curr.insuranceCost !== undefined && curr.insuranceCost !== null && curr.insuranceCost !== "")
        ? Number(curr.insuranceCost)
        : (curr.cost || curr.companyAmount || (typeof getIncidentCost === "function" ? getIncidentCost(curr) : 0));
      return amt > 0;
    });
    const totalCompanyCost = costItems.reduce((acc, curr) => {
      const amt = (curr.insuranceCost !== undefined && curr.insuranceCost !== null && curr.insuranceCost !== "")
        ? Number(curr.insuranceCost)
        : (curr.cost || curr.companyAmount || (typeof getIncidentCost === "function" ? getIncidentCost(curr) : 0));
      return acc + (amt || 0);
    }, 0);
    const costCount = costItems.length;

    const totalCostEl = document.getElementById("kpiTotalCost") || document.getElementById("kpi-total-cost");
    if (totalCostEl) {
      let costText = "0원";
      if (totalCompanyCost >= 100000000) {
        costText = `${(totalCompanyCost / 100000000).toFixed(1)}억원`;
      } else if (totalCompanyCost >= 10000) {
        costText = `${Math.round(totalCompanyCost / 10000).toLocaleString()}만원`;
      } else if (totalCompanyCost > 0) {
        costText = `${totalCompanyCost.toLocaleString()}원`;
      } else {
        costText = "0원";
      }
      totalCostEl.innerHTML = `${costText} <span id="kpi-cost-count" style="font-size: 0.92rem; font-weight: 600; color: #64748b; margin-left: 0.35rem;">(${costCount.toLocaleString()}건)</span>`;
    }

    const elSubCost = document.getElementById("kpi-sub-cost");
    if (elSubCost) {
      elSubCost.innerText = isFiltered ? "💳 선택 범위 보상/보험 비용" : "💳 기간별 상세 분석";
    }

    // Legacy fallback elements
    const legacyTotal = document.getElementById("kpi-total");
    if (legacyTotal) legacyTotal.innerText = `${currentCount.toLocaleString()}건`;
    const elYear = document.getElementById("kpiYearCurrentCount");
    if (elYear) elYear.innerText = `${countEmp.toLocaleString()}건`;
    const elSub2026 = document.getElementById("kpi-sub-2026");
    if (elSub2026) {
      const rate = totalAll > 0 ? ((currentCount / totalAll) * 100).toFixed(1) : "0.0";
      elSub2026.innerHTML = `<span>📅 전체 대비 ${rate}% 점유</span>`;
    }
  } catch (errKPI) {
    console.error("renderKPIs 실행 오류 방어:", errKPI);
  }
}

// Render Charts with Dynamic Top-N Grouping for 500+ Rows
function renderCharts() {
  try {
  const data = (state.filteredIncidents && Array.isArray(state.filteredIncidents))
    ? state.filteredIncidents
    : (state.incidents || []);

  if (typeof Chart === "undefined") {
    console.warn("Chart.js 라이브러리가 로드되지 않았습니다.");
    return;
  }

  // 1. Group by Category (도넛 차트 집계 - COLOR_MAP 고정 색상 및 기타 세부유형 연동)
  const categoryCounts = {};
  data.forEach(item => {
    const incidentCategory = getIncidentCategory(item);
    categoryCounts[incidentCategory] = (categoryCounts[incidentCategory] || 0) + 1;
  });

  const sortedCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
  const maxDisplay = 6;
  const topCategories = sortedCategories.slice(0, maxDisplay);
  const otherCategories = sortedCategories.slice(maxDisplay);
  const otherSum = otherCategories.reduce((sum, item) => sum + item[1], 0);

  const categoryLabels = topCategories.map(c => c[0]);
  const categoryData = topCategories.map(c => c[1]);

  let otherLabel = null;
  if (otherSum > 0) {
    otherLabel = `기타 외 ${otherCategories.length}종`;
    categoryLabels.push(otherLabel);
    categoryData.push(otherSum);
  }

  // 상위 TOP N과 나머지 목록을 state에 보관하여 필터링 시 활용
  state.categoryChartMeta = {
    topCategories: topCategories.map(c => c[0]),
    otherCategories: otherCategories.map(c => c[0]),
    otherLabel: otherLabel,
    clickedIsOther: Boolean(state.categoryChartMeta && state.categoryChartMeta.clickedIsOther && (state.filters.category?.startsWith("기타 외") || state.filters.category === "기타"))
  };

  // 고정 COLOR_MAP을 사용하여 클릭/필터 후에도 고유 색상 유지
  const categoryColors = categoryLabels.map(label => getCategoryColor(label));

  const catCtx = document.getElementById("categoryChart")?.getContext("2d");
  if (catCtx) {
    if (state.charts.categoryChart) {
      state.charts.categoryChart.destroy();
    }

    state.charts.categoryChart = new Chart(catCtx, {
      type: "doughnut",
      data: {
        labels: categoryLabels,
        datasets: [{
          data: categoryData,
          backgroundColor: categoryColors,
          hoverBackgroundColor: categoryColors,
          borderColor: "#ffffff",
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (elements && elements.length > 0) {
            const elementIndex = elements[0].index;
            const clickedCategory = chart.data.labels[elementIndex];
            if (clickedCategory) {
              toggleChartDrilldown("category", clickedCategory);
            }
          } else {
            if (state.filters.category !== "all") {
              toggleChartDrilldown("category", "all");
            }
          }
        },
        plugins: {
          legend: {
            position: "right",
            labels: {
              generateLabels: (chart) => {
                const chartData = chart.data;
                if (chartData.labels.length && chartData.datasets.length) {
                  const total = chartData.datasets[0].data.reduce((a, b) => a + b, 0) || 1;
                  return chartData.labels.map((label, i) => {
                    const val = chartData.datasets[0].data[i];
                    const pct = ((val / total) * 100).toFixed(1);
                    const bg = chartData.datasets[0].backgroundColor[i] || getCategoryColor(label);
                    return {
                      text: `${label} (${val}건, ${pct}%)`,
                      fillStyle: bg,
                      strokeStyle: bg,
                      lineWidth: 1,
                      hidden: isNaN(val) || chart.getDatasetMeta(0).data[i].hidden,
                      index: i
                    };
                  });
                }
                return [];
              },
              color: "#94a3b8",
              font: { family: "Pretendard", size: 11 },
              padding: 8,
              boxWidth: 10,
              boxHeight: 10
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const val = context.raw || 0;
                const pct = ((val / (data.length || 1)) * 100).toFixed(1);
                return ` ${context.label}: ${val}건 (${pct}%) - 클릭 시 드릴다운`;
              }
            }
          }
        },
        cutout: "66%"
      }
    });
  }

  // 2. Group by Dept (🏢 팀/부서별 사고 발생 비중)
  const deptCounts = {};
  data.forEach(item => {
    const dept = getIncidentDept(item) || inferDeptFromIncident(item) || "시설팀";
    deptCounts[dept] = (deptCounts[dept] || 0) + 1;
  });

  const sortedDepts = Object.entries(deptCounts).sort((a, b) => b[1] - a[1]);
  const maxDeptDisplay = 8; // 4대 골프CC(밸리/힐스/성문안/월송리)와 리조트 부서(레저/시설/객실/식음)가 모두 온전히 분리 표기되도록 8개 확장
  const topDepts = sortedDepts.slice(0, maxDeptDisplay);
  const otherDeptSum = sortedDepts.slice(maxDeptDisplay).reduce((sum, item) => sum + item[1], 0);

  const deptLabels = topDepts.map(d => d[0]);
  const deptData = topDepts.map(d => d[1]);

  if (otherDeptSum > 0) {
    deptLabels.push(`기타 외 ${sortedDepts.length - maxDeptDisplay}개팀`);
    deptData.push(otherDeptSum);
  }

  const deptPalette = [
    "#0284c7", // 밸리팀 (Sky Blue)
    "#8b5cf6", // 레저팀 (Purple)
    "#d97706", // 시설팀 (Warm Amber)
    "#059669", // 성문안팀 (Forest Emerald)
    "#4f46e5", // 힐스팀 (Deep Indigo)
    "#0891b2", // 월송리팀 (Cyan)
    "#db2777", // 객실팀 (Rose Pink)
    "#ea580c", // 식음팀 (Vivid Orange)
    "#0d9488", // 골프운영(공통) (Teal)
    "#64748b"  // 기타 (Slate)
  ];

  const deptCtx = document.getElementById("deptChart")?.getContext("2d");
  if (deptCtx) {
    if (state.charts.deptChart) {
      state.charts.deptChart.destroy();
    }

    state.charts.deptChart = new Chart(deptCtx, {
      type: "doughnut",
      data: {
        labels: deptLabels,
        datasets: [{
          data: deptData,
          backgroundColor: deptPalette.slice(0, deptLabels.length),
          borderColor: "#ffffff",
          borderWidth: 2,
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (elements && elements.length > 0) {
            const elementIndex = elements[0].index;
            const clickedDept = chart.data.labels[elementIndex];
            if (clickedDept && !clickedDept.startsWith("기타 외")) {
              toggleChartDrilldown("dept", clickedDept);
            }
          } else {
            if (state.filters.dept && state.filters.dept !== "all") {
              toggleChartDrilldown("dept", "all");
            }
          }
        },
        plugins: {
          legend: {
            position: "right",
            labels: {
              generateLabels: (chart) => {
                const chartData = chart.data;
                if (chartData.labels.length && chartData.datasets.length) {
                  const total = chartData.datasets[0].data.reduce((a, b) => a + b, 0) || 1;
                  return chartData.labels.map((label, i) => {
                    const val = chartData.datasets[0].data[i];
                    const pct = ((val / total) * 100).toFixed(1);
                    const bg = chartData.datasets[0].backgroundColor[i];
                    return {
                      text: `${label} (${val}건, ${pct}%)`,
                      fillStyle: bg,
                      strokeStyle: bg,
                      lineWidth: 1,
                      hidden: isNaN(val) || chart.getDatasetMeta(0).data[i].hidden,
                      index: i
                    };
                  });
                }
                return [];
              },
              color: "#94a3b8",
              font: { family: "Pretendard", size: 11 },
              padding: 8,
              boxWidth: 10,
              boxHeight: 10
            }
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const val = context.raw || 0;
                const total = data.length || 1;
                const pct = ((val / total) * 100).toFixed(1);
                return ` ${context.label}: ${val}건 (${pct}%) - 클릭 시 드릴다운`;
              }
            }
          }
        },
        cutout: "66%"
      }
    });
  }

  // 3. Group by Zone (Top 7) (시설별 건수 - D열 최우선 참조)
    const ZONE_COLOR_MAP = {
    "골프 코스": "#10b981",       // Emerald Green
    "주차장/도로": "#f59e0b",     // Amber
    "레저/야외시설": "#06b6d4",   // Cyan
    "콘도/객실": "#8b5cf6",       // Purple
    "부대/영업시설": "#38bdf8",   // Sky Blue
    "기타 부대시설": "#94a3b8"    // Slate
  };
  const zoneCounts = {};
  data.forEach(item => {
    const z = item?.zone || inferZoneFromLocation(getIncidentLocation(item), getIncidentDept(item), item?.resort || item?.team) || "기타 부대시설";
    zoneCounts[z] = (zoneCounts[z] || 0) + 1;
  });

  const sortedZones = Object.entries(zoneCounts).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const zoneLabels = sortedZones.map(z => z[0]);
  const zoneData = sortedZones.map(z => z[1]);
  const zoneColors = zoneLabels.map(z => ZONE_COLOR_MAP[z] || "#38bdf8");

  const zoneCtx = document.getElementById("zoneChart")?.getContext("2d");
  if (zoneCtx) {
    if (state.charts.zoneChart) {
      state.charts.zoneChart.destroy();
    }

    state.charts.zoneChart = new Chart(zoneCtx, {
      type: "bar",
      data: {
        labels: zoneLabels,
        datasets: [{
          label: "발생 건수",
          data: zoneData,
          backgroundColor: zoneColors,
          hoverBackgroundColor: zoneColors,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: (event, elements, chart) => {
          if (elements && elements.length > 0) {
            const elementIndex = elements[0].index;
            const clickedZone = chart.data.labels[elementIndex];
            if (clickedZone) {
              toggleChartDrilldown("zone", clickedZone);
            }
          } else {
            if (state.filters.zone && state.filters.zone !== "all") {
              toggleChartDrilldown("zone", "all");
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` 발생 건수: ${ctx.raw}건 - 클릭 시 필터링`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#94a3b8", font: { family: "Pretendard", size: 11 } }
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#475569",
              font: { family: "Pretendard", size: 11 }
            },
            grid: { color: "#e2e8f0" }
          }
        }
      }
    });
  }
  } catch (errCharts) {
    console.error("renderCharts 실행 오류 방어:", errCharts);
  }
}

// Update Pagination Controls
window.updatePagination = function(current, total) {
  const paginationControls = document.getElementById("pagination-controls");
  if (!paginationControls) return;

  const cur = current || state.currentPage || 1;
  const effectiveSize = state.pageSize || pageSize || 10;
  const tot = total !== undefined ? total : Math.max(1, Math.ceil(state.filteredIncidents.length / effectiveSize));

  paginationControls.innerHTML = buildPaginationButtons(cur, tot);
};


// ==========================================================================
// Incident Sorting & Header Toggle Logic (단일 소스 기반 정렬 시스템)
// ==========================================================================
let currentSort = {
  key: "docNo",     // 'docNo' (문서번호) 또는 'occurDate' (발생일시)
  order: "desc"     // 'desc' (최신순) 또는 'asc' (오름차순)
};
state.sort = currentSort;
window.currentSort = currentSort;

function parseIncidentTimestamp(item) {
  if (!item) return 0;
  const p = parseIncidentDate(item);
  return p ? p.getTime() : 0;
}
window.parseIncidentTimestamp = parseIncidentTimestamp;

function compareIncidents(a, b, key = currentSort.key, order = currentSort.order) {
  const normKey = (key === "id" || key === "docNo") ? "docNo" : "occurDate";

  if (normKey === "docNo") {
    // 1순위: 문서번호 문자열 자연 비교 (예: 2026-H... vs 2023-H...)
    const idA = String(a?.docNo || a?.documentNumber || a?.id || "").trim();
    const idB = String(b?.docNo || b?.documentNumber || b?.id || "").trim();
    let cmp = idA.localeCompare(idB, undefined, { numeric: true, sensitivity: "base" });
    if (cmp === 0) {
      cmp = parseIncidentTimestamp(a) - parseIncidentTimestamp(b);
    }
    return order === "desc" ? -cmp : cmp;
  } else {
    // 1순위: 발생일시(occurDate) 정밀 타임스탬프 비교
    const timeA = parseIncidentTimestamp(a);
    const timeB = parseIncidentTimestamp(b);
    let cmp = timeA - timeB;
    if (cmp === 0) {
      const idA = String(a.id || a.docNo || "").trim();
      const idB = String(b.id || b.docNo || "").trim();
      cmp = idA.localeCompare(idB, undefined, { numeric: true, sensitivity: "base" });
    }
    return order === "desc" ? -cmp : cmp;
  }
}

function sortIncidentsList(list, key = currentSort.key, order = currentSort.order) {
  if (!Array.isArray(list)) return;
  list.sort((a, b) => compareIncidents(a, b, key, order));
}

function sortFilteredIncidents() {
  sortIncidentsList(state.filteredIncidents, currentSort.key, currentSort.order);
}

function updateSortHeaderUI() {
  const thDocNo = document.getElementById("th-doc-no");
  const thOccurDate = document.getElementById("th-occur-date");
  const iconDocNo = document.getElementById("sort-icon-id");
  const iconOccurDate = document.getElementById("sort-icon-date");

  const isDocNo = (currentSort.key === "docNo" || currentSort.key === "id");
  const arrow = currentSort.order === "asc" ? "▲" : "▼";

  if (thDocNo && iconDocNo) {
    if (isDocNo) {
      thDocNo.classList.add("active");
      iconDocNo.textContent = arrow;
      iconDocNo.style.opacity = "1";
      iconDocNo.style.color = "#2563eb";
      iconDocNo.style.fontWeight = "800";
    } else {
      thDocNo.classList.remove("active");
      iconDocNo.textContent = "▼";
      iconDocNo.style.opacity = "0.2";
      iconDocNo.style.color = "#94a3b8";
      iconDocNo.style.fontWeight = "400";
    }
  }

  if (thOccurDate && iconOccurDate) {
    if (!isDocNo) {
      thOccurDate.classList.add("active");
      iconOccurDate.textContent = arrow;
      iconOccurDate.style.opacity = "1";
      iconOccurDate.style.color = "#2563eb";
      iconOccurDate.style.fontWeight = "800";
    } else {
      thOccurDate.classList.remove("active");
      iconOccurDate.textContent = "▼";
      iconOccurDate.style.opacity = "0.2";
      iconOccurDate.style.color = "#94a3b8";
      iconOccurDate.style.fontWeight = "400";
    }
  }
}

// Global Sort Toggle Handler (단일 분기 처리)
window.handleSortToggle = function(targetKey) {
  const normKey = (targetKey === "id" || targetKey === "docNo") ? "docNo" : "occurDate";

  if (currentSort.key !== normKey) {
    // 키가 변경된 경우: 항상 'desc(최신 우선)'로 초기화
    currentSort.key = normKey;
    currentSort.order = "desc";
  } else {
    // 이미 해당 키였던 경우: desc <-> asc 토글
    currentSort.order = currentSort.order === "desc" ? "asc" : "desc";
  }

  state.sort = currentSort;
  window.currentSort = currentSort;

  sortFilteredIncidents();
  updateSortHeaderUI();
  state.currentPage = 1;
  renderTable();
};
window.sortIncidentsList = sortIncidentsList;
window.sortFilteredIncidents = sortFilteredIncidents;
window.compareIncidents = compareIncidents;

// Render Table with Pagination & Action Column
function renderTable() {
  const tableBody = document.getElementById("incident-table-body");
  const countBadge = document.getElementById("table-count-badge");
  const pageInfo = document.getElementById("page-info");

  if (!tableBody) return;

  const total = state.filteredIncidents.length;
  if (countBadge) countBadge.innerText = `${total.toLocaleString()}건`;

  const effectivePageSize = state.pageSize || pageSize || 10;
  const selectEl = document.getElementById("pageSizeSelect");
  if (selectEl && selectEl.value !== String(effectivePageSize)) {
    selectEl.value = String(effectivePageSize);
  }

  if (total === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="11" style="text-align: center; padding: 3rem 1rem; color: #64748b;">
          <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-weight: 600; color: #334155;">조건에 부합하는 사고 기록이 없습니다.</div>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem;">검색어나 필터 조건을 재설정해 보세요.</div>
        </td>
      </tr>
    `;
    if (pageInfo) pageInfo.innerText = "0 - 0 / 총 0건";
    window.updatePagination(1, 0);
    return;
  }

  const totalPages = Math.max(1, Math.ceil(total / effectivePageSize));
  if (state.currentPage > totalPages) state.currentPage = 1;
  if (state.currentPage < 1) state.currentPage = 1;

  const startIndex = (state.currentPage - 1) * effectivePageSize;
  const endIndex = Math.min(startIndex + effectivePageSize, total);
  const pageItems = state.filteredIncidents.slice(startIndex, endIndex);

  if (pageInfo) {
    pageInfo.innerText = `${startIndex + 1} - ${endIndex} / 총 ${total.toLocaleString()}건`;
  }

  tableBody.innerHTML = pageItems.map((item, index) => {
    const globalIndex = startIndex + index + 1;

    let statusClass = "badge-status-resolved";
    if (item.status === "조사/진행중") statusClass = "badge-status-investigating";
    if (item.status === "보험/보상진행") statusClass = "badge-status-insurance";
    if (item.status === "접수대기") statusClass = "badge-status-pending";

    let severityClass = "badge-severity-minor";
    if (item.severity && (item.severity.includes("병원") || item.severity.includes("중등"))) severityClass = "badge-severity-moderate";
    if (item.severity && (item.severity.includes("중상") || item.severity.includes("중대"))) severityClass = "badge-severity-major";

    const vInfo = classifyVictim(item);
    const teamName = String(item.team || item['구분1'] || item.resort || "미분류").replace(/[\r\n]+/g, " ").trim();
    const deptName = String(item.department || item['부문/부서'] || item.division || (item.dept && item.dept !== teamName ? item.dept : "") || "").replace(/[\r\n]+/g, " ").trim();
    const displayLocation = item.displayLocation || ((deptName && deptName !== teamName) ? `${teamName} (${deptName})` : teamName);

    return `
      <tr onclick="openIncidentDetail('${escapeHtml(String(item.docNo || item.id))}')">
        <td class="no-cell" style="text-align: center;">${globalIndex}</td>
        <td class="id-cell min-w-[155px] whitespace-nowrap font-mono text-[12px]" style="min-width: 155px; width: 155px; white-space: nowrap; font-family: monospace; font-size: 12px; font-weight: 700; color: #2563eb;">${escapeHtml(item.docNo || item.documentNumber || item.id || "-")}</td>
        <td class="date-cell" style="font-size: 0.83rem; color: #475569; white-space: nowrap;">${escapeHtml(item.date)}</td>
        <td class="dept-cell" style="font-weight: 600; color: #0f172a; font-size: 0.84rem;">
          ${escapeHtml(displayLocation)}
        </td>
        <td style="text-align: center;">
          <span class="badge ${vInfo.badgeClass}" style="${vInfo.inlineStyle}" title="${escapeHtml(item.victimName && item.victimName !== '익명' ? `${vInfo.label} (${item.victimName})` : vInfo.label)}">${escapeHtml(vInfo.label)}</span>
        </td>
        <td class="location-cell" style="font-size: 0.83rem; color: #334155;">
          <span class="location-primary" style="font-weight: 600;">${escapeHtml(item.zone || "")}</span>
          <span class="location-sub" style="color: #64748b; font-size: 0.78rem;">${escapeHtml(item.locationDetail || "")}</span>
        </td>
        <td>
          <span class="badge badge-category" style="font-size: 0.75rem;">${escapeHtml(getIncidentCategory(item))}</span>
        </td>
        <td class="title-cell" title="${escapeHtml(item.title || "")}" style="font-weight: 600; color: #0f172a;">
          ${escapeHtml(item.title || "-")}
        </td>
        <td style="text-align: center; white-space: nowrap;">
          ${getReportStatusBadge(item.reportStatus || item.industrialAccidentReport || "해당 없음")}
        </td>
        <td style="text-align: center;">
          <span class="badge ${statusClass}">
            <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:currentColor;"></span>
            ${escapeHtml(item.status)}
          </span>
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn-table-del" title="사고 삭제" onclick="event.stopPropagation(); deleteIncident('${item.id}')">
            삭제
          </button>
        </td>
      </tr>
    `;
  }).join("");

  window.updatePagination(state.currentPage, totalPages);
}

// Build Pagination with Page Windowing
function buildPaginationButtons(current, total) {
  if (total <= 1) return "";

  let html = "";
  const maxButtons = 7;
  let start = Math.max(1, current - 3);
  let end = Math.min(total, start + maxButtons - 1);

  if (end - start < maxButtons - 1) {
    start = Math.max(1, end - maxButtons + 1);
  }

  if (current > 1) {
    html += `<button class="page-btn" onclick="goToPage(${current - 1})" title="이전">&laquo;</button>`;
  }

  if (start > 1) {
    html += `<button class="page-btn" onclick="goToPage(1)">1</button>`;
    if (start > 2) html += `<span style="color:#64748b; padding: 0.3rem;">...</span>`;
  }

  for (let p = start; p <= end; p++) {
    html += `<button class="page-btn ${p === current ? 'active' : ''}" onclick="goToPage(${p})">${p}</button>`;
  }

  if (end < total) {
    if (end < total - 1) html += `<span style="color:#64748b; padding: 0.3rem;">...</span>`;
    html += `<button class="page-btn" onclick="goToPage(${total})">${total}</button>`;
  }

  if (current < total) {
    html += `<button class="page-btn" onclick="goToPage(${current + 1})" title="다음">&raquo;</button>`;
  }

  return html;
}

// Go to Page
window.goToPage = function(page) {
  state.currentPage = page;
  renderTable();
  const tableEl = document.querySelector(".table-section");
  if (tableEl) tableEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

// Open Incident Detail Modal
function openIncidentDetail(id, originContext) {
  if (originContext !== undefined) {
    detailModalOrigin = originContext;
  }
  const item = state.incidents.find(i => String(i.id) === String(id) || String(i.docNo) === String(id) || String(i.documentNumber) === String(id));
  if (!item) return;

  state.currentDetailId = item.id;
  switchDetailMode(false);

  const modal = document.getElementById("detail-modal");
  if (!modal) return;

  const docNumber = String(item.docNo || item.documentNumber || item.id || "-").trim();
  const locDetail = String(item.locationDetail || item.place || item.location || "현장").trim();
  const catType = getIncidentCategory(item);
  const formattedTitle = `[${docNumber}] [${locDetail}] ${catType} 사고`;

  const dtlIdEl = document.getElementById("dtl-id");
  if (dtlIdEl) dtlIdEl.innerText = docNumber;
  const dtlDocIdEl = document.getElementById("dtl-doc-id");
  if (dtlDocIdEl) dtlDocIdEl.innerText = docNumber;
  const dtlTitleEl = document.getElementById("dtl-title");
  if (dtlTitleEl) dtlTitleEl.innerText = formattedTitle;
  document.getElementById("dtl-date").innerText = item.date;
  document.getElementById("dtl-resort").innerText = `${item.resort} ${item.dept ? `(${item.dept})` : ''}`;
  document.getElementById("dtl-location").innerText = `${item.zone} - ${item.locationDetail}`;
  document.getElementById("dtl-category").innerText = getIncidentCategory(item);
  document.getElementById("dtl-victim").innerText = `${item.victimType || '고객'} - ${item.victimName || '미상'}`;
  document.getElementById("dtl-severity").innerText = item.severity;
  document.getElementById("dtl-manager").innerText = item.manager || "-";

  const companyPaid = parseNumericCost(item.companyAmount !== undefined ? item.companyAmount : item.cost);
  const totalAmt = parseNumericCost(item.totalAmount);
  const personalAmt = parseNumericCost(item.personalAmount);
  const hasValidFault = item.faultRatio && item.faultRatio !== "과실 미산정" && item.faultRatio !== "-" && item.faultRatio.trim() !== "";
  const hasCostData = (companyPaid > 0 || totalAmt > 0 || personalAmt > 0 || hasValidFault);

  const compGrid = document.getElementById("dtl-compensation-grid");
  const compEmpty = document.getElementById("dtl-compensation-empty");

  if (hasCostData) {
    if (compGrid) compGrid.style.display = "grid";
    if (compEmpty) compEmpty.style.display = "none";
    document.getElementById("dtl-fault-ratio").innerText = item.faultRatio || "과실 미산정";
    document.getElementById("dtl-total-amount").innerText = totalAmt > 0 ? formatCurrency(totalAmt) : "0원";
    document.getElementById("dtl-company-amount").innerText = companyPaid > 0 ? formatCurrency(companyPaid) : "0원";
    document.getElementById("dtl-personal-amount").innerText = personalAmt > 0 ? formatCurrency(personalAmt) : "0원";
  } else {
    if (compGrid) compGrid.style.display = "none";
    if (compEmpty) {
      compEmpty.style.display = "flex";
      compEmpty.innerText = "등록된 비용/보상 내역 없음";
    }
  }

  const statusSelect = document.getElementById("dtl-status-select");
  if (statusSelect) {
    statusSelect.value = item.status;
    statusSelect.onchange = (e) => {
      const newStatus = e.target.value;
      IncidentStorage.update(item.id, { status: newStatus });
      item.status = newStatus;
      applyFilters();
      showToast(`문서 [${item.id}]의 상태가 '${newStatus}'(으)로 변경되었습니다.`, "success");
    };
  }

  document.getElementById("dtl-desc").innerText = item.description || "상세 경위 내용 없음";
  document.getElementById("dtl-action").innerText = item.actionTaken || "조치 내역 없음";
  document.getElementById("dtl-preventive").innerText = item.preventiveMeasure || "예방 대책 기록 없음";

  // 신설: 특이사항 및 산업재해조사표 행정 상태 연동
  // 신설: 특이사항 및 산업재해조사표 행정 상태 연동
  let reportStatus = String(item.reportStatus || item.industrialAccidentReport || "해당 없음").trim();
  if (reportStatus === "해당없음") reportStatus = "해당 없음";

  const reportBadgeEl = document.getElementById("dtl-report-status-badge");
  if (reportBadgeEl) {
    reportBadgeEl.textContent = `산재조사표: ${reportStatus}`;
    reportBadgeEl.className = "badge " + (
      reportStatus === "제출완료" ? "badge-report-complete" :
      reportStatus === "제출예정" ? "badge-report-planned" :
      "badge-report-none"
    );
  }

  const dtlReportStatusSelect = document.getElementById("dtl-report-status-select");
  if (dtlReportStatusSelect) {
    dtlReportStatusSelect.value = reportStatus;
    dtlReportStatusSelect.onchange = (e) => {
      const newReportStatus = e.target.value;
      IncidentStorage.update(item.id, { reportStatus: newReportStatus, industrialAccidentReport: newReportStatus });
      item.reportStatus = newReportStatus;
      item.industrialAccidentReport = newReportStatus;
      if (reportBadgeEl) {
        reportBadgeEl.textContent = `산재조사표: ${newReportStatus}`;
        reportBadgeEl.className = "badge " + (
          newReportStatus === "제출완료" ? "badge-report-complete" :
          newReportStatus === "제출예정" ? "badge-report-planned" :
          "badge-report-none"
        );
      }
      const metaReportEl = document.getElementById("dtl-meta-report-status");
      if (metaReportEl) {
        metaReportEl.innerHTML = getReportStatusBadge(newReportStatus);
      }
      applyFilters();
      showToast(`문서 [${docNumber}]의 산재조사표 상태가 '${newReportStatus}'(으)로 변경되었습니다.`, "success");
    };
  }

  const metaReportEl = document.getElementById("dtl-meta-report-status");
  if (metaReportEl) {
    metaReportEl.innerHTML = getReportStatusBadge(reportStatus);
  }

  const specialNotesEl = document.getElementById("dtl-special-notes");
  if (specialNotesEl) {
    specialNotesEl.innerText = item.specialNotes || "등록된 특이사항 및 산재 행정 내역이 없습니다.";
  }

  // 신설: 첨부파일 및 증빙 자료 목록 연동
  const attCountEl = document.getElementById("dtl-attachment-count");
  const attListEl = document.getElementById("dtl-attachment-list");
  const attachments = Array.isArray(item.attachments) ? item.attachments : [];
  if (attCountEl) attCountEl.textContent = `${attachments.length}건`;

  if (attListEl) {
    if (attachments.length === 0) {
      attListEl.innerHTML = `
        <div style="color: #64748b; font-size: 0.84rem; padding: 0.75rem 0.5rem; background: #f8fafc; border-radius: 6px; border: 1px dashed #cbd5e1; text-align: center;">
          📎 등록된 첨부파일 또는 증빙 자료가 없습니다.
        </div>
      `;
    } else {
      attListEl.innerHTML = attachments.map(att => `
        <div class="attachment-item-card">
          <div class="attachment-item-left">
            <span class="attachment-item-icon">${getFileIcon(att.name)}</span>
            <div style="overflow: hidden;">
              <div class="attachment-item-name" title="${escapeHtml(att.name)}">${escapeHtml(att.name)}</div>
              <div class="attachment-item-meta">${formatFileSize(att.size)} • ${escapeHtml(att.name.split('.').pop().toUpperCase())}</div>
            </div>
          </div>
          <div class="attachment-actions">
            <button type="button" class="btn-att-preview" onclick="openFilePreviewById('${att.id}')" title="미리보기">
              👁️ 미리보기
            </button>
            <a href="${att.data}" download="${escapeHtml(att.name)}" class="btn-att-download" title="원본 파일 다운로드">
              💾 다운로드
            </a>
          </div>
        </div>
      `).join("");
    }
  }

  const timelineEl = document.getElementById("dtl-timeline");
  if (timelineEl) {
    if (item.timeline && item.timeline.length > 0) {
      timelineEl.innerHTML = item.timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-time">${escapeHtml(t.time)}</div>
          <div class="timeline-note">${escapeHtml(t.note)}</div>
        </div>
      `).join("");
    } else {
      timelineEl.innerHTML = `<div style="color:#64748b; font-size:0.85rem;">기록된 타임라인이 없습니다.</div>`;
    }
  }

  modal.classList.add("active");
  document.body.classList.add("modal-open");
}
window.openIncidentDetail = openIncidentDetail;

// Handle New Incident Form Submission
function handleRegisterSubmit(e) {
  e.preventDefault();

  const resort = document.getElementById("reg-resort").value.trim() || "IPARK 리조트";
  const regDeptEl = document.getElementById("reg-dept");
  const dept = regDeptEl ? regDeptEl.value : "밸리팀";
  const dateRaw = document.getElementById("reg-date").value;
  const zone = document.getElementById("reg-zone").value;
  const locationDetail = document.getElementById("reg-location-detail").value.trim();
  const category = document.getElementById("reg-category").value.trim() || "기타";
  const severity = document.getElementById("reg-severity").value;
  const victimType = document.getElementById("reg-victim-type").value.trim() || "고객";
  const victimName = document.getElementById("reg-victim-name").value.trim() || "익명";
  const title = document.getElementById("reg-title").value.trim();
  const description = document.getElementById("reg-desc").value.trim();
  const actionTaken = document.getElementById("reg-action").value.trim();

  const faultRatio = document.getElementById("reg-fault-ratio").value.trim() || "과실 미산정";
  const totalAmount = parseNumericCost(document.getElementById("reg-total-amount").value);
  const companyAmount = parseNumericCost(document.getElementById("reg-company-amount").value);
  const personalAmount = parseNumericCost(document.getElementById("reg-personal-amount").value);

  const preventiveMeasure = document.getElementById("reg-preventive").value.trim();
  const manager = document.getElementById("reg-manager").value.trim();

  // 신설: 산재조사표 제출 여부, 특이사항, 첨부파일
  let reportStatus = document.getElementById("reg-report-status") ? document.getElementById("reg-report-status").value : "해당 없음";
  if (reportStatus === "해당없음") reportStatus = "해당 없음";
  const specialNotes = document.getElementById("reg-special-notes") ? document.getElementById("reg-special-notes").value.trim() : "";
  const attachments = state.regAttachments || [];

  const formattedDate = dateRaw.replace("T", " ");

  // [요구사항 1] 문서번호 입력란 확인 및 자동 채번 fallback 유지
  const docNoInput = document.getElementById("newDocNumber");
  const customDocNo = docNoInput ? docNoInput.value.trim() : "";
  const newId = customDocNo || generateAutoDocNumber(dateRaw);
  const nextNumericId = (state.incidents && state.incidents.length > 0)
    ? Math.max(...state.incidents.map(x => typeof x.id === "number" ? x.id : 0), 0) + 1
    : 1;

  const newIncident = {
    id: nextNumericId,
    docNo: newId,
    documentNumber: newId,
    date: formattedDate,
    category: category,
    type: category,
    incidentType: category,
    '사고유형1': category,
    resort: resort,
    businessUnit: resort,
    dept: dept,
    zone: zone,
    location: locationDetail,
    locationDetail: locationDetail,
    severity: severity,
    victimType: victimType || "고객",
    victimName: victimName || "익명",
    title: title,
    description: description,
    actionTaken: actionTaken,
    preventiveMeasure: preventiveMeasure,
    status: "조사/진행중",
    cost: companyAmount,
    companyAmount: companyAmount,
    '보험금': companyAmount,
    faultRatio: faultRatio || (companyAmount > 0 ? "보험 처리 완료" : "과실 미산정"),
    totalAmount: totalAmount,
    personalAmount: personalAmount,
    manager: manager || dept || "안전관리팀",
    notes: specialNotes,
    specialNotes: specialNotes,
    reportStatus: reportStatus,
    industrialAccidentReport: reportStatus,
    industrialAccidentReport: reportStatus,
    attachments: attachments,
    reportDate: formattedDate.slice(0, 10),
    timeline: [
      { time: formattedDate, note: "신규 사고 발생 접수 및 등록" },
      { time: formattedDate, note: `초동 조치: ${actionTaken || '현장 확인'}` }
    ]
  };

  IncidentStorage.add(newIncident);
  state.incidents = IncidentStorage.getAll();

  state.regAttachments = [];
  renderAttachmentList("reg");

  document.getElementById("register-modal").classList.remove("active");
  document.getElementById("incident-register-form").reset();
  document.body.classList.remove("modal-open");

  populateFilterDropdowns();
  applyFilters();
  showToast(`신규 사고 문서 [${newId}]가 성공적으로 등록되었습니다.`, "success");
}

// Export to CSV Function
function exportToCSV() {
  const data = state.filteredIncidents;
  if (!data || data.length === 0) {
    showToast("내보낼 데이터가 없습니다.", "info");
    return;
  }

  const headers = [
    "No.",
    "문서번호",
    "발생일시",
    "리조트사업장",
    "담당부서",
    "발생구역",
    "세부장소",
    "사고유형",
    "피해정도",
    "피해자구분",
    "피해자명",
    "사고제목",
    "사고경위",
    "초동조치내역",
    "과실비율",
    "총금액(원)",
    "당사지급금액(원)",
    "본인부담금(원)",
    "재발방지대책",
    "처리상태",
    "담당자"
  ];

  const rows = data.map((item, idx) => [
    idx + 1,
    `"${item.id}"`,
    `"${item.date}"`,
    `"${item.resort}"`,
    `"${item.dept || inferDeptFromIncident(item)}"`,
    `"${item.zone}"`,
    `"${(item.locationDetail || '').replace(/"/g, '""')}"`,
    `"${getIncidentCategory(item)}"`,
    `"${item.severity}"`,
    `"${item.victimType || ''}"`,
    `"${item.victimName || ''}"`,
    `"${(item.title || '').replace(/"/g, '""')}"`,
    `"${(item.description || "").replace(/"/g, '""')}"`,
    `"${(item.actionTaken || "").replace(/"/g, '""')}"`,
    `"${(item.faultRatio || "미산정").replace(/"/g, '""')}"`,
    parseNumericCost(item.totalAmount),
    parseNumericCost(item.companyAmount !== undefined ? item.companyAmount : item.cost),
    parseNumericCost(item.personalAmount),
    `"${(item.preventiveMeasure || "").replace(/"/g, '""')}"`,
    `"${item.status}"`,
    `"${item.manager || ""}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `IPARK리조트_안전사고_현황_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast("CSV 파일 다운로드가 완료되었습니다. 엑셀에서 바로 열람 가능합니다.", "success");
}

// Utility: Format Currency
function formatCurrency(amount) {
  const num = parseNumericCost(amount);
  return `${num.toLocaleString()}원`;
}

// Toast Feedback Helper
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  let icon = "ℹ️";
  if (type === "success") icon = "✅";
  if (type === "danger") icon = "🗑️";

  toast.innerHTML = `
    <span>${icon}</span>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Utility: Escape HTML
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Reset All Filters & Search to Default

// Render Active Filter Chips (Tags) in Table Bar
function renderActiveFilterChips() {
  const container = document.getElementById("table-active-filters-bar");
  const chipsList = document.getElementById("table-active-chips");
  if (!container || !chipsList) return;

  const { search, resort, dept, category, victimType, zone, severity, status, period, reportStatus } = state.filters;
  const chips = [];

  if (reportStatus && reportStatus !== "all") {
    chips.push({ key: "reportStatus", label: `산재: ${reportStatus}` });
  }
  if (category && category !== "all") {
    chips.push({ key: "category", label: `유형: ${category}` });
  }
  if (victimType && victimType !== "all") {
    const victimMap = { employee: "대상: 임직원", caddy: "대상: 캐디", customer: "대상: 고객" };
    chips.push({ key: "victim-type", label: victimMap[victimType] || `대상: ${victimType}` });
  }
  if (zone && zone !== "all") {
    chips.push({ key: "zone", label: `구역: ${zone}` });
  }
  if (severity && severity !== "all") {
    chips.push({ key: "severity", label: `피해: ${severity}` });
  }
  if (dept && dept !== "all") {
    chips.push({ key: "dept", label: `부서: ${dept}` });
  }
  if (resort && resort !== "all") {
    chips.push({ key: "resort", label: `사업장: ${resort}` });
  }
  if (status && status !== "all") {
    chips.push({ key: "status", label: `상태: ${status}` });
  }
  if (period && period !== "all") {
    const periodMap = { "7d": "최근 7일", "30d": "최근 30일", "90d": "최근 3개월", "year": "2026년" };
    chips.push({ key: "period", label: `기간: ${periodMap[period] || period}` });
  }
  if (search && search.trim() !== "") {
    chips.push({ key: "search", label: `검색: "${search}"` });
  }

  if (chips.length > 0) {
    container.style.display = "flex";
    chipsList.innerHTML = chips.map(c => `
      <span class="filter-chip" onclick="clearQuickFilter('${c.key}')" title="클릭 시 '${escapeHtml(c.label)}' 조건 해제">
        ${escapeHtml(c.label)}
        <span class="chip-remove">✕</span>
      </span>
    `).join("");
  } else {
    container.style.display = "none";
    chipsList.innerHTML = "";
  }

  // Update .is-active class on quick filter dropdowns
  const tableCat = document.getElementById("table-filter-category");
  if (tableCat) tableCat.classList.toggle("is-active", Boolean(category && category !== "all"));

  const tableVictim = document.getElementById("table-filter-victim-type");
  if (tableVictim) tableVictim.classList.toggle("is-active", Boolean(victimType && victimType !== "all"));

  const tableZone = document.getElementById("table-filter-zone");
  if (tableZone) tableZone.classList.toggle("is-active", Boolean(zone && zone !== "all"));

  const tableSev = document.getElementById("table-filter-severity");
  if (tableSev) tableSev.classList.toggle("is-active", Boolean(severity && severity !== "all"));

  const tableReport = document.getElementById("filter-report-status");
  if (tableReport) tableReport.classList.toggle("is-active", Boolean(reportStatus && reportStatus !== "all"));
}

// Global Single Filter Tag Clear Handler
window.clearQuickFilter = function(key) {
  if (key === "search") {
    state.filters.search = "";
    const searchInput = document.getElementById("search-input");
    if (searchInput) searchInput.value = "";
  } else if (key === "period") {
    state.filters.period = "all";
    document.querySelectorAll(".period-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.period === "all");
    });
  } else if (key === "reportStatus" || key === "report-status") {
    state.filters.reportStatus = "all";
    const reportFilter = document.getElementById("filter-report-status");
    if (reportFilter) reportFilter.value = "all";
  } else if (key === "victim-type" || key === "victimType") {
    state.filters.victimType = "all";
    const topSelect = document.getElementById("filter-victim-type");
    if (topSelect) topSelect.value = "all";
    const tableSelect = document.getElementById("table-filter-victim-type");
    if (tableSelect) tableSelect.value = "all";
  } else {
    state.filters[key] = "all";
    const topSelect = document.getElementById(`filter-${key}`);
    if (topSelect) topSelect.value = "all";
    const tableSelect = document.getElementById(`table-filter-${key}`);
    if (tableSelect) tableSelect.value = "all";
  }
  state.currentPage = 1;
  applyFilters();
  showToast("선택된 필터 조건이 해제되었습니다.", "info");
};

function resetAllFilters() {
  state.filters.search = "";
  state.filters.resort = "all";
  state.filters.dept = "all";
  state.filters.category = "all";
  state.filters.victimType = "all";
  state.filters.severity = "all";
  state.filters.status = "all";
  state.filters.period = "all";
  state.filters.zone = "all";
  state.filters.reportStatus = "all";
  state.filters.startDate = "";
  state.filters.endDate = "";
  state.filters.from = "";
  state.filters.to = "";
  state.currentPage = 1;

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const resortFilter = document.getElementById("filter-resort");
  if (resortFilter) resortFilter.value = "all";

  const deptFilter = document.getElementById("filter-dept");
  if (deptFilter) deptFilter.value = "all";

  const categoryFilter = document.getElementById("filter-category");
  if (categoryFilter) categoryFilter.value = "all";

  const victimFilter = document.getElementById("filter-victim-type");
  if (victimFilter) victimFilter.value = "all";

  const severityFilter = document.getElementById("filter-severity");
  if (severityFilter) severityFilter.value = "all";

  const statusFilter = document.getElementById("filter-status");
  if (statusFilter) statusFilter.value = "all";

  // Table quick filters reset
  const tableCat = document.getElementById("table-filter-category");
  if (tableCat) tableCat.value = "all";
  const tableVictim = document.getElementById("table-filter-victim-type");
  if (tableVictim) tableVictim.value = "all";
  const tableZone = document.getElementById("table-filter-zone");
  if (tableZone) tableZone.value = "all";
  const tableSev = document.getElementById("table-filter-severity");
  if (tableSev) tableSev.value = "all";

  document.querySelectorAll(".period-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.period === "all");
  });

  applyFilters();
}

window.resetAllFilters = resetAllFilters;


// ==========================================================================
// 3. 싱글 페이지 탭 전환 및 다년도·기간 대조 비교 분석 (3대 모드 지원)
// ==========================================================================
state.comparison = {
  mode: "year", // 'year' | 'month' | 'custom'
  chartCategory: null,
  chartMonthly: null
};

window.switchViewTab = function(tabName) {
  const monitoringBtn = document.getElementById("tab-btn-monitoring");
  const comparisonBtn = document.getElementById("tab-btn-comparison");
  const monitoringView = document.getElementById("view-monitoring");
  const comparisonView = document.getElementById("view-comparison");

  if (tabName === "monitoring") {
    if (monitoringBtn) monitoringBtn.classList.add("active");
    if (comparisonBtn) comparisonBtn.classList.remove("active");
    if (monitoringView) monitoringView.style.display = "block";
    if (comparisonView) comparisonView.style.display = "none";
  } else if (tabName === "comparison") {
    if (comparisonBtn) comparisonBtn.classList.add("active");
    if (monitoringBtn) monitoringBtn.classList.remove("active");
    if (monitoringView) monitoringView.style.display = "none";
    if (comparisonView) comparisonView.style.display = "block";

    // [요구사항 4] B 기준 및 월 기본값 2026년 / 현재 월로 세팅
    const selA = document.getElementById("cmp-year-a");
    const selB = document.getElementById("cmp-year-b");
    if (selA && !selA.value) selA.value = "2026";
    if (selB && (!selB.value || selB.value === "2025")) selB.value = "2026";

    const monthYearA = document.getElementById("cmp-month-year-a");
    const monthYearB = document.getElementById("cmp-month-year-b");
    if (monthYearA && !monthYearA.value) monthYearA.value = "2026";
    if (monthYearB && (!monthYearB.value || monthYearB.value === "2025")) monthYearB.value = "2026";

    const curMonth = String(new Date().getMonth() + 1);
    const monthA = document.getElementById("cmp-month-a");
    const monthB = document.getElementById("cmp-month-b");
    if (monthA && (!monthA.value || monthA.value === "5")) monthA.value = curMonth;
    if (monthB && (!monthB.value || monthB.value === "5")) monthB.value = curMonth;

    populateYoyIncidentTypeFilter();
    populateYoyTableBizFilter();
    setTimeout(() => {
      if (typeof window.executeComparison === "function") window.executeComparison();
    }, 50);
  }
};

window.switchCmpMode = function(mode) {
  if (mode === "dateRange") mode = "custom";
  state.comparison.mode = mode;
  state.comparison.currentMode = mode;

  const btnYear = document.getElementById("btn-mode-year");
  const btnMonth = document.getElementById("btn-mode-month");
  const btnCustom = document.getElementById("btn-mode-custom");

  if (btnYear) btnYear.classList.toggle("active", mode === "year");
  if (btnMonth) btnMonth.classList.toggle("active", mode === "month");
  if (btnCustom) btnCustom.classList.toggle("active", mode === "custom");

  const ctrlYearA = document.getElementById("cmp-ctrl-year-a");
  const ctrlMonthA = document.getElementById("cmp-ctrl-month-a");
  const ctrlCustomA = document.getElementById("cmp-ctrl-custom-a");

  const ctrlYearB = document.getElementById("cmp-ctrl-year-b");
  const ctrlMonthB = document.getElementById("cmp-ctrl-month-b");
  const ctrlCustomB = document.getElementById("cmp-ctrl-custom-b");

  if (ctrlYearA) ctrlYearA.style.display = mode === "year" ? "flex" : "none";
  if (ctrlMonthA) ctrlMonthA.style.display = mode === "month" ? "flex" : "none";
  if (ctrlCustomA) ctrlCustomA.style.display = mode === "custom" ? "flex" : "none";

  if (ctrlYearB) ctrlYearB.style.display = mode === "year" ? "flex" : "none";
  if (ctrlMonthB) ctrlMonthB.style.display = mode === "month" ? "flex" : "none";
  if (ctrlCustomB) ctrlCustomB.style.display = mode === "custom" ? "flex" : "none";

  executeComparison();
};

window.setQuickComparison = function(yearA, yearB) {
  window.switchCmpMode("year");
  const selA = document.getElementById("cmp-year-a");
  const selB = document.getElementById("cmp-year-b");
  if (selA) selA.value = yearA;
  if (selB) selB.value = yearB;
  executeComparison();
};

window.resetComparisonFilter = function() {
  window.switchCmpMode("year");
  const selA = document.getElementById("cmp-year-a");
  const selB = document.getElementById("cmp-year-b");
  if (selA) selA.value = "2026";
  if (selB) selB.value = "2026";

  const monthYearA = document.getElementById("cmp-month-year-a");
  const monthYearB = document.getElementById("cmp-month-year-b");
  if (monthYearA) monthYearA.value = "2026";
  if (monthYearB) monthYearB.value = "2026";

  const curMonth = String(new Date().getMonth() + 1);
  const monthA = document.getElementById("cmp-month-a");
  const monthB = document.getElementById("cmp-month-b");
  if (monthA) monthA.value = curMonth;
  if (monthB) monthB.value = curMonth;

  const startA = document.getElementById("cmp-start-a");
  const endA = document.getElementById("cmp-end-a");
  const startB = document.getElementById("cmp-start-b");
  const endB = document.getElementById("cmp-end-b");
  if (startA) startA.value = "2026-01-01";
  if (endA) endA.value = "2026-10-31";
  if (startB) startB.value = "2026-01-01";
  if (endB) endB.value = "2026-10-31";

  const typeFilterEl = document.getElementById("yoyGlobalTypeFilter") || document.getElementById("yoyIncidentTypeFilter");
  if (typeFilterEl) typeFilterEl.value = "all";
  const tableBizSelect = document.getElementById("yoyTableBizSelect");
  if (tableBizSelect) tableBizSelect.value = "";
  const tableSortSelect = document.getElementById("yoyTableSortSelect");
  if (tableSortSelect) tableSortSelect.value = "risk_desc";
  if (state.comparison) {
    state.comparison.openResorts = new Set();
  }
  executeComparison();
  updateToggleAllAccordionButtonUI();
  showToast("비교 분석 필터 조건이 2026년 vs 2026년 (전체 사업장/유형)으로 초기화되었습니다.", "info");
};

// 다년도 비교 분석용 사고 유형 선택 옵션 자동 구성
function populateYoyIncidentTypeFilter() {
  const selectEl = document.getElementById("yoyGlobalTypeFilter") || document.getElementById("yoyIncidentTypeFilter");
  if (!selectEl) return;
  const currentVal = selectEl.value || "all";

  const allIncidents = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);

  const categories = [...new Set(allIncidents.map(i => getIncidentCategory(i)).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, "ko"));

  let html = `<option value="all">전체 사고 유형 (${categories.length}종)</option>`;
  categories.forEach(cat => {
    html += `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`;
  });
  selectEl.innerHTML = html;

  if (categories.includes(currentVal)) {
    selectEl.value = currentVal;
  } else {
    selectEl.value = "all";
  }
}
window.populateYoyIncidentTypeFilter = populateYoyIncidentTypeFilter;

// 세부 항목별 증감 대조표 상단 사업장 필터 옵션 자동 구성
function populateYoyTableBizFilter() {
  const selectEl = document.getElementById("yoyTableBizSelect");
  if (!selectEl) return;
  const currentVal = (selectEl.value || "").trim();

  const allIncidents = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);

  const rawResorts = [...new Set(allIncidents.map(i => (i.resort || "").trim()).filter(Boolean))];

  // 4대 골프CC팀 및 핵심 사업장 우선 정렬
  const priorityList = ["밸리팀", "힐스팀", "성문안팀", "월송리팀", "파크로쉬", "밸리빌리지", "힐스빌리지", "스키장"];
  rawResorts.sort((a, b) => {
    const idxA = priorityList.indexOf(a);
    const idxB = priorityList.indexOf(b);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.localeCompare(b, "ko");
  });

  let html = `<option value="" selected>전체 사업장</option>`;
  rawResorts.forEach(r => {
    html += `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`;
  });
  selectEl.innerHTML = html;

  if (currentVal && currentVal !== "all" && rawResorts.includes(currentVal)) {
    selectEl.value = currentVal;
  } else {
    selectEl.value = "";
  }
}
window.populateYoyTableBizFilter = populateYoyTableBizFilter;

function extractYearAndMonth(item) {
  if (!item) return { year: 0, month: 0, time: 0 };
  const p = parseIncidentDate(item);
  if (!p) return { year: 0, month: 0, time: 0 };
  return {
    year: p.getFullYear(),
    month: p.getMonth() + 1,
    day: p.getDate(),
    time: p.getTime()
  };
}
window.extractYearAndMonth = extractYearAndMonth;

function getIncidentsForCurrentMode(side) {
  const all = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);
  const mode = state.comparison.currentMode || state.comparison.mode || "year";

  if (mode === "year") {
    const selYear = document.getElementById(side === "a" ? "cmp-year-a" : "cmp-year-b");
    const targetY = selYear ? parseInt(selYear.value, 10) : 2026;
    const label = `${targetY}년`;
    const startDate = `${targetY}.01.01`;
    const endDate = `${targetY}.12.31`;
    const startTime = new Date(targetY, 0, 1, 0, 0, 0, 0).getTime();
    const endTime = new Date(targetY, 11, 31, 23, 59, 59, 999).getTime();

    const filtered = all.filter(item => {
      const p = parseIncidentDate(item);
      if (!p) return false;
      const t = p.getTime();
      return t >= startTime && t <= endTime;
    });
    return { data: filtered, label, mode, year: targetY, startDate, endDate, startTime, endTime };
  } else if (mode === "month") {
    const selYear = document.getElementById(side === "a" ? "cmp-month-year-a" : "cmp-month-year-b");
    const selMonth = document.getElementById(side === "a" ? "cmp-month-a" : "cmp-month-b");
    const targetY = selYear ? parseInt(selYear.value, 10) : 2026;
    const currentM = new Date().getMonth() + 1;
    const targetM = selMonth ? parseInt(selMonth.value, 10) : currentM;
    const lastDay = new Date(targetY, targetM, 0).getDate();

    const mm = String(targetM).padStart(2, "0");
    const dd = String(lastDay).padStart(2, "0");
    const startDate = `${targetY}.${mm}.01`;
    const endDate = `${targetY}.${mm}.${dd}`;
    const startTime = new Date(targetY, targetM - 1, 1, 0, 0, 0, 0).getTime();
    const endTime = new Date(targetY, targetM - 1, lastDay, 23, 59, 59, 999).getTime();
    const label = `${targetY}년 ${targetM}월 (${startDate}~${endDate})`;

    const filtered = all.filter(item => {
      const p = parseIncidentDate(item);
      if (!p) return false;
      const t = p.getTime();
      return t >= startTime && t <= endTime;
    });
    return { data: filtered, label, mode, year: targetY, month: targetM, startDate, endDate, startTime, endTime };
  } else if (mode === "custom" || mode === "dateRange") {
    const startEl = document.getElementById(side === "a" ? "cmp-start-a" : "cmp-start-b");
    const endEl = document.getElementById(side === "a" ? "cmp-end-a" : "cmp-end-b");
    const startStr = (startEl ? startEl.value : "") || "2026-01-01";
    const endStr = (endEl ? endEl.value : "") || "2026-10-31";

    const pStart = parseIncidentDate(startStr);
    const pEnd = parseIncidentDate(endStr);
    const startTime = pStart
      ? new Date(pStart.getFullYear(), pStart.getMonth(), pStart.getDate(), 0, 0, 0, 0).getTime()
      : new Date(`${startStr}T00:00:00`).getTime();
    const endTime = pEnd
      ? new Date(pEnd.getFullYear(), pEnd.getMonth(), pEnd.getDate(), 23, 59, 59, 999).getTime()
      : new Date(`${endStr}T23:59:59.999`).getTime();

    const label = `${startStr} ~ ${endStr}`;
    const filtered = all.filter(item => {
      const p = parseIncidentDate(item);
      if (!p) return false;
      const t = p.getTime();
      return t >= startTime && t <= endTime;
    });
    return { data: filtered, label, mode, startDate: startStr, endDate: endStr, startTime, endTime };
  }

  return { data: all, label: "전체", mode };
}
function executeComparison() {
  const resA = getIncidentsForCurrentMode("a");
  const resB = getIncidentsForCurrentMode("b");

  const labelA = resA.label;
  const labelB = resB.label;

  // 특정 사고 유형 선택 필터값 가져오기
  const typeFilterEl = document.getElementById("yoyGlobalTypeFilter") || document.getElementById("yoyIncidentTypeFilter");
  const selectedType = (typeFilterEl?.value || "all").trim();

  let dataA = resA.data;
  let dataB = resB.data;

  // 선택된 사고 유형으로 필터링 적용
  if (selectedType && selectedType !== "all") {
    dataA = dataA.filter(x => getIncidentCategory(x) === selectedType);
    dataB = dataB.filter(x => getIncidentCategory(x) === selectedType);
  }

  const labelPeriodAEl = document.getElementById("ck-label-period-a");
  const labelPeriodBEl = document.getElementById("ck-label-period-b");
  if (labelPeriodAEl) labelPeriodAEl.textContent = labelA;
  if (labelPeriodBEl) labelPeriodBEl.textContent = labelB;

  // 1. 총 사고 발생 건수 (선택된 사고 유형 기준 즉시 재계산)
  const countA = dataA.length;
  const countB = dataB.length;
  const diffCount = countA - countB;
  let rateCount = "0.0";
  if (countB > 0) {
    rateCount = ((diffCount / countB) * 100).toFixed(1);
  } else if (countA > 0) {
    rateCount = "+100.0";
  }

  const valCountAEl = document.getElementById("ck-val-count-a");
  const valCountBEl = document.getElementById("ck-val-count-b");
  const badgeCountEl = document.getElementById("ck-badge-count");

  if (valCountAEl) valCountAEl.textContent = `${countA.toLocaleString()}건`;
  if (valCountBEl) valCountBEl.textContent = `${countB.toLocaleString()}건`;
  if (badgeCountEl) {
    if (diffCount < 0) {
      badgeCountEl.className = "ck-diff-badge ck-badge-improved";
      badgeCountEl.textContent = `▼ ${Math.abs(diffCount)}건 (${rateCount}%) 감소`;
    } else if (diffCount > 0) {
      badgeCountEl.className = "ck-diff-badge ck-badge-worsened";
      badgeCountEl.textContent = `▲ +${diffCount}건 (+${rateCount}%) 증가`;
    } else {
      badgeCountEl.className = "ck-diff-badge";
      badgeCountEl.textContent = `- 0건 (동일)`;
    }
  }

  // 2. 당사 지급 보상액
  const costA = dataA.reduce((s, x) => s + (x.cost || x.companyAmount || 0), 0);
  const costB = dataB.reduce((s, x) => s + (x.cost || x.companyAmount || 0), 0);
  const diffCost = costA - costB;
  const rateCost = costB > 0 ? ((diffCost / costB) * 100).toFixed(1) : (costA > 0 ? "+100.0" : "0.0");

  const valCostAEl = document.getElementById("ck-val-cost-a");
  const valCostBEl = document.getElementById("ck-val-cost-b");
  const badgeCostEl = document.getElementById("ck-badge-cost");

  if (valCostAEl) valCostAEl.textContent = costA > 0 ? `${Math.round(costA / 10000).toLocaleString()}만원` : "0원";
  if (valCostBEl) valCostBEl.textContent = costB > 0 ? `${Math.round(costB / 10000).toLocaleString()}만원` : "0원";
  if (badgeCostEl) {
    if (diffCost < 0) {
      badgeCostEl.className = "ck-diff-badge ck-badge-improved";
      badgeCostEl.textContent = `▼ ${Math.round(Math.abs(diffCost) / 10000).toLocaleString()}만원 (${rateCost}%) 절감`;
    } else if (diffCost > 0) {
      badgeCostEl.className = "ck-diff-badge ck-badge-worsened";
      badgeCostEl.textContent = `▲ +${Math.round(diffCost / 10000).toLocaleString()}만원 (+${rateCost}%) 증가`;
    } else {
      badgeCostEl.className = "ck-diff-badge";
      badgeCostEl.textContent = `- 0원 (동일)`;
    }
  }

  // 3. 인명 피해 (병원 진료)
  const medA = dataA.filter(x => x.severity && (x.severity.includes("병원") || x.severity.includes("중등") || x.severity.includes("중대"))).length;
  const medB = dataB.filter(x => x.severity && (x.severity.includes("병원") || x.severity.includes("중등") || x.severity.includes("중대"))).length;
  const diffMed = medA - medB;

  const valMedAEl = document.getElementById("ck-val-medical-a");
  const valMedBEl = document.getElementById("ck-val-medical-b");
  const badgeMedEl = document.getElementById("ck-badge-medical");

  if (valMedAEl) valMedAEl.textContent = `${medA.toLocaleString()}건`;
  if (valMedBEl) valMedBEl.textContent = `${medB.toLocaleString()}건`;
  if (badgeMedEl) {
    if (diffMed < 0) {
      badgeMedEl.className = "ck-diff-badge ck-badge-improved";
      badgeMedEl.textContent = `▼ ${Math.abs(diffMed)}건 감소`;
    } else if (diffMed > 0) {
      badgeMedEl.className = "ck-diff-badge ck-badge-worsened";
      badgeMedEl.textContent = `▲ +${diffMed}건 증가`;
    } else {
      badgeMedEl.className = "ck-diff-badge";
      badgeMedEl.textContent = `- 동일`;
    }
  }

  // 4. 최다 발생 부서
  const getTopDept = (items) => {
    const map = {};
    items.forEach(x => {
      const d = x.dept || inferDeptFromIncident(x);
      map[d] = (map[d] || 0) + 1;
    });
    const sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
    return sorted.length > 0 ? sorted[0] : ["-", 0];
  };

  const [topDeptA, topCntA] = getTopDept(dataA);
  const [topDeptB, topCntB] = getTopDept(dataB);

  const valDeptAEl = document.getElementById("ck-val-dept-a");
  const subDeptAEl = document.getElementById("ck-sub-dept-a");
  const valDeptBEl = document.getElementById("ck-val-dept-b");
  const subDeptBEl = document.getElementById("ck-sub-dept-b");

  if (valDeptAEl) valDeptAEl.textContent = topDeptA;
  if (subDeptAEl) subDeptAEl.textContent = `${topCntA}건 (${countA > 0 ? ((topCntA/countA)*100).toFixed(1) : 0}%)`;
  if (valDeptBEl) valDeptBEl.textContent = topDeptB;
  if (subDeptBEl) subDeptBEl.textContent = `${topCntB}건 (${countB > 0 ? ((topCntB/countB)*100).toFixed(1) : 0}%)`;

  if (!state.comparison) state.comparison = {};
  state.comparison.lastDataA = dataA;
  state.comparison.lastDataB = dataB;
  state.comparison.lastSelectedType = selectedType;

  renderComparisonCharts(dataA, dataB, labelA, labelB, resA.mode, selectedType);
  renderComparisonTable(dataA, dataB, selectedType);
}
window.getIncidentsForCurrentMode = getIncidentsForCurrentMode;
window.executeComparison = executeComparison;

function renderComparisonCharts(dataA, dataB, labelA, labelB, mode, selectedType = "all") {
  if (typeof Chart === "undefined") return;

  const isTypeFiltered = selectedType && selectedType !== "all";

  // 1) Grouped Bar Chart: 유형 전체일 때는 상위 사고유형별 비교, 특정 유형 선택 시 사업장별 비교
  const groupKey = isTypeFiltered ? "resort" : "category";
  const allKeys = new Set();
  dataA.forEach(x => allKeys.add((x[groupKey] || "기타").trim()));
  dataB.forEach(x => allKeys.add((x[groupKey] || "기타").trim()));

  const mapA = {};
  const mapB = {};
  allKeys.forEach(k => { mapA[k] = 0; mapB[k] = 0; });
  dataA.forEach(x => mapA[(x[groupKey] || "기타").trim()]++);
  dataB.forEach(x => mapB[(x[groupKey] || "기타").trim()]++);

  const sortedLabels = Array.from(allKeys).sort((a, b) => (mapA[b] + mapB[b]) - (mapA[a] + mapB[a])).slice(0, 7);

  // 차트 카드 헤더 텍스트 동적 동기화
  const catChartHeader = document.querySelector("#cmpCategoryChart")?.closest(".chart-card")?.querySelector("h3");
  const catChartSub = document.querySelector("#cmpCategoryChart")?.closest(".chart-card")?.querySelector(".chart-sub");
  if (catChartHeader) {
    catChartHeader.textContent = isTypeFiltered
      ? `📊 [${selectedType}] 사업장별 발생 대조`
      : `📊 사고 유형별 발생 건수 나란히 비교`;
  }
  if (catChartSub) {
    catChartSub.textContent = isTypeFiltered
      ? `A 기간(블루) vs B 기간(오렌지) '${selectedType}' 사업장별 증감 대조`
      : `A 기간(블루) vs B 기간(오렌지) 상위 유형별 증감 대조`;
  }

  const ctxCat = document.getElementById("cmpCategoryChart");
  if (ctxCat) {
    if (state.comparison.chartCategory) {
      state.comparison.chartCategory.destroy();
    }
    state.comparison.chartCategory = new Chart(ctxCat, {
      type: "bar",
      data: {
        labels: sortedLabels.length > 0 ? sortedLabels : ["데이터 없음"],
        datasets: [
          {
            label: `${labelA} (A)`,
            data: sortedLabels.length > 0 ? sortedLabels.map(c => mapA[c]) : [0],
            backgroundColor: "#2563EB",
            borderRadius: 4
          },
          {
            label: `${labelB} (B)`,
            data: sortedLabels.length > 0 ? sortedLabels.map(c => mapB[c]) : [0],
            backgroundColor: "#F59E0B",
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { font: { weight: 600 } } }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
          x: { grid: { display: false } }
        }
      }
    });
  }

  // 2) Secondary Trend / Pattern Chart (월별 발생 추이 비교)
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const monthlyA = new Array(12).fill(0);
  const monthlyB = new Array(12).fill(0);

  dataA.forEach(x => {
    const p = parseIncidentDate(x);
    if (p) {
      const idx = p.getMonth();
      if (idx >= 0 && idx < 12) monthlyA[idx]++;
    }
  });
  dataB.forEach(x => {
    const p = parseIncidentDate(x);
    if (p) {
      const idx = p.getMonth();
      if (idx >= 0 && idx < 12) monthlyB[idx]++;
    }
  });

  const monthChartHeader = document.querySelector("#cmpMonthlyChart")?.closest(".chart-card")?.querySelector("h3");
  const monthChartSub = document.querySelector("#cmpMonthlyChart")?.closest(".chart-card")?.querySelector(".chart-sub");
  if (monthChartHeader) {
    monthChartHeader.textContent = isTypeFiltered
      ? `📈 [${selectedType}] 월별 발생 추이 비교`
      : `📈 월별(1월~12월) 발생 추이 비교`;
  }
  if (monthChartSub) {
    monthChartSub.textContent = isTypeFiltered
      ? `'${selectedType}' 월별 계절성 및 시기별 발생 패턴 대조`
      : `월별 계절성 및 시기별 안전사고 발생 패턴 대조`;
  }

  const ctxMonth = document.getElementById("cmpMonthlyChart");
  if (ctxMonth) {
    if (state.comparison.chartMonthly) {
      state.comparison.chartMonthly.destroy();
    }
    state.comparison.chartMonthly = new Chart(ctxMonth, {
      type: "line",
      data: {
        labels: months,
        datasets: [
          {
            label: `${labelA} (A)`,
            data: monthlyA,
            borderColor: "#2563EB",
            backgroundColor: "rgba(37, 99, 235, 0.12)",
            tension: 0.35,
            fill: true,
            pointRadius: 4
          },
          {
            label: `${labelB} (B)`,
            data: monthlyB,
            borderColor: "#F59E0B",
            backgroundColor: "rgba(245, 158, 11, 0.08)",
            tension: 0.35,
            fill: true,
            pointRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { font: { weight: 600 } } }
        },
        scales: {
          y: { beginAtZero: true, grid: { color: "#f1f5f9" } },
          x: { grid: { display: false } }
        }
      }
    });
  }
}

function formatCmpDiffBadges(a, b) {
  const diff = a - b;
  let rate = "0.0";
  if (b > 0) {
    rate = ((diff / b) * 100).toFixed(1);
  } else if (a > 0) {
    rate = "+100.0";
  }

  let diffBadgeHtml = "";
  let rateBadgeHtml = "";

  if (diff > 0) {
    // 증가(+): 연한 빨간색 라운드 뱃지 (배경 #fef2f2, 글자 #dc2626)
    const rateText = (b === 0) ? "+100.0% (신규)" : `+${rate}%`;
    diffBadgeHtml = `<span class="cmp-badge cmp-badge-worsened">+${diff.toLocaleString()}건</span>`;
    rateBadgeHtml = `<span class="cmp-badge cmp-badge-worsened">${rateText}</span>`;
  } else if (diff < 0) {
    // 감소(-): 연한 파란색 라운드 뱃지 (배경 #eff6ff, 글자 #2563eb)
    diffBadgeHtml = `<span class="cmp-badge cmp-badge-improved">${diff.toLocaleString()}건</span>`;
    rateBadgeHtml = `<span class="cmp-badge cmp-badge-improved">${rate}%</span>`;
  } else {
    // 변동없음(0): 은은한 회색 (글자 #64748b)
    diffBadgeHtml = `<span class="cmp-badge cmp-badge-neutral">0건</span>`;
    rateBadgeHtml = `<span class="cmp-badge cmp-badge-neutral">0.0%</span>`;
  }

  return { diff, rate, diffBadgeHtml, rateBadgeHtml };
}

function renderComparisonTable(dataA, dataB, selectedType) {
  const tbody = document.getElementById("cmp-breakdown-tbody");
  if (!tbody) return;

  if (!state.comparison) state.comparison = {};
  if (!state.comparison.openResorts) state.comparison.openResorts = new Set();

  if (!dataA || !dataB) {
    if (state.comparison.lastDataA && state.comparison.lastDataB) {
      dataA = state.comparison.lastDataA;
      dataB = state.comparison.lastDataB;
      selectedType = selectedType || state.comparison.lastSelectedType || "all";
    } else {
      const resA = getIncidentsForCurrentMode("a");
      const resB = getIncidentsForCurrentMode("b");
      dataA = resA.data;
      dataB = resB.data;
      state.comparison.lastDataA = dataA;
      state.comparison.lastDataB = dataB;
      selectedType = selectedType || state.comparison.lastSelectedType || "all";
    }
  } else {
    state.comparison.lastDataA = dataA;
    state.comparison.lastDataB = dataB;
    state.comparison.lastSelectedType = selectedType || "all";
  }

  const typeFilterEl = document.getElementById("yoyGlobalTypeFilter") || document.getElementById("yoyIncidentTypeFilter");
  const currentTypeFilter = (selectedType && selectedType !== "all")
    ? selectedType
    : (typeFilterEl?.value || "all").trim();

  // 1) 사업장 필터 (yoyTableBizSelect)
  const bizSelectEl = document.getElementById("yoyTableBizSelect");
  const selectedBiz = (bizSelectEl?.value || "").trim();
  const isAllBiz = !selectedBiz || selectedBiz === "all" || selectedBiz === "";

  // 2) 정렬 도구 (yoyTableSortSelect)
  const sortSelectEl = document.getElementById("yoyTableSortSelect");
  const sortMode = (sortSelectEl?.value || "risk_desc").trim();

  // 사업장별 그룹화 구조: { [resort]: { categories: { [cat]: { a: 0, b: 0 } }, subtotalA: 0, subtotalB: 0 } }
  const resortGroups = {};

  dataA.forEach(x => {
    const c = getIncidentCategory(x);
    if (currentTypeFilter !== "all" && c !== currentTypeFilter) return;
    const r = (x.resort || "기타").trim();
    if (!isAllBiz && r !== selectedBiz) return;

    if (!resortGroups[r]) {
      resortGroups[r] = { categories: {}, subtotalA: 0, subtotalB: 0 };
    }
    if (!resortGroups[r].categories[c]) {
      resortGroups[r].categories[c] = { a: 0, b: 0 };
    }
    resortGroups[r].categories[c].a++;
    resortGroups[r].subtotalA++;
  });

  dataB.forEach(x => {
    const c = getIncidentCategory(x);
    if (currentTypeFilter !== "all" && c !== currentTypeFilter) return;
    const r = (x.resort || "기타").trim();
    if (!isAllBiz && r !== selectedBiz) return;

    if (!resortGroups[r]) {
      resortGroups[r] = { categories: {}, subtotalA: 0, subtotalB: 0 };
    }
    if (!resortGroups[r].categories[c]) {
      resortGroups[r].categories[c] = { a: 0, b: 0 };
    }
    resortGroups[r].categories[c].b++;
    resortGroups[r].subtotalB++;
  });

  const resorts = Object.keys(resortGroups);

  // 전체 기간 A, B 총합산 건수
  let totalA = 0;
  let totalB = 0;
  resorts.forEach(r => {
    totalA += resortGroups[r].subtotalA;
    totalB += resortGroups[r].subtotalB;
  });

  // 3) 대조표 타이틀 우측 요약 카운트 뱃지 즉시 갱신
  const summaryBadgeEl = document.getElementById("cmp-table-summary-badge");
  if (summaryBadgeEl) {
    summaryBadgeEl.innerHTML = `
      <span class="cmp-summary-a">A 총 ${totalA.toLocaleString()}건</span>
      <span class="cmp-summary-vs">vs</span>
      <span class="cmp-summary-b">B 총 ${totalB.toLocaleString()}건</span>
    `;
  }

  // 데이터 없음 표시
  if (resorts.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: #64748b; padding: 2.5rem 1rem;">
          <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">🔍</div>
          <div style="font-weight: 600; color: #334155;">선택한 조건에 해당하는 비교 데이터가 없습니다.</div>
          <div style="font-size: 0.8rem; color: #94a3b8; margin-top: 0.25rem;">비교 기간, 사고 유형 또는 사업장 필터 조건을 변경해 보세요.</div>
        </td>
      </tr>
    `;
    updateToggleAllAccordionButtonUI();
    return;
  }

  // 사업장 그룹 정렬
  resorts.sort((r1, r2) => {
    const g1 = resortGroups[r1];
    const g2 = resortGroups[r2];
    const diff1 = g1.subtotalA - g1.subtotalB;
    const diff2 = g2.subtotalA - g2.subtotalB;

    if (sortMode === "risk_desc") {
      // 위험 증가폭 큰 순 (+증가순 / 빨간색 우선)
      if (diff2 !== diff1) return diff2 - diff1;
      if (g2.subtotalB !== g1.subtotalB) return g2.subtotalB - g1.subtotalB;
      if (g2.subtotalA !== g1.subtotalA) return g2.subtotalA - g1.subtotalA;
      return r1.localeCompare(r2, "ko");
    } else if (sortMode === "b_desc") {
      // B대상 발생 건수 많은 순
      if (g2.subtotalB !== g1.subtotalB) return g2.subtotalB - g1.subtotalB;
      const absDiff1 = Math.abs(diff1);
      const absDiff2 = Math.abs(diff2);
      if (absDiff2 !== absDiff1) return absDiff2 - absDiff1;
      if (g2.subtotalA !== g1.subtotalA) return g2.subtotalA - g1.subtotalA;
      return r1.localeCompare(r2, "ko");
    } else if (sortMode === "biz_asc") {
      // 사업장별 가나다순
      return r1.localeCompare(r2, "ko");
    }

    if (diff2 !== diff1) return diff2 - diff1;
    return g2.subtotalB - g1.subtotalB;
  });

  // 1. 테이블 최상단 [전체 합계(Total)] 행 구성
  const totalBadges = formatCmpDiffBadges(totalA, totalB);
  const totalTypeDisplay = (currentTypeFilter !== "all" && currentTypeFilter !== "")
    ? currentTypeFilter
    : "전체 유형";

  const totalRowHtml = `
    <tr class="cmp-total-row cmp-clickable-row" onclick="openYoyDrilldown('all', '${currentTypeFilter === 'all' ? 'all' : escapeHtml(currentTypeFilter)}')" title="클릭하여 현재 조건의 전체 세부 사고 목록 조회">
      <td style="text-align: center;"><span class="total-badge">총계</span></td>
      <td class="resort-cell" style="font-weight: 800; color: #312e81;"><span style="color: #4f46e5; margin-right: 4px;">∑</span>전체 (총계)</td>
      <td class="cat-cell">
        <span class="badge" style="font-weight: 700; color: #4338ca; background: #e0e7ff; border: 1px solid #c7d2fe; padding: 3px 8px; border-radius: 4px;">${escapeHtml(totalTypeDisplay)}</span>
      </td>
      <td style="text-align: right; font-weight: 800; color: #2563eb; font-size: 0.95rem;">${totalA.toLocaleString()}건</td>
      <td style="text-align: right; font-weight: 800; color: #d97706; font-size: 0.95rem;">${totalB.toLocaleString()}건</td>
      <td style="text-align: right;">${totalBadges.diffBadgeHtml}</td>
      <td style="text-align: right;">${totalBadges.rateBadgeHtml}</td>
    </tr>
  `;

  // 2. 세부 항목별 증감 대조표 '사업장별 아코디언(접기/펼치기)' 행 구성
  const rows = [totalRowHtml];

  resorts.forEach(resort => {
    const group = resortGroups[resort];
    const catKeys = Object.keys(group.categories);
    const isOpen = state.comparison.openResorts && state.comparison.openResorts.has(resort);
    const arrowIcon = isOpen ? "▼" : "▶";
    const subBadges = formatCmpDiffBadges(group.subtotalA, group.subtotalB);
    const safeResort = escapeHtml(resort);

    // 기본 출력 상태: 각 사업장의 '대표 요약 행(아코디언 헤더)'만 노출
    // [▶ 아이콘] | 사업장명 (예: 레저팀) | 소계 (5개 유형) | A 합계 (7건) | B 합계 (0건) | 증감 (+7건) | 증감률 (+100%)
    rows.push(`
      <tr class="cmp-resort-group-row cmp-clickable-row" data-resort="${safeResort}" onclick="toggleComparisonAccordion('${safeResort}')" title="클릭하여 '${safeResort}' 세부 사고유형 펼치기/접기">
        <td style="text-align: center; width: 6%;">
          <span class="acc-toggle-arrow" id="acc-arrow-${safeResort}">${arrowIcon}</span>
        </td>
        <td class="resort-cell" style="font-weight: 700; color: #0f172a; white-space: nowrap;">
          <strong>${safeResort}</strong>
        </td>
        <td class="cat-cell">
          <span class="badge" style="background: #e2e8f0; color: #334155; font-weight: 600; padding: 2px 7px; border-radius: 4px; font-size: 0.8rem;">소계 (${catKeys.length}개 유형)</span>
        </td>
        <td style="text-align: right; font-weight: 700; color: #2563eb;">${group.subtotalA.toLocaleString()}건</td>
        <td style="text-align: right; font-weight: 700; color: #d97706;">${group.subtotalB.toLocaleString()}건</td>
        <td style="text-align: right;">${subBadges.diffBadgeHtml}</td>
        <td style="text-align: right;">${subBadges.rateBadgeHtml}</td>
      </tr>
    `);

    // 사업장 내부 세부 유형 정렬
    catKeys.sort((c1, c2) => {
      const item1 = group.categories[c1];
      const item2 = group.categories[c2];
      const diff1 = item1.a - item1.b;
      const diff2 = item2.a - item2.b;

      if (sortMode === "risk_desc") {
        if (diff2 !== diff1) return diff2 - diff1;
        if (item2.b !== item1.b) return item2.b - item1.b;
        if (item2.a !== item1.a) return item2.a - item1.a;
        return c1.localeCompare(c2, "ko");
      } else if (sortMode === "b_desc") {
        if (item2.b !== item1.b) return item2.b - item1.b;
        const absDiff1 = Math.abs(diff1);
        const absDiff2 = Math.abs(diff2);
        if (absDiff2 !== absDiff1) return absDiff2 - absDiff1;
        if (item2.a !== item1.a) return item2.a - item1.a;
        return c1.localeCompare(c2, "ko");
      } else if (sortMode === "biz_asc") {
        const compC = c1.localeCompare(c2, "ko");
        if (compC !== 0) return compC;
        return item2.b - item1.b;
      }

      if (diff2 !== diff1) return diff2 - diff1;
      return item2.b - item1.b;
    });

    // 각 사업장에 속한 세부 사고유형 행들: 초기 로딩 시 hidden 클래스 및 display: none 처리
    const isChildHidden = !isOpen;
    const hiddenClass = isChildHidden ? "hidden" : "";
    const inlineDisplay = isChildHidden ? 'style="display: none;"' : '';

    catKeys.forEach(category => {
      const item = group.categories[category];
      const badges = formatCmpDiffBadges(item.a, item.b);
      const safeCat = escapeHtml(category);

      rows.push(`
        <tr class="cmp-child-row bg-slate-50/60 cmp-clickable-row ${hiddenClass}" data-parent-resort="${safeResort}" ${inlineDisplay} onclick="openYoyDrilldown('${safeResort}', '${safeCat}')" title="클릭하여 '${safeResort} - ${safeCat}' 세부 사고 목록 조회">
          <td style="text-align: center; color: #94a3b8; font-weight: 600;"><span class="cmp-child-indent">↳</span></td>
          <td class="resort-cell pl-6" style="color: #64748b; font-size: 0.82rem;"><span style="color: #94a3b8; margin-right: 4px;">↳</span>${safeResort}</td>
          <td class="cat-cell pl-6">
            <span class="badge badge-category" style="font-weight: 600; color: #1e293b; background: #ffffff; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 4px;">${safeCat}</span>
          </td>
          <td style="text-align: right; font-weight: 600; color: #2563eb;">${item.a.toLocaleString()}건</td>
          <td style="text-align: right; font-weight: 600; color: #d97706;">${item.b.toLocaleString()}건</td>
          <td style="text-align: right;">${badges.diffBadgeHtml}</td>
          <td style="text-align: right;">${badges.rateBadgeHtml}</td>
        </tr>
      `);
    });
  });

  tbody.innerHTML = rows.join("");
  updateToggleAllAccordionButtonUI();
}

window.toggleComparisonAccordion = function(resort) {
  if (!state.comparison) state.comparison = {};
  if (!state.comparison.openResorts) state.comparison.openResorts = new Set();

  const childRows = document.querySelectorAll(`tr.cmp-child-row[data-parent-resort="${resort}"]`);
  if (!childRows || childRows.length === 0) return;

  let isNowOpen = false;
  childRows.forEach((row, idx) => {
    const isHidden = row.classList.toggle("hidden");
    if (isHidden) {
      row.style.display = "none";
    } else {
      row.style.display = "";
    }
    if (idx === 0) isNowOpen = !isHidden;
  });

  if (isNowOpen) {
    state.comparison.openResorts.add(resort);
  } else {
    state.comparison.openResorts.delete(resort);
  }

  const safeResort = escapeHtml(resort);
  const arrowEl = document.getElementById(`acc-arrow-${safeResort}`);
  if (arrowEl) {
    arrowEl.textContent = isNowOpen ? "▼" : "▶";
  }

  updateToggleAllAccordionButtonUI();
};

window.toggleAllComparisonAccordions = function() {
  if (!state.comparison) state.comparison = {};
  if (!state.comparison.openResorts) state.comparison.openResorts = new Set();

  const groupRows = document.querySelectorAll("tr.cmp-resort-group-row");
  const allResorts = Array.from(groupRows).map(r => r.getAttribute("data-resort")).filter(Boolean);
  if (allResorts.length === 0) return;

  const childRows = document.querySelectorAll("tr.cmp-child-row");
  const hasAnyHidden = Array.from(childRows).some(row => row.classList.contains("hidden") || row.style.display === "none");

  if (hasAnyHidden) {
    // Open all
    childRows.forEach(row => {
      row.classList.remove("hidden");
      row.style.display = "";
    });
    allResorts.forEach(r => {
      state.comparison.openResorts.add(r);
      const arrowEl = document.getElementById(`acc-arrow-${escapeHtml(r)}`);
      if (arrowEl) arrowEl.textContent = "▼";
    });
  } else {
    // Close all
    childRows.forEach(row => {
      row.classList.add("hidden");
      row.style.display = "none";
    });
    state.comparison.openResorts.clear();
    allResorts.forEach(r => {
      const arrowEl = document.getElementById(`acc-arrow-${escapeHtml(r)}`);
      if (arrowEl) arrowEl.textContent = "▶";
    });
  }

  updateToggleAllAccordionButtonUI();
};

function updateToggleAllAccordionButtonUI() {
  const childRows = document.querySelectorAll("tr.cmp-child-row");
  const btnText = document.getElementById("accordion-toggle-text");
  const btnIcon = document.getElementById("accordion-toggle-icon");
  if (!btnText || !btnIcon || childRows.length === 0) return;

  const hasAnyHidden = Array.from(childRows).some(row => row.classList.contains("hidden") || row.style.display === "none");
  if (!hasAnyHidden) {
    btnIcon.textContent = "▼";
    btnText.textContent = "전체 접기";
  } else {
    btnIcon.textContent = "▶";
    btnText.textContent = "전체 펼치기";
  }
}
window.updateToggleAllAccordionButtonUI = updateToggleAllAccordionButtonUI;

window.renderComparisonTable = renderComparisonTable;
window.renderYoyTable = renderComparisonTable;

// ==========================================================================
// 6-6. 다년도 대조표 드릴다운 상세 사고 내역 팝업 모달
// ==========================================================================
function openYoyDrilldown(resort, category, preferredTab = null, restoreScrollTop = 0) {
  const r = (resort || "").trim();
  const c = (category || "").trim();

  // 최신 A기간 및 B기간 데이터 추출
  const dataA = (state.comparison && state.comparison.lastDataA)
    ? state.comparison.lastDataA
    : (typeof getIncidentsForCurrentMode === "function" ? getIncidentsForCurrentMode("a").data : []);
  const dataB = (state.comparison && state.comparison.lastDataB)
    ? state.comparison.lastDataB
    : (typeof getIncidentsForCurrentMode === "function" ? getIncidentsForCurrentMode("b").data : []);

  // 사업장 및 사고유형 필터 유연 적용 ('all', '-', '전체 유형', '소계' 대응)
  const filterFn = (x) => {
    if (r !== "all" && r !== "" && (x.resort || "").trim() !== r) return false;
    const catVal = getIncidentCategory(x);
    if (c !== "all" && c !== "" && c !== "-" && c !== "소계" && c !== "전체 유형" && catVal !== c) return false;
    return true;
  };

  const listA = dataA.filter(filterFn);
  const listB = dataB.filter(filterFn);

  const activeTab = preferredTab || (listA.length > 0 ? "a" : (listB.length > 0 ? "b" : "a"));

  state.yoyDrilldown = {
    resort: r,
    category: c,
    listA,
    listB,
    activeTab
  };

  const totalCount = listA.length + listB.length;
  const titleEl = document.getElementById("yoy-drilldown-title");
  const subEl = document.getElementById("yoy-drilldown-sub");
  if (titleEl) {
    const displayResort = (r === "all" || !r) ? "전체 사업장" : r;
    const displayCategory = (c === "all" || !c || c === "-" || c === "소계" || c === "전체 유형") ? "전체 사고유형" : c;
    titleEl.textContent = `[${displayResort}] - [${displayCategory}] 세부 사고 내역 (총 ${totalCount.toLocaleString()}건)`;
  }

  const labelA = document.getElementById("ck-label-period-a")?.textContent || "A기간";
  const labelB = document.getElementById("ck-label-period-b")?.textContent || "B기간";
  if (subEl) {
    subEl.textContent = `${labelA}(A) ${listA.length}건 / ${labelB}(B) ${listB.length}건 상세 대조`;
  }

  const tabLabelAEl = document.getElementById("drill-tab-label-a");
  const tabLabelBEl = document.getElementById("drill-tab-label-b");
  if (tabLabelAEl) tabLabelAEl.textContent = `${labelA} 사고 목록 (${listA.length}건)`;
  if (tabLabelBEl) tabLabelBEl.textContent = `${labelB} 사고 목록 (${listB.length}건)`;

  const btnA = document.getElementById("btn-drill-tab-a");
  const btnB = document.getElementById("btn-drill-tab-b");
  if (btnA) btnA.classList.toggle("active", activeTab === "a");
  if (btnB) btnB.classList.toggle("active", activeTab === "b");

  // 신설: 피해자 필터 초기화
  state.yoyDrillVictimFilter = "all";
  const victimSel = document.getElementById("yoy-drill-filter-victim");
  if (victimSel) victimSel.value = "all";

  renderYoyDrilldownTable();

  const modal = document.getElementById("yoyDrilldownModal");
  if (modal) {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  }

  if (restoreScrollTop > 0) {
    setTimeout(() => {
      const wrap = document.getElementById("yoy-drilldown-table-wrap");
      if (wrap) wrap.scrollTop = restoreScrollTop;
    }, 50);
  }
}
window.openYoyDrilldown = openYoyDrilldown;

function filterYoyDrilldownByVictim(val) {
  state.yoyDrillVictimFilter = val || "all";
  renderYoyDrilldownTable();
}
window.filterYoyDrilldownByVictim = filterYoyDrilldownByVictim;

function switchYoyDrillTab(tab) {
  if (!state.yoyDrilldown) return;
  state.yoyDrilldown.activeTab = tab;

  const btnA = document.getElementById("btn-drill-tab-a");
  const btnB = document.getElementById("btn-drill-tab-b");
  if (btnA) btnA.classList.toggle("active", tab === "a");
  if (btnB) btnB.classList.toggle("active", tab === "b");

  renderYoyDrilldownTable();
}
window.switchYoyDrillTab = switchYoyDrillTab;

function renderYoyDrilldownTable() {
  const tbody = document.getElementById("yoy-drilldown-tbody");
  if (!tbody || !state.yoyDrilldown) return;

  const { listA, listB, activeTab } = state.yoyDrilldown;
  let currentList = activeTab === "a" ? listA : listB;

  if (state.yoyDrillVictimFilter && state.yoyDrillVictimFilter !== "all") {
    currentList = (currentList || []).filter(item => classifyVictim(item).category === state.yoyDrillVictimFilter);
  }

  if (!currentList || currentList.length === 0) {
    const periodName = activeTab === "a"
      ? (document.getElementById("ck-label-period-a")?.textContent || "A기간")
      : (document.getElementById("ck-label-period-b")?.textContent || "B기간");
    tbody.innerHTML = `
      <tr>
        <td colspan="10" style="text-align: center; color: #64748b; padding: 2.5rem 1rem;">
          <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">📂</div>
          <div style="font-weight: 600; color: #334155;">해당 조건(${escapeHtml(periodName)})에 등록된 세부 사고 건이 없습니다.</div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = currentList.map((item, idx) => {
    const id = item.id || "-";
    const date = item.date || "-";
    const loc = item.locationDetail || item.zone || "-";
    const title = item.title || item.description || "사고 개요 없음";
    const status = item.status || "접수대기";
    const teamName = String(item.team || item['구분1'] || item.resort || "미분류").replace(/[\r\n]+/g, " ").trim();
    const deptName = String(item.department || item['부문/부서'] || item.division || (item.dept && item.dept !== teamName ? item.dept : "") || "").replace(/[\r\n]+/g, " ").trim();
    const displayLocation = item.displayLocation || ((deptName && deptName !== teamName) ? `${teamName} (${deptName})` : teamName);
    const vInfo = classifyVictim(item);

    // Status badge class
    let statusClass = "badge-status-pending";
    if (status.includes("완료")) statusClass = "badge-status-completed";
    else if (status.includes("진행")) statusClass = "badge-status-progress";
    else if (status.includes("보험") || status.includes("보상")) statusClass = "badge-status-insurance";

    return `
      <tr class="drilldown-incident-row" onclick="navigateToDetailFromDrilldown('${escapeHtml(id)}')" title="클릭하여 '${escapeHtml(id)}' 상세 내역 보기">
        <td style="text-align: center; color: #64748b; font-size: 0.8rem;">${idx + 1}</td>
        <td class="id-cell" style="font-family: monospace; font-weight: 700; color: #2563eb;">${escapeHtml(id)}</td>
        <td style="font-size: 0.82rem; color: #475569; white-space: nowrap;">${escapeHtml(date)}</td>
        <td style="font-size: 0.83rem; color: #0f172a; font-weight: 600;">${escapeHtml(displayLocation)}</td>
        <td style="text-align: center;">
          <span class="badge ${vInfo.badgeClass}" style="${vInfo.inlineStyle}" title="${escapeHtml(item.victimName && item.victimName !== '익명' ? `${vInfo.label} (${item.victimName})` : vInfo.label)}">${escapeHtml(vInfo.label)}</span>
        </td>
        <td style="font-size: 0.82rem; color: #334155;">${escapeHtml(loc)}</td>
        <td>
          <span class="badge badge-category" style="font-size: 0.74rem;">${escapeHtml(getIncidentCategory(item))}</span>
        </td>
        <td class="title-cell" title="${escapeHtml(title)}">
          <div style="max-height: 2.6em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.35; font-size: 0.83rem; font-weight: 600;">
            ${escapeHtml(title)}
          </div>
        </td>
        <td style="text-align: center;">
          <span class="badge ${statusClass}" style="font-size: 0.74rem;">${escapeHtml(status)}</span>
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="event.stopPropagation(); navigateToDetailFromDrilldown('${escapeHtml(id)}')">
            조회
          </button>
        </td>
      </tr>
    `;
  }).join("");
}
window.renderYoyDrilldownTable = renderYoyDrilldownTable;

// ==========================================================================
// 6-8. 핵심 4대 KPI 카드 드릴다운 상세 사고 내역 모달
// ==========================================================================
function filterKpiDrilldownByVictim(val) {
  state.kpiDrillVictimFilter = val || "all";
  renderKpiDrilldownTable();
}
window.filterKpiDrilldownByVictim = filterKpiDrilldownByVictim;

function filterKpiDrilldownByReport(val) {
  state.kpiDrillReportFilter = val || "all";
  renderKpiDrilldownTable();
}
window.filterKpiDrilldownByReport = filterKpiDrilldownByReport;

// [신규] 직원 안전사고 모달 연도 필터 변경 핸들러
function handleKpiDrilldownYearChange(year) {
  state.kpiDrillYearFilter = year || "all";
  updateKpiDrilldownData();

  const typeSel = document.getElementById("kpi-drill-filter-type");
  if (typeSel) {
    const uniqueTypes = [...new Set((state.kpiDrilldownList || []).map(item => {
      return (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "";
    }).filter(Boolean))].sort();

    const curVal = state.kpiDrillTypeFilter || "all";
    typeSel.innerHTML = `<option value="all">전체 사고유형</option>` +
      uniqueTypes.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
    typeSel.value = uniqueTypes.includes(curVal) ? curVal : "all";
    state.kpiDrillTypeFilter = typeSel.value;
  }
  renderKpiDrilldownTable();
}
window.handleKpiDrilldownYearChange = handleKpiDrilldownYearChange;

// [신규] 드릴다운 데이터 실시간 재계산 및 렌더링
state.kpiDrillTypeFilter = "all";
window.filterKpiDrilldownByType = function(type) {
  state.kpiDrillTypeFilter = type;
  renderKpiDrilldownTable();
};

function updateKpiDrilldownData() {
  let base = [...(state.kpiDrilldownBaseList || [])];
  const year = state.kpiDrillYearFilter || "all";

  if (year !== "all") {
    const yNum = parseInt(year, 10);
    base = base.filter(x => {
      const p = parseIncidentDate(x);
      return (x.year === yNum) || (p && p.getFullYear() === yNum) || String(x.date || x.occurredAt || "").includes(String(yNum));
    });
  }

  // 최신순 (날짜 내림차순) 정렬
  base.sort((a, b) => {
    const da = parseIncidentDate(a)?.getTime() || 0;
    const db = parseIncidentDate(b)?.getTime() || 0;
    return db - da;
  });

  state.kpiDrilldownList = base;

  const titleEl = document.getElementById("kpi-drilldown-title");
  const subEl = document.getElementById("kpi-drilldown-sub");
  const iconEl = document.getElementById("kpi-drilldown-icon");

  const totalAll = (state.incidents || []).length;
  const isFiltered = Boolean(
    (state.filteredIncidents && state.filteredIncidents.length !== totalAll) ||
    (state.filters && (
      (state.filters.period && state.filters.period !== "all") ||
      (state.filters.resort && state.filters.resort !== "all") ||
      (state.filters.dept && state.filters.dept !== "all") ||
      (state.filters.category && state.filters.category !== "all") ||
      (state.filters.victimType && state.filters.victimType !== "all") ||
      (state.filters.severity && state.filters.severity !== "all") ||
      (state.filters.status && state.filters.status !== "all") ||
      (state.filters.zone && state.filters.zone !== "all") ||
      (state.filters.reportStatus && state.filters.reportStatus !== "all") ||
      state.filters.startDate || state.filters.endDate || state.filters.from || state.filters.to || state.filters.search || state.filters.searchQuery
    ))
  );

  if (state.currentKpiDrillType === "employee2026" || state.currentKpiDrillType === "employee") {
    if (isFiltered) {
      if (titleEl) titleEl.textContent = `[선택 기간 직원 안전사고] 세부 내역 (총 ${base.length.toLocaleString()}건)`;
      if (subEl) subEl.textContent = `현재 필터링 조건에 부합하는 임직원·캐디 안전사고 목록`;
    } else {
      const yearLabel = year === "all" ? "전체 연도" : `${year}년`;
      if (titleEl) titleEl.textContent = `[${yearLabel} 직원 안전사고] 세부 내역 (총 ${base.length.toLocaleString()}건)`;
      if (subEl) subEl.textContent = `${yearLabel} 발생한 임직원·캐디·진행원 산재 및 안전사고 목록`;
    }
    if (iconEl) iconEl.textContent = "⛑️";
  } else {
    if (titleEl) titleEl.textContent = `${state.currentKpiDrillTitle || "KPI 세부 사고 내역"} (총 ${base.length.toLocaleString()}건)`;
    if (subEl) subEl.textContent = state.currentKpiDrillSub || "";
    if (iconEl) iconEl.textContent = state.currentKpiDrillIcon || "📌";
  }

  renderKpiDrilldownTable();
}
window.updateKpiDrilldownData = updateKpiDrilldownData;

function openKpiDrilldown(type) {
  const currentYear = new Date().getFullYear();
  state.currentKpiDrillType = type;

  const all = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);

  const totalAll = all.length;
  const isFiltered = Boolean(
    (state.filteredIncidents && state.filteredIncidents.length !== totalAll) ||
    (state.filters && (
      (state.filters.period && state.filters.period !== "all") ||
      (state.filters.resort && state.filters.resort !== "all") ||
      (state.filters.dept && state.filters.dept !== "all") ||
      (state.filters.category && state.filters.category !== "all") ||
      (state.filters.victimType && state.filters.victimType !== "all") ||
      (state.filters.severity && state.filters.severity !== "all") ||
      (state.filters.status && state.filters.status !== "all") ||
      (state.filters.zone && state.filters.zone !== "all") ||
      (state.filters.reportStatus && state.filters.reportStatus !== "all") ||
      state.filters.startDate || state.filters.endDate || state.filters.from || state.filters.to || state.filters.search || state.filters.searchQuery
    ))
  );

  const targetList = (state.filteredIncidents && Array.isArray(state.filteredIncidents)) ? state.filteredIncidents : all;

  let filtered = [];
  let title = "";
  let sub = "";
  let icon = "📌";

  const yearWrap = document.getElementById("kpi-drill-year-wrap");
  const yearSelect = document.getElementById("kpi-drill-filter-year");

  if (type === "employee2026" || type === "employee") {
    const empKeywords = ["직원", "임직원", "캐디", "진행원", "근로자", "실습생", "일용직", "협력사"];
    // 필터 활성화 시 filteredIncidents 기준, 전체일 시 all 기준
    const sourceList = isFiltered ? targetList : all;

    state.kpiDrilldownBaseList = sourceList.filter(x => {
      if (!x) return false;
      // [원칙 준수] 본문(텍스트) 검색 금지: 오직 victimType 또는 E열 구분2 헤더 기준 직접 매핑
      const rawType = String(x.victimType || x['구분2'] || x.victim || "").replace(/[\r\n]+/g, " ").trim();
      return empKeywords.some(kw => rawType.includes(kw));
    });

    icon = "⛑️";
    state.currentKpiDrillIcon = icon;

    if (isFiltered) {
      // 선택 필터 적용 상태: 기본 연도 제한 없이 선택 범위 내 전체 직원 사고 표출
      state.kpiDrillYearFilter = "all";
      if (yearSelect) yearSelect.value = "all";
      if (yearWrap) yearWrap.style.display = "none";
      state.currentKpiDrillTitle = "[선택 기간 직원 안전사고] 세부 내역";
      state.currentKpiDrillSub = "현재 필터링 조건에 부합하는 임직원·캐디 안전사고 목록";
    } else {
      // 전체 누적 상태: 당해 연도(2026년)를 기본 선택하여 제공
      if (yearWrap) yearWrap.style.display = "flex";
      const defaultYear = String(currentYear);
      state.kpiDrillYearFilter = defaultYear;
      if (yearSelect) yearSelect.value = defaultYear;
      state.currentKpiDrillTitle = `[${currentYear}년 직원 안전사고] 세부 내역`;
      state.currentKpiDrillSub = `${currentYear}년 발생한 임직원·캐디·진행원 산재 및 안전사고 목록`;
    }

    updateKpiDrilldownData();

  } else {
    if (yearWrap) yearWrap.style.display = "none";
    state.kpiDrillYearFilter = "all";

    if (type === "year2026") {
      filtered = targetList.filter(x => {
        const p = parseIncidentDate(x);
        return (x.year === currentYear) || (p && p.getFullYear() === currentYear) || String(x.date || x.occurredAt || "").includes(String(currentYear));
      });
      icon = "📅";
      title = isFiltered ? `[선택 기간 당해 사고] 세부 내역` : `[${currentYear}년 당해 사고] 세부 내역`;
      sub = isFiltered ? `선택 기간에 발생한 당해(${currentYear}년) 안전사고 목록` : `${currentYear}년에 발생한 안전사고 전체 목록`;
    } else if (type === "golfCC") {
      const ccKeywords = ["밸리", "성문안", "힐스", "월송리"];
      filtered = targetList.filter(x => {
        if (!x) return false;
        const isCC = ccKeywords.some(cc => 
          x.dept?.includes(cc) || 
          x.businessUnit?.includes(cc) || 
          x.department?.includes(cc) || 
          x.division?.includes(cc) ||
          x.resort?.includes(cc) || 
          x.place?.includes(cc) || 
          x.location?.includes(cc) || 
          x.locationDetail?.includes(cc) ||
          x.title?.includes(cc) ||
          (typeof getIncidentDept === "function" && getIncidentDept(x)?.includes(cc))
        );
        if (isCC) return true;
        const loc = (String(x.place || x.location || x.locationDetail || "") + " " + String(x.zone || "")).toLowerCase();
        if (loc.includes("코스") || loc.includes("홀") || loc.includes("그린") || loc.includes("티잉") || loc.includes("카트도로")) return true;
        return false;
      });
      icon = "⛳";
      title = `[골프장(4대 CC) 사고] 세부 내역`;
      sub = isFiltered 
        ? `선택 기간 밸리팀 · 힐스팀 · 성문안팀 · 월송리팀 골프 코스 안전사고 목록` 
        : `밸리팀 · 힐스팀 · 성문안팀 · 월송리팀 골프 코스 안전사고 목록`;
    } else {
      // 전체 누적 사고
      filtered = targetList;
      icon = "📊";
      title = isFiltered ? `[선택 기간 사고] 세부 내역` : `[전체 누적 사고] 세부 내역`;
      sub = isFiltered ? `현재 필터링 조건에 부합하는 안전사고 목록` : `등록된 모든 연도 안전사고 전체 내역`;
    }

    filtered.sort((a, b) => {
      const da = parseIncidentDate(a)?.getTime() || 0;
      const db = parseIncidentDate(b)?.getTime() || 0;
      return db - da;
    });

    state.kpiDrilldownBaseList = filtered;
    state.kpiDrilldownList = filtered;
    state.currentKpiDrillIcon = icon;
    state.currentKpiDrillTitle = title;
    state.currentKpiDrillSub = sub;

    const titleEl = document.getElementById("kpi-drilldown-title");
    const subEl = document.getElementById("kpi-drilldown-sub");
    const iconEl = document.getElementById("kpi-drilldown-icon");

    if (titleEl) titleEl.textContent = `${title} (총 ${filtered.length.toLocaleString()}건)`;
    if (subEl) subEl.textContent = sub;
    if (iconEl) iconEl.textContent = icon;

    renderKpiDrilldownTable();
  }

  state.kpiDrillVictimFilter = "all";
  const victimSel = document.getElementById("kpi-drill-filter-victim");
  if (victimSel) victimSel.value = "all";

  state.kpiDrillReportFilter = "all";
  const reportSel = document.getElementById("kpi-drill-filter-report");
  if (reportSel) reportSel.value = "all";

  // [신규] 사고유형 드롭다운 옵션 자동 생성 및 초기화
  state.kpiDrillTypeFilter = "all";
  const typeSel = document.getElementById("kpi-drill-filter-type");
  if (typeSel) {
    const uniqueTypes = [...new Set((state.kpiDrilldownBaseList || []).map(item => {
      return (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "";
    }).filter(Boolean))].sort();

    typeSel.innerHTML = `<option value="all">전체 사고유형</option>` +
      uniqueTypes.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join("");
    typeSel.value = "all";
  }

  const modal = document.getElementById("kpi-drilldown-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  }
}
window.openKpiDrilldown = openKpiDrilldown;

function renderKpiDrilldownTable() {
  const tbody = document.getElementById("kpi-drilldown-tbody");
  if (!tbody) return;

  let list = state.kpiDrilldownList || [];
  if (state.kpiDrillVictimFilter && state.kpiDrillVictimFilter !== "all") {
    list = list.filter(item => classifyVictim(item).category === state.kpiDrillVictimFilter);
  }
  if (state.kpiDrillReportFilter && state.kpiDrillReportFilter !== "all") {
    list = list.filter(item => {
      const rep = item.industrialAccident || item.reportStatus || item.industrialAccidentReport || "해당 없음";
      if (state.kpiDrillReportFilter === "제출완료") return rep === "제출완료";
      if (state.kpiDrillReportFilter === "해당 없음") return rep !== "제출완료";
      return true;
    });
  }
  if (state.kpiDrillTypeFilter && state.kpiDrillTypeFilter !== "all") {
    list = list.filter(item => {
      const cat = (typeof getIncidentCategory === "function" ? getIncidentCategory(item) : "") || item.category || item.type || "";
      return cat === state.kpiDrillTypeFilter;
    });
  }

  const footerInfoEl = document.getElementById("kpi-drilldown-footer-info");
  if (footerInfoEl) {
    const totalCount = (state.kpiDrilldownList || []).length;
    footerInfoEl.textContent = `총 ${list.length.toLocaleString()}건 조회됨 (전체 ${totalCount.toLocaleString()}건 중)`;
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="11" style="text-align: center; color: #64748b; padding: 2.5rem 1rem;">
          <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">📂</div>
          <div style="font-weight: 600; color: #334155;">조건에 해당하는 사고 건이 없습니다.</div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map((item, idx) => {
    let statusClass = "badge-status-resolved";
    if (item.status === "조사/진행중") statusClass = "badge-status-investigating";
    if (item.status === "보험/보상진행") statusClass = "badge-status-insurance";
    if (item.status === "접수대기") statusClass = "badge-status-pending";

    const teamName = String(item.team || item['구분1'] || item.resort || "미분류").replace(/[\r\n]+/g, " ").trim();
    const deptName = String(item.department || item['부문/부서'] || item.division || (item.dept && item.dept !== teamName ? item.dept : "") || "").replace(/[\r\n]+/g, " ").trim();
    const displayLocation = item.displayLocation || ((deptName && deptName !== teamName) ? `${teamName} (${deptName})` : teamName);
    const desc = item.title || item.locationDetail || "사고 개요 없음";
    const vInfo = classifyVictim(item);
    const docNoDisplay = item.docNo || item.documentNumber || item.id || "-";
    const reportBadge = getReportStatusBadge(item.reportStatus || item.industrialAccidentReport || "해당 없음");

    return `
      <tr class="drilldown-incident-row" onclick="navigateToDetailFromKpiDrilldown('${escapeHtml(item.id)}')" title="클릭하여 사고 상세 정보 조회 및 수정">
        <td style="text-align: center; color: #64748b; font-size: 0.8rem;">${idx + 1}</td>
        <td class="id-cell font-mono text-[12px] whitespace-nowrap" style="min-width: 145px; width: 145px; white-space: nowrap; font-family: monospace; font-size: 12px; font-weight: 700; color: #2563eb;">${escapeHtml(docNoDisplay)}</td>
        <td style="color: #475569; font-weight: 500; font-size: 0.83rem; white-space: nowrap;">${escapeHtml(item.date || item.occurredAt || "-")}</td>
        <td style="font-weight: 600; color: #0f172a; font-size: 0.84rem;">${escapeHtml(displayLocation)}</td>
        <td style="text-align: center;">
          <span class="badge ${vInfo.badgeClass}" style="${vInfo.inlineStyle}">${escapeHtml(vInfo.label)}</span>
        </td>
        <td style="font-size: 0.82rem; color: #334155;">${escapeHtml(item.locationDetail || item.zone || "-")}</td>
        <td>
          <span class="badge badge-category" style="font-size: 0.74rem; font-weight: 600;">${escapeHtml(getIncidentCategory(item))}</span>
        </td>
        <td class="overview-cell" style="font-size: 0.84rem; color: #1e293b;" title="${escapeHtml(desc)}">
          <div style="max-height: 2.6em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.35; font-weight: 600;">
            ${escapeHtml(desc)}
          </div>
        </td>
        <td style="text-align: center; white-space: nowrap;">
          ${reportBadge}
        </td>
        <td style="text-align: center;">
          <span class="badge ${statusClass}" style="font-size: 0.74rem;">${escapeHtml(item.status || "접수대기")}</span>
        </td>
        <td style="text-align: center;">
          <button type="button" class="btn btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="event.stopPropagation(); navigateToDetailFromKpiDrilldown('${escapeHtml(item.id)}')">
            조회
          </button>
        </td>
      </tr>
    `;
  }).join("");
}
window.renderKpiDrilldownTable = renderKpiDrilldownTable;

function navigateToDetailFromKpiDrilldown(id) {
  const tableWrap = document.getElementById("kpi-drilldown-table-wrap");
  const scrollTop = tableWrap ? tableWrap.scrollTop : 0;
  detailModalOrigin = {
    fromModalId: "kpi-drilldown-modal",
    scrollTop: scrollTop
  };

  const modal = document.getElementById("kpi-drilldown-modal");
  if (modal) modal.classList.remove("active");

  setTimeout(() => {
    openIncidentDetail(id, detailModalOrigin);
  }, 50);
}
window.navigateToDetailFromKpiDrilldown = navigateToDetailFromKpiDrilldown;


// ==========================================================================
// 3-B. 엑셀 파싱 완료 후 실행되는 마스터 데이터 동기화 핸들러
// ==========================================================================
function handleExcelUploadSuccess(uploadedData) {
  if (!uploadedData || uploadedData.length === 0) {
    alert("유효한 사고 데이터가 없습니다.");
    return;
  }

  // 1. 기존 데이터 뒤에 붙이지 않고(append X), 마스터 엑셀 내용으로 통째로 교체
  sortIncidentsList(uploadedData, "id", "desc");
  state.incidents = uploadedData;

  // 2. 브라우저 로컬 저장소 덮어쓰기 (강력 새로고침 시 버전 체크로 리셋되지 않도록 방어 처리)
  try {
    const jsonStr = JSON.stringify(uploadedData);
    localStorage.setItem('resort_incidents_master', jsonStr);
    localStorage.setItem('resort_base_template_data', jsonStr);
    localStorage.setItem('resort_incidents_data', jsonStr);
    localStorage.setItem('resort_incident_records_v2', jsonStr);
    localStorage.setItem(VERSION_KEY, window.APP_DATA_VERSION);
  } catch (err) {
    console.error("마스터 엑셀 로컬스토리지 덮어쓰기 실패:", err);
  }
  const storageInst = (typeof IncidentStorage !== 'undefined') ? IncidentStorage : (typeof window !== 'undefined' ? window.IncidentStorage : null);
  if (storageInst && storageInst.saveAll) {
    storageInst.saveAll(uploadedData);
  }

  // 3. 마지막 동기화 일시 및 건수 갱신
  const syncTime = new Date().toLocaleString();
  state.lastSyncTime = syncTime;
  try {
    localStorage.setItem('resort_incidents_last_sync', syncTime);
  } catch (_) {}

  // 4. 화면 필터 및 전체 지표/차트 즉시 갱신
  state.filters.search = "";
  state.filters.resort = "all";
  state.filters.dept = "all";
  state.filters.category = "all";
  state.filters.victimType = "all";
  state.filters.severity = "all";
  state.filters.status = "all";
  state.filters.period = "all";
  state.filters.zone = "all";
  state.filters.reportStatus = "all";
  state.currentPage = 1;
  state.sort = { column: "id", order: "desc" };

  document.querySelectorAll(".period-btn").forEach(b => b.classList.remove("active"));
  const allPeriodBtn = document.querySelector(".period-btn[data-period='all']");
  if (allPeriodBtn) allPeriodBtn.classList.add("active");

  populateFilterDropdowns();
  applyFilters();
  renderKPIs();
  if (typeof renderAllCharts === "function") renderAllCharts();
  updateLastSyncTimeDisplay();

  showToast(`새 마스터 엑셀(${uploadedData.length.toLocaleString()}건)이 기본 데이터로 등록되었습니다.`, "success");
  alert(`새 마스터 엑셀(${uploadedData.length}건)이 기본 데이터로 등록되었습니다.`);
}
window.handleExcelUploadSuccess = handleExcelUploadSuccess;

// 1. 엑셀 불러오기 성공 시: 현재 상태와 '마스터 기준값'을 동시에 갱신
const handleExcelUpload = function(uploadedRows) {
  handleExcelUploadSuccess(uploadedRows);
};
window.handleExcelUpload = handleExcelUpload;

// 2. 샘플 초기화 버튼 클릭 시: 마지막으로 등록했던 엑셀이 있으면 그 파일로 원복
function handleResetSample() {
  if (!confirm("모든 수정 내역을 취소하고 마지막으로 등록한 마스터 엑셀 상태로 되돌리시겠습니까?")) {
    return;
  }

  const savedBaseExcel = localStorage.getItem('resort_base_template_data') || localStorage.getItem('resort_incidents_master');
  const defaultList = (typeof window.initialIncidents !== "undefined" && Array.isArray(window.initialIncidents) && window.initialIncidents.length > 0)
    ? window.initialIncidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);
  const baseData = savedBaseExcel ? JSON.parse(savedBaseExcel) : defaultList;

  baseData.forEach(item => normalizeIncident(item));
  sortIncidentsList(baseData, "docNo", "desc");
  state.incidents = baseData;

  const jsonStr = JSON.stringify(baseData);
  localStorage.setItem('resort_incidents_master', jsonStr);
  localStorage.setItem('resort_base_template_data', jsonStr);
  localStorage.setItem('resort_incidents_data', jsonStr);
  localStorage.setItem('resort_incident_records_v2', jsonStr);
  localStorage.setItem(VERSION_KEY, window.APP_DATA_VERSION);
  const storageInst = (typeof IncidentStorage !== 'undefined') ? IncidentStorage : (typeof window !== 'undefined' ? window.IncidentStorage : null);
  if (storageInst && storageInst.saveAll) {
    storageInst.saveAll(baseData);
  }

  populateFilterDropdowns();
  applyFilters();
  renderKPIs();
  if (typeof renderAllCharts === "function") renderAllCharts();
  updateLastSyncTimeDisplay();

  alert(`데이터가 마스터 엑셀 기준(${baseData.length}건)으로 복원되었습니다.`);
  showToast(`데이터가 마스터 엑셀 기준(${baseData.length}건)으로 복원되었습니다.`, "info");
}
window.handleResetSample = handleResetSample;

function updateLastSyncTimeDisplay() {
  const syncTime = state.lastSyncTime || (typeof localStorage !== "undefined" ? localStorage.getItem('resort_incidents_last_sync') : null);
  const importBtn = document.getElementById("btn-import-excel");
  if (importBtn && syncTime) {
    importBtn.title = `실무 엑셀(.xlsx, .xls) 파일 대량 불러오기 (최근 마스터 동기화: ${syncTime})`;
  }
}
window.updateLastSyncTimeDisplay = updateLastSyncTimeDisplay;
