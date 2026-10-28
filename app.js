
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
  if (costEl) costEl.textContent = `${Math.round(totalCost / 10000).toLocaleString()}만원`;

  const avgCostEl = document.getElementById("rk-avg-cost");
  if (avgCostEl) avgCostEl.textContent = `건당 평균 ${Math.round(avgCost / 10000).toLocaleString()}만원`;

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
          if (item.companyAmount === 350000 || item.companyAmount === 1800000 || item.companyAmount === 150000 || item.companyAmount === 4800000) {
            item.cost = 0;
            item.totalAmount = 0;
            item.companyAmount = 0;
            item.personalAmount = 0;
            if (item.faultRatio === '당사 70% : 고객 30%') item.faultRatio = '과실 미산정';
            migrated = true;
          }
        });
        state.incidents = records;
        state.incidents.forEach(item => {
          if (!item.dept) item.dept = inferDeptFromIncident(item);
        });
        sortIncidentsList(state.incidents, "id", "desc");
        try {
          localStorage.setItem("resort_incidents_data", JSON.stringify(state.incidents));
        } catch (_) {}
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
    if (!item.dept) item.dept = inferDeptFromIncident(item);
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

  // 2. KPI 카드 클릭 시 전용 분석 모달 오픈
  const trendCard = document.getElementById("kpi-card-trend");
  if (trendCard) trendCard.addEventListener("click", openTrendAnalysisModal);

  const pendingCard = document.getElementById("kpi-card-pending");
  if (pendingCard) pendingCard.addEventListener("click", openPendingIncidentsModal);

  const preventiveCard = document.getElementById("kpi-card-preventive");
  if (preventiveCard) preventiveCard.addEventListener("click", openPreventiveMeasuresModal);

  const medicalCard = document.getElementById("kpi-card-medical");
  if (medicalCard) medicalCard.addEventListener("click", openMedicalAnalysisModal);

  const costKpiCard = document.getElementById("kpi-card-cost");
  if (costKpiCard) {
    costKpiCard.addEventListener("click", () => {
      openCostAnalysisModal();
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
    switchDetailMode(false);
    document.body.classList.remove("modal-open");
  };

  if (closeDetailBtn) closeDetailBtn.addEventListener("click", closeDetail);
  if (closeDetailFooterBtn) closeDetailFooterBtn.addEventListener("click", closeDetail);

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

  // 1. Filter records where company paid amount > 0
  const costItems = state.incidents.filter(item => {
    const paidAmount = parseNumericCost(item.companyAmount !== undefined ? item.companyAmount : item.cost);
    if (paidAmount <= 0) return false;

    // Filter by year: 해당 연도(YYYY.01.01 ~ YYYY.12.31)에 속한 당사 지급 건만 필터링
    if (year !== "all" && year !== "custom") {
      const itemYear = getIncidentYear(item);
      if (itemYear !== year) return false;
    }

    // Filter by custom date range
    if (from || to) {
      const stdDate = extractStandardDate(item.occurDate || item.date) || extractStandardDate(item.reportDate);
      if (stdDate) {
        if (from && stdDate < from) return false;
        if (to && stdDate > to) return false;
      }
    }

    return true;
  });

  // Sort by paid amount descending or date descending
  costItems.sort((a, b) => {
    const costA = parseNumericCost(a.companyAmount !== undefined ? a.companyAmount : a.cost);
    const costB = parseNumericCost(b.companyAmount !== undefined ? b.companyAmount : b.cost);
    return costB - costA;
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
  if (totalAmountEl) totalAmountEl.innerText = formatCurrency(totalAmount);
  if (countEl) countEl.innerText = `총 ${count.toLocaleString()}건`;
  if (avgEl) avgEl.innerText = formatCurrency(avgCost);
  if (badgeCountEl) badgeCountEl.innerText = `${count.toLocaleString()}건`;

  // Render Table
  const tableBody = document.getElementById("cost-table-body");
  if (!tableBody) return;

  if (count === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2.5rem 1rem; color: #94a3b8;">
          <div style="font-size: 1.8rem; margin-bottom: 0.35rem;">💳</div>
          <div>선택한 기간 동안 당사 지급/보상 금액이 발생한 기록이 없습니다.</div>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = costItems.map(item => {
    const paid = parseNumericCost(item.companyAmount !== undefined ? item.companyAmount : item.cost);
    return `
      <tr onclick="navigateToDetailFromCost('${escapeHtml(item.id)}')">
        <td class="id-cell">${escapeHtml(item.id)}</td>
        <td style="color:#475569; font-size:0.82rem;">${escapeHtml(item.date)}</td>
        <td>
          <span style="font-weight:600; color:#1e293b;">${escapeHtml(item.resort)}</span>
          <span style="color:#64748b; font-size:0.75rem; margin-left:0.25rem;">(${escapeHtml(item.locationDetail)})</span>
        </td>
        <td>
          <span class="badge badge-category">${escapeHtml(item.category)}</span>
        </td>
        <td class="cost-amount-cell">
          ${formatCurrency(paid)}
        </td>
      </tr>
    `;
  }).join("");
}

// Navigate from Cost Modal to Incident Detail Modal
window.navigateToDetailFromCost = function(id) {
  const costModal = document.getElementById("cost-analysis-modal");
  if (costModal) costModal.classList.remove("active");

  setTimeout(() => {
    openIncidentDetail(id);
  }, 100);
};

// Universal Navigation from any Sub-Modal to Incident Detail Modal
window.navigateToDetailFromSubModal = function(id) {
  const openModals = document.querySelectorAll(".modal-overlay.active");
  openModals.forEach(m => m.classList.remove("active"));

  setTimeout(() => {
    openIncidentDetail(id);
  }, 100);
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
          x: { grid: { display: false }, ticks: { color: "#94a3b8" } },
          y: { beginAtZero: true, grid: { color: "#e2e8f0" }, ticks: { color: "#475569", stepSize: 1 } }
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
        <span class="top-rank-count" style="color:#fbbf24;">${cnt}건 <span class="top-rank-pct">(${((cnt / totalCount) * 100).toFixed(1)}%)</span></span>
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
    const stdDate = extractStandardDate(item.occurDate || item.date) || extractStandardDate(item.reportDate);
    if (stdDate) {
      const parts = stdDate.split("-");
      const m = parseInt(parts[1], 10);
      if (m >= 1 && m <= 12) monthCounts[m - 1]++;
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
          x: { grid: { display: false }, ticks: { color: "#94a3b8", font: { size: 10 } } },
          y: { beginAtZero: true, grid: { color: "#e2e8f0" }, ticks: { color: "#475569", stepSize: 1 } }
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
  const now = new Date("2026-10-26T12:00:00");
  const pendingItems = (state.incidents || []).filter(item => item.status !== "조치완료");

  let urgentCount = 0;
  let warningCount = 0;
  let normalCount = 0;

  const itemsWithDays = pendingItems.map(item => {
    let diffDays = 0;
    const stdDate = extractStandardDate(item.occurDate || item.date) || extractStandardDate(item.reportDate);
    if (stdDate) {
      const d = new Date(stdDate);
      if (!isNaN(d.getTime())) {
        diffDays = Math.max(0, Math.floor((now - d) / (1000 * 60 * 60 * 24)));
      }
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
  if (item.dept) return item.dept;
  const text = ((item.manager || "") + " " + (item.resort || "") + " " + (item.zone || "") + " " + (item.category || "") + " " + (item.locationDetail || "")).toLowerCase();
  if (text.includes("성문안")) return "성문안팀";
  if (text.includes("골프") || text.includes("타구") || text.includes("캐디") || text.includes("카트")) return "경기운영팀";
  if (text.includes("사우나") || text.includes("수영") || text.includes("워터") || text.includes("스키") || text.includes("레저")) return "레저팀";
  if (text.includes("식음") || text.includes("f&b") || text.includes("레스토랑") || text.includes("주방")) return "식음팀";
  if (text.includes("객실") || text.includes("콘도") || text.includes("하우스키핑") || text.includes("프런트")) return "객실팀";
  if (text.includes("시설") || text.includes("영선") || text.includes("설비") || text.includes("전기") || text.includes("타일") || text.includes("수리")) return "시설팀";
  if (text.includes("안전") || text.includes("의무") || text.includes("간호") || text.includes("소방")) return "안전관리팀";
  if (text.includes("밸리") || text.includes("빌리지")) return "밸리팀";
  return "밸리팀";
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

// Safe Date Extractors
function extractYear(dateStr) {
  if (!dateStr) return null;
  const match = String(dateStr).match(/(19\d{2}|20\d{2})/);
  return match ? match[1] : null;
}

function extractStandardDate(dateStr) {
  if (!dateStr) return null;
  const match = String(dateStr).match(/(19\d{2}|20\d{2})\s*[./-]\s*(\d{1,2})\s*[./-]\s*(\d{1,2})/);
  if (match) {
    const y = match[1];
    const m = match[2].padStart(2, "0");
    const d = match[3].padStart(2, "0");
    return `${y}-${m}-${d}`;
  }
  return null;
}

// Extract Year from Incident Object (occurDate, date, reportDate)
function getIncidentYear(item) {
  if (!item) return null;
  return extractYear(item.occurDate || item.date) || extractYear(item.reportDate) || null;
}

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

  // 신설: 팀/부서 드롭다운 옵션 동적 추출
  if (deptSelect) {
    const currentDept = state.filters.dept;
    const defaultDepts = ["밸리팀", "성문안팀", "레저팀", "시설팀", "객실팀", "안전관리팀", "식음팀", "경기운영팀"];
    const extractedDepts = state.incidents.map(i => i.dept || inferDeptFromIncident(i)).filter(Boolean);
    const uniqueDepts = [...new Set([...defaultDepts, ...extractedDepts])].sort();

    deptSelect.innerHTML = `<option value="all">전체 팀/부서 (${uniqueDepts.length}개팀)</option>` +
      uniqueDepts.map(d => `<option value="${escapeHtml(d)}">${escapeHtml(d)}</option>`).join("");

    if (uniqueDepts.includes(currentDept)) {
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
  const { search, resort, dept, category, severity, status, period, zone } = state.filters;
  const now = new Date("2026-10-26T12:00:00");

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

    if (period !== "all") {
      const parsedDate = new Date(item.date.replace(/\./g, "-").replace(" ", "T"));
      if (!isNaN(parsedDate.getTime())) {
        const diffDays = (now - parsedDate) / (1000 * 60 * 60 * 24);
        if (period === "7d" && diffDays > 7) return false;
        if (period === "30d" && diffDays > 30) return false;
        if (period === "90d" && diffDays > 90) return false;
        if (period === "year" && parsedDate.getFullYear() !== 2026) return false;
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

// Render KPIs
function renderKPIs() {
  const data = state.filteredIncidents;
  const total = data.length;

  const resolved = data.filter(i => i.status === "조치완료").length;
  const inProgress = data.filter(i => i.status !== "조치완료").length;
  const medical = data.filter(i => (i.severity && (i.severity.includes("병원") || i.severity.includes("중등") || i.severity.includes("중대")))).length;
  const resolutionRate = total > 0 ? Math.round((resolved / total) * 100) : 100;

  const totalCompanyCost = data.reduce((acc, curr) => {
    const costVal = parseNumericCost(curr.companyAmount !== undefined ? curr.companyAmount : curr.cost);
    return acc + costVal;
  }, 0);

  document.getElementById("kpi-total").innerText = `${total.toLocaleString()}건`;
  document.getElementById("kpi-progress").innerText = `${inProgress.toLocaleString()}건`;
  document.getElementById("kpi-resolved-rate").innerText = `${resolutionRate}%`;
  document.getElementById("kpi-medical").innerText = `${medical.toLocaleString()}건`;

  const totalCostEl = document.getElementById("kpi-total-cost");
  if (totalCostEl) {
    if (totalCompanyCost >= 100000000) {
      totalCostEl.innerText = `${(totalCompanyCost / 100000000).toFixed(1)}억원`;
    } else if (totalCompanyCost >= 10000) {
      totalCostEl.innerText = `${Math.round(totalCompanyCost / 10000).toLocaleString()}만원`;
    } else if (totalCompanyCost > 0) {
      totalCostEl.innerText = `${totalCompanyCost.toLocaleString()}원`;
    } else {
      totalCostEl.innerText = "0원";
    }
  }
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

  // 2. Group by Dept (🏢 팀/부서별 사고 발생 비중 신설 ⭐)
  const deptCounts = {};
  data.forEach(item => {
    const dept = item.dept || inferDeptFromIncident(item) || "운영팀";
    deptCounts[dept] = (deptCounts[dept] || 0) + 1;
  });

  const sortedDepts = Object.entries(deptCounts).sort((a, b) => b[1] - a[1]);
  const maxDeptDisplay = 6;
  const topDepts = sortedDepts.slice(0, maxDeptDisplay);
  const otherDeptSum = sortedDepts.slice(maxDeptDisplay).reduce((sum, item) => sum + item[1], 0);

  const deptLabels = topDepts.map(d => d[0]);
  const deptData = topDepts.map(d => d[1]);

  if (otherDeptSum > 0) {
    deptLabels.push(`기타 외 ${sortedDepts.length - maxDeptDisplay}개팀`);
    deptData.push(otherDeptSum);
  }

  const deptPalette = [
    "#38bdf8", // Sky Blue
    "#f59e0b", // Amber
    "#10b981", // Emerald
    "#818cf8", // Indigo
    "#ec4899", // Pink
    "#06b6d4", // Cyan
    "#f87171", // Coral Red
    "#94a3b8"  // Slate
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
  const raw = String(item.date || item.occurDate || item.reportDate || "").trim();
  const m = raw.match(/(\d{4})[^\d]?(\d{1,2})?[^\d]?(\d{1,2})?(?:[^\d]+(\d{1,2}))?(?:[^\d]+(\d{1,2}))?/);
  if (!m) return 0;
  const y = parseInt(m[1] || "1970", 10);
  const mon = parseInt(m[2] || "1", 10) - 1;
  const d = parseInt(m[3] || "1", 10);
  const h = parseInt(m[4] || "0", 10);
  const min = parseInt(m[5] || "0", 10);
  return new Date(y, mon, d, h, min, 0).getTime() || 0;
}

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
window.openIncidentDetail = function(id) {
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
};

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
  executeComparison();
  showToast("비교 분석 필터 조건이 2026년 vs 2025년으로 초기화되었습니다.", "info");
};

function extractYearAndMonth(item) {
  if (!item) return { year: 0, month: 0, time: 0 };
  const raw = String(item.date || item.occurDate || item.reportDate || "").trim();
  const m = raw.match(/(\d{4})[^\d]?(\d{1,2})?[^\d]?(\d{1,2})?(?:[^\d]+(\d{1,2}))?(?:[^\d]+(\d{1,2}))?/);
  if (!m) return { year: 0, month: 0, time: 0 };
  const y = parseInt(m[1] || "1970", 10);
  const mon = parseInt(m[2] || "1", 10);
  const d = parseInt(m[3] || "1", 10);
  const h = parseInt(m[4] || "0", 10);
  const min = parseInt(m[5] || "0", 10);
  const time = new Date(y, mon - 1, d, h, min, 0).getTime() || 0;
  return { year: y, month: mon, time };
}
window.extractYearAndMonth = extractYearAndMonth;

function getIncidentsForCurrentMode(side) {
  const all = (state.incidents && state.incidents.length > 0) ? state.incidents : [];
  const mode = state.comparison.mode || "year";

  if (mode === "year") {
    const selYear = document.getElementById(side === "a" ? "cmp-year-a" : "cmp-year-b");
    const targetY = selYear ? parseInt(selYear.value, 10) : (side === "a" ? 2026 : 2025);
    const label = `${targetY}년`;
    const filtered = all.filter(item => extractYearAndMonth(item).year === targetY);
    return { data: filtered, label, mode, year: targetY };
  } else if (mode === "month") {
    const selYear = document.getElementById(side === "a" ? "cmp-month-year-a" : "cmp-month-year-b");
    const selMonth = document.getElementById(side === "a" ? "cmp-month-a" : "cmp-month-b");
    const targetY = selYear ? parseInt(selYear.value, 10) : (side === "a" ? 2026 : 2025);
    const targetM = selMonth ? parseInt(selMonth.value, 10) : 5;
    const label = `${targetY}년 ${targetM}월`;
    const filtered = all.filter(item => {
      const ym = extractYearAndMonth(item);
      return ym.year === targetY && ym.month === targetM;
    });
    return { data: filtered, label, mode, year: targetY, month: targetM };
  } else if (mode === "custom") {
    const startEl = document.getElementById(side === "a" ? "cmp-start-a" : "cmp-start-b");
    const endEl = document.getElementById(side === "a" ? "cmp-end-a" : "cmp-end-b");
    const startStr = (startEl ? startEl.value : "") || (side === "a" ? "2026-01-01" : "2025-01-01");
    const endStr = (endEl ? endEl.value : "") || (side === "a" ? "2026-10-31" : "2025-10-31");
    const startTime = new Date(`${startStr}T00:00:00`).getTime() || 0;
    const endTime = new Date(`${endStr}T23:59:59`).getTime() || Number.MAX_SAFE_INTEGER;
    const label = `${startStr} ~ ${endStr}`;
    const filtered = all.filter(item => {
      const t = extractYearAndMonth(item).time;
      return t >= startTime && t <= endTime;
    });
    return { data: filtered, label, mode };
  }

  return { data: all, label: "전체", mode };
}
window.getIncidentsForCurrentMode = getIncidentsForCurrentMode;

window.executeComparison = function() {
  const resA = getIncidentsForCurrentMode("a");
  const resB = getIncidentsForCurrentMode("b");

  const dataA = resA.data;
  const dataB = resB.data;
  const labelA = resA.label;
  const labelB = resB.label;

  const labelPeriodAEl = document.getElementById("ck-label-period-a");
  const labelPeriodBEl = document.getElementById("ck-label-period-b");
  if (labelPeriodAEl) labelPeriodAEl.textContent = labelA;
  if (labelPeriodBEl) labelPeriodBEl.textContent = labelB;

  // 1. 총 사고 발생 건수
  const countA = dataA.length;
  const countB = dataB.length;
  const diffCount = countA - countB;
  const rateCount = countB > 0 ? ((diffCount / countB) * 100).toFixed(1) : (countA > 0 ? "+100.0" : "0.0");

  const valCountAEl = document.getElementById("ck-val-count-a");
  const valCountBEl = document.getElementById("ck-val-count-b");
  const badgeCountEl = document.getElementById("ck-badge-count");

  if (valCountAEl) valCountAEl.textContent = `${countA.toLocaleString()}건`;
  if (valCountBEl) valCountBEl.textContent = `${countB.toLocaleString()}건`;
  if (badgeCountEl) {
    if (diffCount < 0) {
      badgeCountEl.className = "ck-diff-badge ck-badge-improved";
      badgeCountEl.textContent = `▼ ${Math.abs(diffCount)}건 (${rateCount}%) 개선`;
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

  if (valCostAEl) valCostAEl.textContent = `${Math.round(costA / 10000).toLocaleString()}만원`;
  if (valCostBEl) valCostBEl.textContent = `${Math.round(costB / 10000).toLocaleString()}만원`;
  if (badgeCostEl) {
    if (diffCost < 0) {
      badgeCostEl.className = "ck-diff-badge ck-badge-improved";
      badgeCostEl.textContent = `▼ ${Math.round(Math.abs(diffCost) / 10000).toLocaleString()}만원 (${rateCost}%) 절감`;
    } else if (diffCost > 0) {
      badgeCostEl.className = "ck-diff-badge ck-badge-worsened";
      badgeCostEl.textContent = `▲ +${Math.round(diffCost / 10000).toLocaleString()}만원 (+${rateCost}%) 증가`;
    } else {
      badgeCostEl.className = "ck-diff-badge";
      badgeCostEl.textContent = `- 0만원 (동일)`;
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

  renderComparisonCharts(dataA, dataB, labelA, labelB, resA.mode);
  renderComparisonTable(dataA, dataB);
};

function renderComparisonCharts(dataA, dataB, labelA, labelB, mode) {
  if (typeof Chart === "undefined") return;

  // 1) Category Grouped Bar Chart
  const allCats = new Set();
  dataA.forEach(x => allCats.add(x.category || "기타"));
  dataB.forEach(x => allCats.add(x.category || "기타"));

  const catMapA = {};
  const catMapB = {};
  allCats.forEach(c => { catMapA[c] = 0; catMapB[c] = 0; });
  dataA.forEach(x => catMapA[x.category || "기타"]++);
  dataB.forEach(x => catMapB[x.category || "기타"]++);

  const sortedCats = Array.from(allCats).sort((a, b) => (catMapA[b] + catMapB[b]) - (catMapA[a] + catMapB[a])).slice(0, 7);

  const ctxCat = document.getElementById("cmpCategoryChart");
  if (ctxCat) {
    if (state.comparison.chartCategory) {
      state.comparison.chartCategory.destroy();
    }
    state.comparison.chartCategory = new Chart(ctxCat, {
      type: "bar",
      data: {
        labels: sortedCats,
        datasets: [
          {
            label: `${labelA} (A)`,
            data: sortedCats.map(c => catMapA[c]),
            backgroundColor: "#2563EB",
            borderRadius: 4
          },
          {
            label: `${labelB} (B)`,
            data: sortedCats.map(c => catMapB[c]),
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

  // 2) Secondary Trend / Pattern Chart
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const monthlyA = new Array(12).fill(0);
  const monthlyB = new Array(12).fill(0);

  const parseMonthIdx = (dateStr) => {
    if (!dateStr) return -1;
    const m = String(dateStr).match(/\d{4}[^\d](\d{1,2})/);
    return m ? parseInt(m[1], 10) - 1 : -1;
  };

  dataA.forEach(x => {
    const idx = parseMonthIdx(x.date || x.reportDate);
    if (idx >= 0 && idx < 12) monthlyA[idx]++;
  });
  dataB.forEach(x => {
    const idx = parseMonthIdx(x.date || x.reportDate);
    if (idx >= 0 && idx < 12) monthlyB[idx]++;
  });

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

function renderComparisonTable(dataA, dataB) {
  const tbody = document.getElementById("cmp-breakdown-tbody");
  if (!tbody) return;

  const catMapA = {};
  const catMapB = {};
  dataA.forEach(x => { const c = x.category || "기타"; catMapA[c] = (catMapA[c] || 0) + 1; });
  dataB.forEach(x => { const c = x.category || "기타"; catMapB[c] = (catMapB[c] || 0) + 1; });

  const allCats = Array.from(new Set([...Object.keys(catMapA), ...Object.keys(catMapB)]));
  allCats.sort((a, b) => ((catMapA[b] || 0) + (catMapB[b] || 0)) - ((catMapA[a] || 0) + (catMapB[a] || 0)));

  let rowIdx = 1;
  const rows = [];

  allCats.slice(0, 8).forEach(cat => {
    const a = catMapA[cat] || 0;
    const b = catMapB[cat] || 0;
    const diff = a - b;
    const rate = b > 0 ? ((diff / b) * 100).toFixed(1) : (a > 0 ? "+100.0" : "0.0");
    const diffClass = diff < 0 ? "diff-cell-improved" : (diff > 0 ? "diff-cell-worsened" : "");
    const diffText = diff > 0 ? `+${diff}건` : `${diff}건`;
    const rateText = diff > 0 ? `+${rate}%` : `${rate}%`;

    rows.push(`
      <tr>
        <td style="text-align: center; color: #64748b;">${rowIdx++}</td>
        <td><span class="badge badge-category">사고 유형</span></td>
        <td><strong>${escapeHtml(cat)}</strong></td>
        <td style="text-align: right; font-weight: 700; color: #2563eb;">${a}건</td>
        <td style="text-align: right; font-weight: 700; color: #d97706;">${b}건</td>
        <td style="text-align: right;" class="${diffClass}">${diffText}</td>
        <td style="text-align: right; font-weight: 700;" class="${diffClass}">${rateText}</td>
      </tr>
    `);
  });

  const resortMapA = {};
  const resortMapB = {};
  dataA.forEach(x => { const r = x.resort || "기타"; resortMapA[r] = (resortMapA[r] || 0) + 1; });
  dataB.forEach(x => { const r = x.resort || "기타"; resortMapB[r] = (resortMapB[r] || 0) + 1; });

  const allResorts = Array.from(new Set([...Object.keys(resortMapA), ...Object.keys(resortMapB)]));
  allResorts.sort((a, b) => ((resortMapA[b] || 0) + (resortMapB[b] || 0)) - ((resortMapA[a] || 0) + (resortMapB[a] || 0)));

  allResorts.slice(0, 5).forEach(res => {
    const a = resortMapA[res] || 0;
    const b = resortMapB[res] || 0;
    const diff = a - b;
    const rate = b > 0 ? ((diff / b) * 100).toFixed(1) : (a > 0 ? "+100.0" : "0.0");
    const diffClass = diff < 0 ? "diff-cell-improved" : (diff > 0 ? "diff-cell-worsened" : "");
    const diffText = diff > 0 ? `+${diff}건` : `${diff}건`;
    const rateText = diff > 0 ? `+${rate}%` : `${rate}%`;

    rows.push(`
      <tr>
        <td style="text-align: center; color: #64748b;">${rowIdx++}</td>
        <td><span class="badge badge-status-investigating">사업장</span></td>
        <td><strong>${escapeHtml(res)}</strong></td>
        <td style="text-align: right; font-weight: 700; color: #2563eb;">${a}건</td>
        <td style="text-align: right; font-weight: 700; color: #d97706;">${b}건</td>
        <td style="text-align: right;" class="${diffClass}">${diffText}</td>
        <td style="text-align: right; font-weight: 700;" class="${diffClass}">${rateText}</td>
      </tr>
    `);
  });

  tbody.innerHTML = rows.join("");
}
