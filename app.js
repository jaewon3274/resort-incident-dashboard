
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
    const c = x.category || "기타";
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
          <td><span style="font-weight: 600;">${escapeHtml(item.category || "기타")}</span></td>
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
const state = {
  incidents: [],
  filteredIncidents: [],
  filters: {
    search: "",
    resort: "all",
    dept: "all",
    category: "all",
    severity: "all",
    status: "all",
    period: "all",
    zone: "all"
  },
  currentPage: 1,
  pageSize: 10,
  sort: {
    column: "id",
    order: "desc"
  },
  currentDetailId: null,
  isEditMode: false,
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

// Navigation History for Detail Modal Back-Navigation
let detailModalOrigin = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();
  loadData();
  updateSortHeaderUI();
  setupEventListeners();
  setupCostModalEvents();
  populateFilterDropdowns();
  applyFilters();
});

// Load Data from LocalStorage (1순위: localStorage 'resort_incidents_data' 영구 데이터)
function loadData() {
  let stored = null;
  try {
    // 1. 반드시 localStorage.getItem('resort_incidents_data')가 존재하는지 먼저 확인
    stored = localStorage.getItem("resort_incidents_data");
    if (!stored) {
      // 레거시 키 호환 확인
      const legacyData = localStorage.getItem("resort_incident_records_v2");
      if (legacyData) {
        stored = legacyData;
        localStorage.setItem("resort_incidents_data", legacyData);
      }
    }
  } catch (err) {
    console.warn("로컬스토리지 접근 제한:", err);
  }

  // 2. 저장된 데이터가 1건이라도 존재하면, data.js의 샘플 데이터를 절대 덮어쓰지 않고 로컬스토리지 데이터를 1순위로 화면에 로드
  if (stored) {
    try {
      const records = JSON.parse(stored);
      if (Array.isArray(records) && records.length > 0) {
        let migrated = false;
        records.forEach(item => {
          if (item.companyAmount === 350000 || item.companyAmount === 1800000 || item.companyAmount === 150000 || item.companyAmount === 4800000 || item.cost > 0 || item.companyAmount > 0) {
            item.cost = 0;
            item.totalAmount = 0;
            item.companyAmount = 0;
            item.personalAmount = 0;
            if (item.faultRatio === '당사 70% : 고객 30%') item.faultRatio = '과실 미산정';
            migrated = true;
          }
          // 4대 CC 전담팀 매핑 및 콘도/부대시설 데이터 완전 격리 마이그레이션
          const correctDept = inferDeptFromIncident(item);
          if (item.dept !== correctDept) {
            item.dept = correctDept;
            migrated = true;
          }
        });
        state.incidents = records;
        sortIncidentsList(state.incidents, "id", "desc");
        if (migrated) {
          try {
            localStorage.setItem("resort_incidents_data", JSON.stringify(state.incidents));
          } catch (_) {}
        }
        console.log(`[Dashboard] 로컬스토리지에서 총 ${state.incidents.length}건의 데이터를 최신순 정렬하여 로드했습니다.`);
        return;
      }
    } catch (e) {
      console.error("로컬스토리지 데이터 파싱 실패:", e);
    }
  }

  // 3. 로컬스토리지에 저장된 데이터가 전혀 없을 때만 data.js의 기본 데이터 로드
  const defaultList = (typeof window.initialIncidents !== "undefined" && Array.isArray(window.initialIncidents) && window.initialIncidents.length > 0)
    ? window.initialIncidents
    : (typeof INITIAL_INCIDENTS !== "undefined" && Array.isArray(INITIAL_INCIDENTS) ? INITIAL_INCIDENTS : []);

  state.incidents = JSON.parse(JSON.stringify(defaultList));
  state.incidents.forEach(item => {
    item.dept = inferDeptFromIncident(item);
  });
  sortIncidentsList(state.incidents, "id", "desc");

  // 로컬스토리지에 영구 저장
  try {
    localStorage.setItem("resort_incidents_data", JSON.stringify(state.incidents));
    console.log(`[Dashboard] data.js 기본 데이터(${state.incidents.length}건)를 로컬스토리지에 초기 영구 저장했습니다.`);
  } catch (e) {
    console.error("로컬스토리지 초기 저장 에러:", e);
  }
}

