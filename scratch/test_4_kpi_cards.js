const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== Comprehensive Testing of 4 Core KPI Management Cards & Cost Card Normalization ===");

// 1. Verify index.html
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');

// Check container grid class
const gridMatch = html.match(/<section class="kpi-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"[^>]*>/);
console.log("1. Container has required grid classes?", !!gridMatch);
if (!gridMatch) {
  console.error("FAIL: Container does not have 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'");
  process.exit(1);
}

// Check the 4 cards and their required element IDs & text
const hasCard1 = html.includes('id="kpi-card-total"') && html.includes('id="kpiTotalIncidentCount"') && html.includes('총 사고 발생 건수');
const hasCard2 = html.includes('id="kpi-card-employee"') && html.includes('id="kpiEmployee2026Count"') && html.includes('2026년 직원 안전사고');
const hasCard3 = html.includes('id="kpi-card-golf"') && html.includes('id="kpiGolfCCCount"') && html.includes('골프장(4대 CC) 사고');
const hasCard4 = html.includes('id="kpi-card-cost"') && html.includes('id="kpi-total-cost"') && html.includes('당사 지급 / 보상 비용');

console.log("2. Card 1 (총 사고 발생 건수):", hasCard1);
console.log("   Card 2 (2026년 직원 안전사고):", hasCard2);
console.log("   Card 3 (골프장(4대 CC) 사고):", hasCard3);
console.log("   Card 4 (당사 지급 / 보상 비용):", hasCard4);

if (!hasCard1 || !hasCard2 || !hasCard3 || !hasCard4) {
  console.error("FAIL: One or more of the 4 core KPI cards is missing in index.html!");
  process.exit(1);
}

// Extract kpi-grid section
const kpiSectionMatch = html.match(/<section class="kpi-grid[^>]*>([\s\S]*?)<\/section>/);
const kpiSectionHtml = kpiSectionMatch ? kpiSectionMatch[1] : '';

// Check removed cards inside kpi-grid
const removedPending = !kpiSectionHtml.includes('id="kpi-card-pending"') && !kpiSectionHtml.includes('조사 및 조치 진행 중');
const removedPreventive = !kpiSectionHtml.includes('id="kpi-card-preventive"') && !kpiSectionHtml.includes('사고 조치 완료율');
const removedMedical = !kpiSectionHtml.includes('id="kpi-card-medical"') && !kpiSectionHtml.includes('병원 진료 / 보상 건');
console.log("3. Obsolete cards removed from main kpi-grid?");
console.log("   - 조사 및 조치 진행 중 removed:", removedPending);
console.log("   - 사고 조치 완료율 removed:", removedPreventive);
console.log("   - 병원 진료/보상 건 removed:", removedMedical);
if (!removedPending || !removedPreventive || !removedMedical) {
  console.error("FAIL: Obsolete cards still present in kpi-grid!");
  process.exit(1);
}

// 2. Setup mock environment and load data.js / app.js
class Element {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.innerText = '';
    this.innerHTML = '';
    this.textContent = '';
    this.classList = {
      classes: new Set(),
      add: (c) => this.classList.classes.add(c),
      remove: (c) => this.classList.classes.delete(c),
      contains: (c) => this.classList.classes.has(c)
    };
    this.style = {};
  }
}
const elements = {};
function getEl(id, tag = 'div') {
  if (!elements[id]) elements[id] = new Element(tag, id);
  return elements[id];
}

global.document = {
  getElementById: (id) => getEl(id),
  querySelector: (sel) => {
    if (sel.startsWith('#')) return getEl(sel.slice(1));
    return new Element('div');
  },
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: new Element('body')
};
global.window = { addEventListener: () => {}, document: global.document };
Object.assign(global, global.window);

const dataCode = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf-8');
vm.runInThisContext(dataCode);
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf-8');
vm.runInThisContext(appCode);

state.incidents = JSON.parse(JSON.stringify(INITIAL_INCIDENTS));

// 3. Test renderKPIs() with default data.js
renderKPIs();

const c1 = document.getElementById("kpiTotalIncidentCount").innerText;
const c2 = document.getElementById("kpiEmployee2026Count").innerText;
const c2Sub = document.getElementById("kpi-sub-employee").innerHTML;
const c3 = document.getElementById("kpiGolfCCCount").innerText;
const c3Sub = document.getElementById("kpi-sub-golf").innerHTML;
const c4Html = document.getElementById("kpi-total-cost").innerHTML;

console.log("\n4. KPI Values Rendered (Default data.js):");
console.log("   - [카드 1] 총 사고 발생 건수:", c1);
console.log("   - [카드 2] 2026년 직원 안전사고:", c2, "| 서브:", c2Sub);
console.log("   - [카드 3] 골프장(4대 CC) 사고:", c3, "| 서브:", c3Sub);
console.log("   - [카드 4] 당사 지급 / 보상 비용 (HTML):", c4Html);

if (c1 !== "558건" || c2 !== "21건" || c3 !== "359건") {
  console.error("FAIL: Calculated KPI values do not match expected figures!");
  process.exit(1);
}

if (!c4Html.includes("0원") || !c4Html.includes("(0건)")) {
  console.error("FAIL: Cost card does not display '0원 (0건)' when cost data is empty/0!");
  process.exit(1);
}

// 4. Test renderKPIs() when actual cost data is introduced (e.g. from Excel upload or registration)
console.log("\n5. Testing dynamic cost accumulation when actual cost data exists:");
state.incidents.push({
  id: "2026-TEST-0001",
  date: "2026.10.15",
  resort: "밸리팀",
  category: "타구사고",
  companyAmount: 15000000, // 1,500만원
  victimType: "직원",
  status: "조치완료"
});
state.incidents.push({
  id: "2026-TEST-0002",
  date: "2026.10.16",
  resort: "힐스팀",
  category: "카트사고",
  companyAmount: 25000000, // 2,500만원
  victimType: "고객",
  status: "보험/보상진행"
});

renderKPIs();
const dynamicCostHtml = document.getElementById("kpi-total-cost").innerHTML;
console.log("   - Cost after adding 1,500만원 + 2,500만원 (총 4,000만원, 2건):", dynamicCostHtml);

if (!dynamicCostHtml.includes("4,000만원") || !dynamicCostHtml.includes("(2건)")) {
  console.error("FAIL: Dynamic cost accumulation failed!");
  process.exit(1);
}

// Reset state
state.incidents = JSON.parse(JSON.stringify(INITIAL_INCIDENTS));
renderKPIs();

// 5. Test Drilldown Functions
console.log("\n6. Testing Drilldown Data Population:");

openKpiDrilldown("employee2026");
const rowsEmp = (document.getElementById("kpi-drilldown-tbody").innerHTML.match(/<tr/g) || []).length;
console.log("   - Drilldown employee2026 rows:", rowsEmp);
if (rowsEmp !== 21) {
  console.error(`FAIL: Expected 21 rows for employee2026, got ${rowsEmp}`);
  process.exit(1);
}

openKpiDrilldown("golfCC");
const rowsGolf = (document.getElementById("kpi-drilldown-tbody").innerHTML.match(/<tr/g) || []).length;
console.log("   - Drilldown golfCC rows:", rowsGolf);
if (rowsGolf !== 359) {
  console.error(`FAIL: Expected 359 rows for golfCC, got ${rowsGolf}`);
  process.exit(1);
}

console.log("\nALL TESTS PASSED SUCCESSFULLY! 100% Verified.");