// Setup Main Event Listeners
function setupEventListeners() {
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
  const totalCard = document.getElementById("kpi-card-total") || document.getElementById("kpi-card-trend");
  if (totalCard) totalCard.addEventListener("click", openTrendAnalysisModal);

  const card2026 = document.getElementById("kpi-card-2026");
  if (card2026) card2026.addEventListener("click", () => openKpiDrilldown("year2026"));

  const cardEmployee = document.getElementById("kpi-card-employee");
  if (cardEmployee) cardEmployee.addEventListener("click", () => openKpiDrilldown("employee2026"));

  const cardGolf = document.getElementById("kpi-card-golf");
  if (cardGolf) cardGolf.addEventListener("click", () => openKpiDrilldown("golfCC"));

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
      state.filters.zone = "all";
      state.filters.severity = "all";

      const tableCat = document.getElementById("table-filter-category");
      if (tableCat) tableCat.value = "all";
      const tableZone = document.getElementById("table-filter-zone");
      if (tableZone) tableZone.value = "all";
      const tableSev = document.getElementById("table-filter-severity");
      if (tableSev) tableSev.value = "all";

      const mainCat = document.getElementById("filter-category");
      if (mainCat) mainCat.value = "all";
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

  // Reset Data Button (오직 사용자가 버튼을 직접 클릭하여 확인했을 때만 초기화)
  const resetBtn = document.getElementById("btn-reset-data");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      const defaultList = (typeof window.initialIncidents !== "undefined" && Array.isArray(window.initialIncidents))
        ? window.initialIncidents
        : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);
      const count = defaultList.length;

      if (confirm(`데이터를 영구 기본 데이터(총 ${count}건)로 초기화하시겠습니까?\n\n※ 로컬스토리지에 저장된 사용자 수정 및 추가 데이터가 기본값으로 복원됩니다.`)) {
        state.incidents = IncidentStorage.reset();
        populateFilterDropdowns();
        applyFilters();
        showToast(`기본 데이터(${count}건)로 초기화되었습니다.`, "info");
      }
    });
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

      registerModal.classList.add("active");
      document.body.classList.add("modal-open");
    });
  }

  const closeRegister = () => {
    if (registerModal) registerModal.classList.remove("active");
    if (registerForm) registerForm.reset();
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

  // 1. 최소 최근 4개년(2023년 ~ 2026년) 기본 연도 fallback 보장
  const defaultYears = ["2026", "2025", "2024", "2023"];
  const yearsSet = new Set(defaultYears);

  // 2. 전체 사고 데이터의 '발생일시(occurDate/date)' 또는 '기안일(reportDate)'에서 4자리 연도(YYYY) 모두 수집
  (state.incidents || []).forEach(item => {
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

  // Filter incidents in period
  const filteredInPeriod = state.incidents.filter(item => {
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

  // Filter records where company paid amount > 0
  const costItems = filteredInPeriod.filter(item => {
    const paidAmount = parseNumericCost(item.companyAmount !== undefined ? item.companyAmount : item.cost);
    return paidAmount > 0;
  });

  // Calculate totals
  const totalAmount = costItems.reduce((acc, curr) => {
    return acc + parseNumericCost(curr.companyAmount !== undefined ? curr.companyAmount : curr.cost);
  }, 0);

  const count = costItems.length;
  const avgCost = count > 0 ? Math.round(totalAmount / count) : 0;

  // Render Highlight Banner
  let periodText = "전체 기간 당사 지급 총액";
  if (year !== "all" && year !== "custom") {
    periodText = `${year}년 당사 지급 총액`;
  } else if (from || to) {
    periodText = `${from || '초기'} ~ ${to || '현재'} 기간 당사 지급 총액`;
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

  // Render Table: 실데이터에 비용이 없는 경우 해당 기간의 사고 목록을 렌더링하고 '당사 지급 금액' 열에 '0원'으로 정확히 표기
  const tableBody = document.getElementById("cost-table-body");
  if (!tableBody) return;

  const displayItems = costItems.length > 0 ? costItems : filteredInPeriod;

  if (displayItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
          <div style="font-size: 1.8rem; margin-bottom: 0.35rem;">💳</div>
          <div>선택한 기간에 등록된 사고 데이터가 없습니다.</div>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displayItems.map(item => {
    const paid = parseNumericCost(item.companyAmount !== undefined ? item.companyAmount : item.cost);
    const paidText = paid > 0 ? formatCurrency(paid) : "0원";
    const cellStyle = paid > 0 ? "font-weight: 700; color: #2563eb;" : "font-weight: 600; color: #64748b;";
    return `
      <tr onclick="navigateToDetailFromCost('${escapeHtml(item.id)}')">
        <td class="id-cell">${escapeHtml(item.id)}</td>
        <td style="color:#475569; font-size:0.82rem;">${escapeHtml(item.date)}</td>
        <td>
          <span style="font-weight:600; color:#1e293b;">${escapeHtml(item.resort)}</span>
          <span style="color:#64748b; font-size:0.75rem; margin-left:0.25rem;">(${escapeHtml(item.locationDetail || '-')})</span>
        </td>
        <td>
          <span class="badge badge-category">${escapeHtml(item.category)}</span>
        </td>
        <td class="cost-amount-cell" style="text-align: right; ${cellStyle}">
          ${paidText}
        </td>
      </tr>
    `;
  }).join("");
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

  renderTrendAnalysis();
  modal.classList.add("active");
  document.body.classList.add("modal-open");
}

function renderTrendAnalysis() {
  const allIncidents = state.incidents || [];

  // 1. 연도별(2023~2026) 연간 발생 건수 비교 미니 차트
  const years = ["2023", "2024", "2025", "2026"];
  const yearCounts = { "2023": 0, "2024": 0, "2025": 0, "2026": 0 };

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
    const uniqueResorts = [...new Set(allIncidents.map(i => i.resort).filter(Boolean))].sort();
    const currentVal = resortSelect.value || "all";
    resortSelect.innerHTML = `<option value="all">전체 사업장 (월별 합산)</option>` +
      uniqueResorts.map(r => `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`).join("");
    resortSelect.value = uniqueResorts.includes(currentVal) ? currentVal : "all";
  }

  renderTrendMonthlyChart(resortSelect ? resortSelect.value : "all");

  // 3. 최다 발생 사고 사업장 TOP 3
  const resortCounts = {};
  allIncidents.forEach(item => {
    const r = item.resort || "기타";
    resortCounts[r] = (resortCounts[r] || 0) + 1;
  });
  const topResorts = Object.entries(resortCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const totalCount = allIncidents.length || 1;

  const topResortsEl = document.getElementById("trend-top-resorts");
  if (topResortsEl) {
    topResortsEl.innerHTML = topResorts.map(([name, cnt], idx) => `
      <div class="top-rank-item">
        <span class="top-rank-badge rank-${idx + 1}">${idx + 1}</span>
        <span class="top-rank-name">${escapeHtml(name)}</span>
        <span class="top-rank-count">${cnt}건 <span class="top-rank-pct">(${((cnt / totalCount) * 100).toFixed(1)}%)</span></span>
      </div>
    `).join("");
  }

  // 4. 최다 발생 사고유형 TOP 3
  const categoryCounts = {};
  allIncidents.forEach(item => {
    const c = item.category || "기타";
    categoryCounts[c] = (categoryCounts[c] || 0) + 1;
  });
  const topCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);

  const topCatEl = document.getElementById("trend-top-categories");
  if (topCatEl) {
    topCatEl.innerHTML = topCategories.map(([name, cnt], idx) => `
      <div class="top-rank-item">
        <span class="top-rank-badge rank-${idx + 1}">${idx + 1}</span>
        <span class="top-rank-name">${escapeHtml(name)}</span>
        <span class="top-rank-count" style="color: #b45309; font-weight: 700;">${cnt}건 <span class="top-rank-pct">(${((cnt / totalCount) * 100).toFixed(1)}%)</span></span>
      </div>
    `).join("");
  }
}

function renderTrendMonthlyChart(selectedResort = "all") {
  const allIncidents = state.incidents || [];
  const targetIncidents = selectedResort === "all"
    ? allIncidents
    : allIncidents.filter(i => i.resort === selectedResort);

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
  const origDept = (item.dept || "").trim();
  const resort = (item.resort || "").trim();
  const loc = (item.locationDetail || "").trim();
  const zone = (item.zone || "").trim();
  const title = (item.title || "").trim();
  const desc = (item.description || "").trim();
  const cat = (item.category || "").trim();
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
      const catSelect = document.getElementById("filter-category");
      if (catSelect) catSelect.value = value;
      const tableCat = document.getElementById("table-filter-category");
      if (tableCat) tableCat.value = value;
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

      const count = parsedRecords.length;
      const confirmMerge = confirm(
        `엑셀 파일에서 총 ${count.toLocaleString()}건의 사고 기록을 읽어왔습니다.\n\n` +
        `• [확인]을 누르면: 기존 데이터에 '추가 병합'합니다.\n` +
        `• [취소]를 누르면: 기존 데이터를 비우고 '새 엑셀 데이터로 완전 대체'합니다.`
      );

      let finalMerged = [];
      if (confirmMerge) {
        const currentList = (state.incidents && state.incidents.length > 0) ? state.incidents : IncidentStorage.getAll();
        const incomingMap = new Map();
        parsedRecords.forEach(item => incomingMap.set(item.id, item));

        const retained = currentList.filter(item => !incomingMap.has(item.id));
        finalMerged = [...parsedRecords, ...retained];
        showToast(`총 ${count}건의 엑셀 데이터를 기존 데이터에 병합 완료했습니다. (전체 ${finalMerged.length}건)`, "success");
      } else {
        finalMerged = parsedRecords;
        showToast(`기존 데이터를 교체하고 총 ${count}건의 엑셀 데이터를 불러왔습니다.`, "success");
      }

      // [엑셀 파일 업로드 완료 시]:
      // 파싱된 전체 데이터를 즉시 localStorage.setItem('resort_incidents_data', JSON.stringify(...))에 영구 저장
      try {
        localStorage.setItem("resort_incidents_data", JSON.stringify(finalMerged));
        localStorage.setItem("resort_incident_records_v2", JSON.stringify(finalMerged));
      } catch (err) {
        console.error("엑셀 업로드 데이터 로컬스토리지 영구 저장 실패:", err);
      }
      sortIncidentsList(finalMerged, "id", "desc");
      IncidentStorage.saveAll(finalMerged);
      state.incidents = finalMerged;
      state.sort = { column: "id", order: "desc" };

      state.filters.search = "";
      state.filters.resort = "all";
      state.filters.category = "all";
      state.filters.status = "all";
      state.filters.period = "all";
      state.currentPage = 1;

      document.querySelectorAll(".period-btn").forEach(b => b.classList.remove("active"));
      const allPeriodBtn = document.querySelector(".period-btn[data-period='all']");
      if (allPeriodBtn) allPeriodBtn.classList.add("active");

      populateFilterDropdowns();
      applyFilters();

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

// Convert Excel Rows to Dashboard Incident Objects
function parseExcelRows(rawRows) {
  const result = [];
  let rowIdx = 1;

  for (const row of rawRows) {
    let docNo = getColValue(row, ["문서번호", "문서 번호", "docNo", "DocNo", "사고번호", "관리번호", "No", "NO", "번호"]);
    if (!docNo) {
      docNo = `2026-H${String(1000 + rowIdx).padStart(4, "0")}-${String(rowIdx).padStart(6, "0")}`;
    }

    const dept = getColValue(row, ["부문/부서", "부문", "부서", "소속", "dept", "Dept", "담당부서"], "리조트운영팀");
    const resort = getColValue(row, ["구분1", "사업장", "리조트", "사업부", "area", "구분", "골프장"], "IPARK 리조트");
    const locationDetail = getColValue(row, ["위치(세부)", "위치(상세)", "위치", "세부위치", "발생장소", "장소", "locationDetail"], "공용 구역");
    const victimType = getColValue(row, ["구분2", "대상", "피해자구분", "피해자", "victimType", "고객구분"], "고객");
    let reportDate = getColValue(row, ["기안일", "기안일자", "보고일", "등록일", "reportDate"], "");
    if (/^\d{5}$/.test(String(reportDate).trim())) {
      const serial = parseInt(reportDate, 10);
      const utc_days = Math.floor(serial - 25569);
      const utc_value = utc_days * 86400;
      const date_info = new Date(utc_value * 1000);
      reportDate = date_info.toISOString().slice(0, 10);
    }
    reportDate = String(reportDate).replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();

    let occurDate = getColValue(row, ["발생일시", "발생일", "일시", "발생 일시", "사고일시", "occurDate", "Date"]);
    if (/^\d{5}$/.test(String(occurDate).trim())) {
      const serial = parseInt(occurDate, 10);
      const utc_days = Math.floor(serial - 25569);
      const utc_value = utc_days * 86400;
      const date_info = new Date(utc_value * 1000);
      occurDate = date_info.toISOString().slice(0, 10);
    }
    if (!occurDate) {
      occurDate = reportDate || new Date().toISOString().slice(0, 10);
    } else {
      occurDate = String(occurDate).replace(/[\r\n]+/g, " ").replace(/\s+/g, " ").trim();
    }

    const category = getColValue(row, ["사고유형", "유형", "사고종류", "분류", "incidentType", "사고구분"], "기타");
    const description = getColValue(row, ["내용", "상세내용", "사고내용", "사고경위", "경위", "개요", "description"], "경위 기록 없음");

    let title = getColValue(row, ["제목", "사고제목", "건명", "title"]);
    if (!title) {
      const locPrefix = locationDetail && locationDetail !== "공용 구역" ? `[${locationDetail}]` : (resort ? `[${resort}]` : "");
      const catSuffix = category ? `${category} 사고` : "안전 사고";
      title = `${locPrefix} ${catSuffix}`.trim();
    }

    const faultRatio = getColValue(row, ["과실비율", "과실", "과실율", "faultRatio"], "과실 미산정");
    const totalAmount = parseNumericCost(getColValue(row, ["총금액", "총 금액", "총금액(원)", "손해액", "totalAmount"], "0"));
    const companyAmount = parseNumericCost(getColValue(row, ["당사지급금액", "당사지급액", "당사 지급 금액", "보상금액", "companyAmount", "지급금액"], "0"));
    const personalAmount = parseNumericCost(getColValue(row, ["본인부담금", "본인 부담금", "자부담", "personalAmount"], "0"));

    const zone = inferZoneFromLocation(locationDetail, dept, resort);
    const severity = inferSeverity(description, category);
    const status = getColValue(row, ["처리상태", "상태", "진행상태", "status"], "조치완료");
    const manager = getColValue(row, ["담당자", "담당", "작성자", "manager"], dept || "안전관리팀");

    const actionTaken = getColValue(row, ["조치내역", "초동조치", "조치", "actionTaken"], "현장 초동 조치 및 고객 케어 완료");
    const preventiveMeasure = getColValue(row, ["재발방지대책", "예방대책", "개선대책", "preventiveMeasure"], "시설 및 운영 프로세스 점검 강화");

    result.push({
      id: docNo,
      date: occurDate,
      resort,
      zone,
      locationDetail,
      category,
      severity,
      victimType,
      victimName: getColValue(row, ["피해자명", "고객명", "성명", "이름"], "익명"),
      title,
      description,
      actionTaken,
      preventiveMeasure,
      status,
      cost: companyAmount,
      faultRatio,
      totalAmount,
      companyAmount,
      personalAmount,
      manager,
      dept,
      reportDate,
      timeline: [
        { time: occurDate, note: "사고 발생 접수" },
        { time: occurDate, note: `조치 내역: ${actionTaken.slice(0, 40)}` }
      ]
    });

    rowIdx++;
  }

  return result;
}

// Location & Dept Based Zone Inference
function inferZoneFromLocation(location, dept, resort) {
  const text = `${location} ${dept} ${resort}`.toLowerCase();

  if (text.includes("스파") || text.includes("사우나") || text.includes("냉탕") || text.includes("온탕") || text.includes("열탕") || text.includes("락커")) {
    return "사우나/스파";
  }
  if (text.includes("풀") || text.includes("수영") || text.includes("자쿠지") || text.includes("워터") || text.includes("아쿠아") || text.includes("슬라이드")) {
    return "수영장/워터플레이";
  }
  if (text.includes("벙커") || text.includes("홀") || text.includes("티잉") || text.includes("그린") || text.includes("페어웨이") || text.includes("카트") || text.includes("골프") || text.includes("코스") || text.includes("클럽하우스")) {
    return "골프 코스";
  }
  if (text.includes("객실") || text.includes("호실") || text.includes("스위트") || text.includes("욕조") || text.includes("화장실") || text.includes("콘도")) {
    return "객실";
  }
  if (text.includes("레스토랑") || text.includes("식당") || text.includes("카페") || text.includes("바비큐") || text.includes("그릴") || text.includes("다이닝") || text.includes("주방") || text.includes("f&b")) {
    return "레스토랑/F&B";
  }
  if (text.includes("산책") || text.includes("숨길") || text.includes("데크") || text.includes("가든") || text.includes("광장") || text.includes("잔디") || text.includes("정원") || text.includes("야외")) {
    return "산책로/야외공원";
  }
  if (text.includes("주차") || text.includes("램프") || text.includes("도로") || text.includes("승하차") || text.includes("셔틀")) {
    return "주차장/도로";
  }
  if (text.includes("로비") || text.includes("회전문") || text.includes("에스컬레이터") || text.includes("엘리베이터") || text.includes("센터") || text.includes("프런트")) {
    return "로비/공용공간";
  }
  if (text.includes("트램펄린") || text.includes("키즈") || text.includes("요가") || text.includes("웰니스") || text.includes("피트니스") || text.includes("렌탈")) {
    return "레저/부대시설";
  }

  if (dept && dept.includes("골프")) return "골프 코스";
  if (dept && dept.includes("콘도")) return "객실";
  return "기타 부대시설";
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

  // 사고 객체가 직접 전달된 경우 date -> occurDate -> reportDate 순으로 추출
  const raw = typeof input === "object" && !(input instanceof Date)
    ? String(input.date || input.occurDate || input.reportDate || "")
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
    const uniqueResorts = [...new Set(state.incidents.map(i => i.resort).filter(Boolean))].sort();

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
    const allDepts = [...new Set(state.incidents.map(i => i.dept || inferDeptFromIncident(i)).filter(Boolean))];
    
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
  const uniqueCategories = [...new Set(state.incidents.map(i => i.category).filter(Boolean))].sort();
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

  document.getElementById("edit-id").value = item.id;
  document.getElementById("edit-date").value = item.date;
  document.getElementById("edit-resort").value = item.resort;
  const editDeptEl = document.getElementById("edit-dept");
  if (editDeptEl) editDeptEl.value = item.dept || inferDeptFromIncident(item);
  document.getElementById("edit-zone").value = item.zone || "객실";
  document.getElementById("edit-location-detail").value = item.locationDetail || "";
  document.getElementById("edit-category").value = item.category;
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
}

// Handle Save Edit Action
function handleSaveEdit() {
  const id = state.currentDetailId;
  if (!id) return;

  const item = state.incidents.find(i => i.id === id);
  if (!item) return;

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

  if (!title || !description) {
    alert("제목과 상세 경위는 필수 입력 항목입니다.");
    return;
  }

  const updatedTimeline = item.timeline ? [...item.timeline] : [];
  const nowStr = new Date().toISOString().slice(0, 16).replace("T", " ");
  updatedTimeline.push({
    time: nowStr,
    note: `관리자 정보 수정 반영 (상태: ${status}, 지급액: ${companyAmount.toLocaleString()}원)`
  });

  const updatedFields = {
    date: dateStr,
    resort,
    dept,
    zone,
    locationDetail,
    category,
    severity,
    victimType,
    victimName,
    title,
    description,
    actionTaken,
    faultRatio,
    totalAmount,
    companyAmount,
    personalAmount,
    cost: companyAmount,
    preventiveMeasure,
    status,
    manager,
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
  const { search, resort, dept, category, severity, status, period, zone, startDate, endDate, from, to } = state.filters;
  const refDate = getSystemReferenceDate();
  const todayStart = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate(), 0, 0, 0, 0);
  const todayEnd = new Date(refDate.getFullYear(), refDate.getMonth(), refDate.getDate(), 23, 59, 59, 999);

  state.filteredIncidents = state.incidents.filter(item => {
    const itemDept = item.dept || inferDeptFromIncident(item);

    if (search) {
      const targetStr = `${item.id} ${item.title} ${item.locationDetail} ${item.description} ${item.victimName} ${item.manager} ${item.resort} ${itemDept} ${item.faultRatio || ''}`.toLowerCase();
      if (!targetStr.includes(search)) return false;
    }

    if (resort !== "all" && item.resort !== resort) {
      return false;
    }

    if (dept !== "all" && itemDept !== dept) {
      return false;
    }

    if (category !== "all" && item.category !== category) {
      return false;
    }

    if (zone && zone !== "all" && item.zone !== zone) {
      return false;
    }

    if (severity !== "all") {
      if (!item.severity || (!item.severity.includes(severity) && item.severity !== severity)) {
        return false;
      }
    }

    if (status !== "all" && item.status !== status) {
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
  renderKPIs();
  renderCharts();
  renderTable();
}

// Render KPIs: 핵심 4대 관리 지표 체계
function renderKPIs() {
  const all = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);
  const totalAll = all.length;

  // 1) 전체 누적 사고
  const elTotal = document.getElementById("kpiTotalIncidentCount");
  if (elTotal) elTotal.innerText = `${totalAll.toLocaleString()}건`;

  // 2) 2026년 당해 사고
  const list2026 = all.filter(x => {
    const p = parseIncidentDate(x);
    return p && p.getFullYear() === 2026;
  });
  const count2026 = list2026.length;
  const rate2026 = totalAll > 0 ? ((count2026 / totalAll) * 100).toFixed(1) : "0.0";
  const elYear = document.getElementById("kpiYearCurrentCount");
  if (elYear) elYear.innerText = `${count2026.toLocaleString()}건`;
  const elSub2026 = document.getElementById("kpi-sub-2026");
  if (elSub2026) elSub2026.innerHTML = `<span>📅 전체 대비 ${rate2026}% 점유</span>`;

  // 3) 2026년 직원 안전사고
  const empKeywords = ["직원", "임직원", "캐디", "진행원", "근로자"];
  const listEmp2026 = list2026.filter(x => {
    const vType = (x.victimType || "").trim();
    const note = ((x.note || "") + " " + (x.summary || "") + " " + (x.locationDetail || "") + " " + (x.cause || "") + " " + (x.title || "")).toLowerCase();
    return empKeywords.some(kw => vType.includes(kw) || note.includes(kw));
  });
  const countEmp2026 = listEmp2026.length;
  const rateEmp2026 = count2026 > 0 ? ((countEmp2026 / count2026) * 100).toFixed(1) : "0.0";
  const elEmp = document.getElementById("kpiEmployee2026Count");
  if (elEmp) elEmp.innerText = `${countEmp2026.toLocaleString()}건`;
  const elSubEmp = document.getElementById("kpi-sub-employee");
  if (elSubEmp) elSubEmp.innerHTML = `<span>👷 산재·임직원 집중 관리 (${rateEmp2026}%)</span>`;

  // 4) 골프장(4대 CC) 사고
  const ccResorts = ["밸리팀", "힐스팀", "성문안팀", "월송리팀"];
  const listGolfCC = all.filter(x => {
    const r = (x.resort || "").trim();
    const d = (x.dept || "").trim();
    const loc = ((x.locationDetail || "") + " " + (x.zone || "")).toLowerCase();
    if (ccResorts.includes(r) || ccResorts.includes(d)) return true;
    if (loc.includes("코스") || loc.includes("홀") || loc.includes("그린") || loc.includes("티잉") || loc.includes("카트도로")) return true;
    return false;
  });
  const countGolf = listGolfCC.length;
  const rateGolf = totalAll > 0 ? ((countGolf / totalAll) * 100).toFixed(1) : "0.0";
  const elGolf = document.getElementById("kpiGolfCCCount");
  if (elGolf) elGolf.innerText = `${countGolf.toLocaleString()}건`;
  const elSubGolf = document.getElementById("kpi-sub-golf");
  if (elSubGolf) elSubGolf.innerHTML = `<span>⛳ 전체 대비 ${rateGolf}% (4대 CC)</span>`;

  // Legacy fallback elements (if any exist in DOM)
  const legacyTotal = document.getElementById("kpi-total");
  if (legacyTotal) legacyTotal.innerText = `${totalAll.toLocaleString()}건`;
}

// Render Charts with Dynamic Top-N Grouping for 500+ Rows
function renderCharts() {
  const data = state.filteredIncidents;

  // 1. Group by Category
  const categoryCounts = {};
  data.forEach(item => {
    const cat = item.category || "기타";
    categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  });

  const sortedCategories = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1]);
  const maxDisplay = 6;
  const topCategories = sortedCategories.slice(0, maxDisplay);
  const otherSum = sortedCategories.slice(maxDisplay).reduce((sum, item) => sum + item[1], 0);

  const categoryLabels = topCategories.map(c => c[0]);
  const categoryData = topCategories.map(c => c[1]);

  if (otherSum > 0) {
    categoryLabels.push(`기타 외 ${sortedCategories.length - maxDisplay}종`);
    categoryData.push(otherSum);
  }

  const categoryPalette = [
    "#38bdf8", // Sky Blue
    "#f59e0b", // Amber
    "#06b6d4", // Cyan
    "#10b981", // Emerald
    "#f87171", // Coral Red
    "#818cf8", // Indigo
    "#a78bfa", // Purple
    "#94a3b8"  // Slate
  ];

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
          backgroundColor: categoryPalette.slice(0, categoryLabels.length),
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
            if (clickedCategory && !clickedCategory.startsWith("기타 외")) {
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
    const dept = item.dept || inferDeptFromIncident(item) || "시설팀";
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

  // 3. Group by Zone (Top 7)
  const zoneCounts = {};
  data.forEach(item => {
    const z = item.zone || "기타";
    zoneCounts[z] = (zoneCounts[z] || 0) + 1;
  });

  const sortedZones = Object.entries(zoneCounts).sort((a, b) => b[1] - a[1]).slice(0, 7);
  const zoneLabels = sortedZones.map(z => z[0]);
  const zoneData = sortedZones.map(z => z[1]);

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
          backgroundColor: "rgba(56, 189, 248, 0.75)",
          hoverBackgroundColor: "#38bdf8",
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
    const idA = String(a.id || a.docNo || "").trim();
    const idB = String(b.id || b.docNo || "").trim();
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
        <td colspan="10" style="text-align: center; padding: 3rem 1rem; color: #64748b;">
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

    return `
      <tr onclick="openIncidentDetail('${item.id}')">
        <td class="no-cell">${globalIndex}</td>
        <td class="id-cell">${escapeHtml(item.id)}</td>
        <td class="date-cell">${escapeHtml(item.date)}</td>
        <td class="location-cell">
          <span class="location-primary">${escapeHtml(item.zone)}</span>
          <span class="location-sub">${escapeHtml(item.resort)} - ${escapeHtml(item.locationDetail)}</span>
        </td>
        <td>
          <span class="badge badge-category">${escapeHtml(item.category)}</span>
        </td>
        <td class="title-cell" title="${escapeHtml(item.title)}">
          ${escapeHtml(item.title)}
        </td>
        <td>
          <span class="badge ${severityClass}">${escapeHtml(item.severity)}</span>
        </td>
        <td>
          <span class="badge ${statusClass}">
            <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:currentColor;"></span>
            ${escapeHtml(item.status)}
          </span>
        </td>
        <td style="color: #475569; font-size: 0.84rem;">
          ${escapeHtml(item.manager || "-")}
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
  const item = state.incidents.find(i => i.id === id);
  if (!item) return;

  state.currentDetailId = item.id;
  switchDetailMode(false);

  const modal = document.getElementById("detail-modal");
  if (!modal) return;

  document.getElementById("dtl-id").innerText = item.id;
  document.getElementById("dtl-doc-id").innerText = item.id;
  document.getElementById("dtl-title").innerText = item.title;
  document.getElementById("dtl-date").innerText = item.date;
  document.getElementById("dtl-resort").innerText = `${item.resort} ${item.dept ? `(${item.dept})` : ''}`;
  document.getElementById("dtl-location").innerText = `${item.zone} - ${item.locationDetail}`;
  document.getElementById("dtl-category").innerText = item.category;
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

  const formattedDate = dateRaw.replace("T", " ");

  const randomNum = Math.floor(100 + Math.random() * 900);
  const newId = `INC-2026-${randomNum}`;

  const newIncident = {
    id: newId,
    date: formattedDate,
    resort,
    dept,
    zone,
    locationDetail,
    category,
    severity,
    victimType,
    victimName,
    title,
    description,
    actionTaken,
    preventiveMeasure,
    status: "조사/진행중",
    cost: companyAmount,
    faultRatio,
    totalAmount,
    companyAmount,
    personalAmount,
    manager: manager || "안전관리팀",
    timeline: [
      { time: formattedDate, note: "신규 사고 발생 접수 및 등록" },
      { time: formattedDate, note: `초동 조치: ${actionTaken || '현장 확인'}` }
    ]
  };

  IncidentStorage.add(newIncident);
  state.incidents = IncidentStorage.getAll();

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
    `"${item.category}"`,
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

  const { search, resort, dept, category, zone, severity, status, period } = state.filters;
  const chips = [];

  if (category && category !== "all") {
    chips.push({ key: "category", label: `유형: ${category}` });
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

  const tableZone = document.getElementById("table-filter-zone");
  if (tableZone) tableZone.classList.toggle("is-active", Boolean(zone && zone !== "all"));

  const tableSev = document.getElementById("table-filter-severity");
  if (tableSev) tableSev.classList.toggle("is-active", Boolean(severity && severity !== "all"));
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
  state.filters.severity = "all";
  state.filters.status = "all";
  state.filters.period = "all";
  state.filters.zone = "all";
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

  const severityFilter = document.getElementById("filter-severity");
  if (severityFilter) severityFilter.value = "all";

  const statusFilter = document.getElementById("filter-status");
  if (statusFilter) statusFilter.value = "all";

  // Table quick filters reset
  const tableCat = document.getElementById("table-filter-category");
  if (tableCat) tableCat.value = "all";
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

    populateYoyIncidentTypeFilter();
    populateYoyTableBizFilter();
    setTimeout(() => {
      if (typeof window.executeComparison === "function") window.executeComparison();
    }, 50);
  }
};

window.switchCmpMode = function(mode) {
  state.comparison.mode = mode;

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
  if (selB) selB.value = "2025";
  const typeFilterEl = document.getElementById("yoyGlobalTypeFilter") || document.getElementById("yoyIncidentTypeFilter");
  if (typeFilterEl) typeFilterEl.value = "all";
  const tableBizSelect = document.getElementById("yoyTableBizSelect");
  if (tableBizSelect) tableBizSelect.value = "all";
  const tableSortSelect = document.getElementById("yoyTableSortSelect");
  if (tableSortSelect) tableSortSelect.value = "risk_desc";
  executeComparison();
  showToast("비교 분석 필터 조건이 2026년 vs 2025년 (전체 유형)으로 초기화되었습니다.", "info");
};

// 다년도 비교 분석용 사고 유형 선택 옵션 자동 구성
function populateYoyIncidentTypeFilter() {
  const selectEl = document.getElementById("yoyGlobalTypeFilter") || document.getElementById("yoyIncidentTypeFilter");
  if (!selectEl) return;
  const currentVal = selectEl.value || "all";

  const allIncidents = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);

  const categories = [...new Set(allIncidents.map(i => (i.category || "").trim()).filter(Boolean))]
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
  const currentVal = selectEl.value || "all";

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

  let html = `<option value="all">전체 사업장</option>`;
  rawResorts.forEach(r => {
    html += `<option value="${escapeHtml(r)}">${escapeHtml(r)}</option>`;
  });
  selectEl.innerHTML = html;

  if (rawResorts.includes(currentVal)) {
    selectEl.value = currentVal;
  } else {
    selectEl.value = "all";
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
  const all = (state.incidents && state.incidents.length > 0) ? state.incidents : [];
  const mode = state.comparison.mode || "year";

  if (mode === "year") {
    const selYear = document.getElementById(side === "a" ? "cmp-year-a" : "cmp-year-b");
    const targetY = selYear ? parseInt(selYear.value, 10) : (side === "a" ? 2026 : 2025);
    const label = `${targetY}년`;
    const filtered = all.filter(item => {
      const p = parseIncidentDate(item);
      return p && p.getFullYear() === targetY;
    });
    return { data: filtered, label, mode, year: targetY };
  } else if (mode === "month") {
    const selYear = document.getElementById(side === "a" ? "cmp-month-year-a" : "cmp-month-year-b");
    const selMonth = document.getElementById(side === "a" ? "cmp-month-a" : "cmp-month-b");
    const targetY = selYear ? parseInt(selYear.value, 10) : (side === "a" ? 2026 : 2025);
    const targetM = selMonth ? parseInt(selMonth.value, 10) : 5;
    const label = `${targetY}년 ${targetM}월`;
    const filtered = all.filter(item => {
      const p = parseIncidentDate(item);
      return p && p.getFullYear() === targetY && (p.getMonth() + 1) === targetM;
    });
    return { data: filtered, label, mode, year: targetY, month: targetM };
  } else if (mode === "custom") {
    const startEl = document.getElementById(side === "a" ? "cmp-start-a" : "cmp-start-b");
    const endEl = document.getElementById(side === "a" ? "cmp-end-a" : "cmp-end-b");
    const startStr = (startEl ? startEl.value : "") || (side === "a" ? "2026-01-01" : "2025-01-01");
    const endStr = (endEl ? endEl.value : "") || (side === "a" ? "2026-10-31" : "2025-10-31");

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
    return { data: filtered, label, mode };
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
    dataA = dataA.filter(x => (x.category || "").trim() === selectedType);
    dataB = dataB.filter(x => (x.category || "").trim() === selectedType);
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

  if (!dataA || !dataB) {
    dataA = state.comparison.lastDataA || [];
    dataB = state.comparison.lastDataB || [];
    selectedType = selectedType || state.comparison.lastSelectedType || "all";
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
  const selectedBiz = (bizSelectEl?.value || "all").trim();

  // 2) 정렬 도구 (yoyTableSortSelect)
  const sortSelectEl = document.getElementById("yoyTableSortSelect");
  const sortMode = (sortSelectEl?.value || "risk_desc").trim();

  // 사업장별 그룹화 구조: { [resort]: { categories: { [cat]: { a: 0, b: 0 } }, subtotalA: 0, subtotalB: 0 } }
  const resortGroups = {};

  dataA.forEach(x => {
    const c = (x.category || "기타").trim();
    if (currentTypeFilter !== "all" && c !== currentTypeFilter) return;
    const r = (x.resort || "기타").trim();
    if (selectedBiz !== "all" && r !== selectedBiz) return;

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
    const c = (x.category || "기타").trim();
    if (currentTypeFilter !== "all" && c !== currentTypeFilter) return;
    const r = (x.resort || "기타").trim();
    if (selectedBiz !== "all" && r !== selectedBiz) return;

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

  // 2. 세부 항목 행 및 사업장별 [소계(Subtotal)] 행 구성
  let rowSeq = 1;
  const rows = [totalRowHtml];

  resorts.forEach(resort => {
    const group = resortGroups[resort];
    const catKeys = Object.keys(group.categories);

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

    // 세부 유형 개별 행
    catKeys.forEach(category => {
      const item = group.categories[category];
      const badges = formatCmpDiffBadges(item.a, item.b);

      rows.push(`
        <tr class="cmp-clickable-row" onclick="openYoyDrilldown('${escapeHtml(resort)}', '${escapeHtml(category)}')" title="클릭하여 '${escapeHtml(resort)} - ${escapeHtml(category)}' 세부 사고 목록 조회">
          <td style="text-align: center; color: #64748b; font-weight: 600;">${rowSeq++}</td>
          <td class="resort-cell" style="font-weight: 600; color: #0f172a;">${escapeHtml(resort)}</td>
          <td class="cat-cell">
            <span class="badge badge-category" style="font-weight: 600; color: #1e293b; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 3px 8px; border-radius: 4px;">${escapeHtml(category)}</span>
          </td>
          <td style="text-align: right; font-weight: 700; color: #2563eb;">${item.a.toLocaleString()}건</td>
          <td style="text-align: right; font-weight: 700; color: #d97706;">${item.b.toLocaleString()}건</td>
          <td style="text-align: right;">${badges.diffBadgeHtml}</td>
          <td style="text-align: right;">${badges.rateBadgeHtml}</td>
        </tr>
      `);
    });

    // 2. 사업장별 [소계] 행 삽입 (해당 사업장의 세부 유형이 끝나는 하단)
    const subBadges = formatCmpDiffBadges(group.subtotalA, group.subtotalB);
    rows.push(`
      <tr class="cmp-subtotal-row cmp-clickable-row" onclick="openYoyDrilldown('${escapeHtml(resort)}', '${currentTypeFilter === 'all' ? 'all' : escapeHtml(currentTypeFilter)}')" title="클릭하여 '${escapeHtml(resort)}' 전체 세부 사고 목록 조회">
        <td style="text-align: center;"><span class="subtotal-badge">소계</span></td>
        <td class="resort-cell" style="font-weight: 700; color: #1e293b;">[소계] ${escapeHtml(resort)}</td>
        <td class="cat-cell">
          <span class="badge" style="font-weight: 600; color: #475569; background: #e2e8f0; border: 1px solid #cbd5e1; padding: 2px 7px; border-radius: 4px;">소계</span>
        </td>
        <td style="text-align: right; font-weight: 700; color: #2563eb;">${group.subtotalA.toLocaleString()}건</td>
        <td style="text-align: right; font-weight: 700; color: #d97706;">${group.subtotalB.toLocaleString()}건</td>
        <td style="text-align: right;">${subBadges.diffBadgeHtml}</td>
        <td style="text-align: right;">${subBadges.rateBadgeHtml}</td>
      </tr>
    `);
  });

  tbody.innerHTML = rows.join("");
}
window.renderComparisonTable = renderComparisonTable;

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
    if (c !== "all" && c !== "" && c !== "-" && c !== "소계" && c !== "전체 유형" && (x.category || "").trim() !== c) return false;
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
  const currentList = activeTab === "a" ? listA : listB;

  if (!currentList || currentList.length === 0) {
    const periodName = activeTab === "a"
      ? (document.getElementById("ck-label-period-a")?.textContent || "A기간")
      : (document.getElementById("ck-label-period-b")?.textContent || "B기간");
    tbody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; color: #64748b; padding: 2.5rem 1rem;">
          <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">📂</div>
          <div style="font-weight: 600; color: #334155;">해당 ${escapeHtml(periodName)}에 등록된 세부 사고 건이 없습니다.</div>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = currentList.map(item => {
    const id = item.id || "-";
    const date = item.date || "-";
    const loc = [item.zone, item.locationDetail].filter(Boolean).join(" - ") || "-";
    const desc = item.description || item.title || "사고 개요 없음";
    const status = item.status || "접수대기";
    const severity = item.severity || "경미";

    // Status badge class
    let statusClass = "badge-status-pending";
    if (status.includes("완료")) statusClass = "badge-status-completed";
    else if (status.includes("진행")) statusClass = "badge-status-progress";
    else if (status.includes("보험") || status.includes("보상")) statusClass = "badge-status-insurance";

    // Severity badge class
    let sevClass = "badge-sev-minor";
    if (severity.includes("중대")) sevClass = "badge-sev-critical";
    else if (severity.includes("병원") || severity.includes("중등")) sevClass = "badge-sev-moderate";

    return `
      <tr class="drilldown-incident-row" onclick="navigateToDetailFromDrilldown('${escapeHtml(id)}')" title="클릭하여 '${escapeHtml(id)}' 상세 내역 보기">
        <td class="id-cell" style="font-family: monospace; font-weight: 700; color: #2563eb;">${escapeHtml(id)}</td>
        <td style="font-size: 0.82rem; color: #475569; white-space: nowrap;">${escapeHtml(date)}</td>
        <td style="font-size: 0.82rem; color: #334155; font-weight: 600;">${escapeHtml(loc)}</td>
        <td style="line-height: 1.35; font-size: 0.82rem; color: #0f172a;">
          <div style="max-height: 2.7em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
            ${escapeHtml(desc)}
          </div>
        </td>
        <td style="text-align: center;">
          <span class="badge ${statusClass}">${escapeHtml(status)}</span>
        </td>
        <td style="text-align: center;">
          <span class="badge ${sevClass}">${escapeHtml(severity)}</span>
        </td>
      </tr>
    `;
  }).join("");
}
window.renderYoyDrilldownTable = renderYoyDrilldownTable;

// ==========================================================================
// 6-8. 핵심 4대 KPI 카드 드릴다운 상세 사고 내역 모달
// ==========================================================================
function openKpiDrilldown(type) {
  const all = (state.incidents && state.incidents.length > 0)
    ? state.incidents
    : (typeof INITIAL_INCIDENTS !== "undefined" ? INITIAL_INCIDENTS : []);

  let filtered = [];
  let title = "";
  let sub = "";
  let icon = "📌";

  if (type === "year2026") {
    filtered = all.filter(x => {
      const p = parseIncidentDate(x);
      return p && p.getFullYear() === 2026;
    });
    icon = "📅";
    title = `[2026년 당해 사고] 세부 내역 (총 ${filtered.length.toLocaleString()}건)`;
    sub = `2026년에 발생한 안전사고 전체 목록`;
  } else if (type === "employee2026") {
    const empKeywords = ["직원", "임직원", "캐디", "진행원", "근로자"];
    filtered = all.filter(x => {
      const p = parseIncidentDate(x);
      if (!p || p.getFullYear() !== 2026) return false;
      const vType = (x.victimType || "").trim();
      const note = ((x.note || "") + " " + (x.summary || "") + " " + (x.locationDetail || "") + " " + (x.cause || "") + " " + (x.title || "")).toLowerCase();
      return empKeywords.some(kw => vType.includes(kw) || note.includes(kw));
    });
    icon = "⛑️";
    title = `[2026년 직원 안전사고] 세부 내역 (총 ${filtered.length.toLocaleString()}건)`;
    sub = `2026년 발생한 임직원·캐디·진행원 산재 및 안전사고 목록`;
  } else if (type === "golfCC") {
    const ccResorts = ["밸리팀", "힐스팀", "성문안팀", "월송리팀"];
    filtered = all.filter(x => {
      const r = (x.resort || "").trim();
      const d = (x.dept || "").trim();
      const loc = ((x.locationDetail || "") + " " + (x.zone || "")).toLowerCase();
      if (ccResorts.includes(r) || ccResorts.includes(d)) return true;
      if (loc.includes("코스") || loc.includes("홀") || loc.includes("그린") || loc.includes("티잉") || loc.includes("카트도로")) return true;
      return false;
    });
    icon = "⛳";
    title = `[골프장(4대 CC) 사고] 세부 내역 (총 ${filtered.length.toLocaleString()}건)`;
    sub = `밸리팀 · 힐스팀 · 성문안팀 · 월송리팀 골프 코스 안전사고 목록`;
  } else {
    // 전체 누적 사고
    filtered = all;
    icon = "📊";
    title = `[전체 누적 사고] 세부 내역 (총 ${filtered.length.toLocaleString()}건)`;
    sub = `등록된 모든 연도 안전사고 전체 내역`;
  }

  // 최신순 (날짜 내림차순) 정렬
  filtered.sort((a, b) => {
    const da = parseIncidentDate(a)?.getTime() || 0;
    const db = parseIncidentDate(b)?.getTime() || 0;
    return db - da;
  });

  const titleEl = document.getElementById("kpi-drilldown-title");
  const subEl = document.getElementById("kpi-drilldown-sub");
  const iconEl = document.getElementById("kpi-drilldown-icon");
  const footerInfoEl = document.getElementById("kpi-drilldown-footer-info");

  if (titleEl) titleEl.textContent = title;
  if (subEl) subEl.textContent = sub;
  if (iconEl) iconEl.textContent = icon;
  if (footerInfoEl) footerInfoEl.textContent = `총 ${filtered.length.toLocaleString()}건 조회됨`;

  const tbody = document.getElementById("kpi-drilldown-tbody");
  if (tbody) {
    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align: center; color: #64748b; padding: 2.5rem 1rem;">
            <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">📂</div>
            <div style="font-weight: 600; color: #334155;">조건에 해당하는 사고 건이 없습니다.</div>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = filtered.map(item => {
        let statusClass = "badge-status-resolved";
        if (item.status === "조사/진행중") statusClass = "badge-status-investigating";
        if (item.status === "보험/보상진행") statusClass = "badge-status-insurance";
        if (item.status === "접수대기") statusClass = "badge-status-pending";

        const deptDisplay = item.dept ? ` (${escapeHtml(item.dept)})` : "";
        const desc = item.title || item.locationDetail || "사고 개요 없음";

        return `
          <tr class="drilldown-incident-row" onclick="navigateToDetailFromKpiDrilldown('${escapeHtml(item.id)}')" title="클릭하여 사고 상세 정보 조회 및 수정">
            <td class="id-cell" style="font-weight: 700; color: #2563eb; font-family: monospace;">${escapeHtml(item.id)}</td>
            <td style="color: #475569; font-weight: 500; font-size: 0.84rem; white-space: nowrap;">${escapeHtml(item.date)}</td>
            <td style="font-weight: 600; color: #0f172a; font-size: 0.84rem;">${escapeHtml(item.resort || "기타")}${deptDisplay}</td>
            <td>
              <span class="badge badge-category" style="font-size: 0.76rem; font-weight: 600;">${escapeHtml(item.category || "기타")}</span>
            </td>
            <td class="overview-cell" style="font-size: 0.84rem; color: #1e293b;" title="${escapeHtml(desc)}">
              <div style="max-height: 2.8em; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.35;">
                ${escapeHtml(desc)}
              </div>
            </td>
            <td style="text-align: center;">
              <span class="badge ${statusClass}" style="font-size: 0.75rem;">${escapeHtml(item.status || "접수대기")}</span>
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  const modal = document.getElementById("kpi-drilldown-modal");
  if (modal) {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
  }
}
window.openKpiDrilldown = openKpiDrilldown;

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
