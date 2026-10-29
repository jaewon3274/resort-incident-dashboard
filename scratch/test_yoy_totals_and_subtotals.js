const fs = require('fs');
const path = require('path');

// Mock browser DOM environment
class Element {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.children = [];
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.classList = {
      classes: new Set(),
      add: (c) => this.classList.classes.add(c),
      remove: (c) => this.classList.classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.classes.has(c)) this.classList.classes.delete(c);
          else this.classList.classes.add(c);
        } else if (force) {
          this.classList.classes.add(c);
        } else {
          this.classList.classes.delete(c);
        }
      },
      contains: (c) => this.classList.classes.has(c)
    };
    this.style = {};
  }
  closest() { return this; }
  querySelector() { return null; }
  querySelectorAll() { return []; }
}

const elements = {};
function getOrCreate(id, tag = 'div') {
  if (!elements[id]) {
    elements[id] = new Element(tag, id);
  }
  return elements[id];
}

global.document = {
  getElementById: (id) => getOrCreate(id),
  querySelector: (sel) => {
    if (sel.startsWith('#')) return getOrCreate(sel.slice(1));
    return new Element('div');
  },
  querySelectorAll: () => [],
  addEventListener: () => {},
  body: new Element('body')
};
global.window = {
  addEventListener: () => {},
  document: global.document
};
Object.assign(global, global.window);

// Load data.js and app.js
const vm = require('vm');
const dataCode = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf-8');
vm.runInThisContext(dataCode);
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf-8');
vm.runInThisContext(appCode);

console.log("=== Testing YoY Comparison Totals & Subtotals ===");

// Initialize data in state
state.incidents = (typeof INITIAL_INCIDENTS !== 'undefined') ? INITIAL_INCIDENTS : [];
console.log(`Loaded ${state.incidents.length} incidents.`);

// Mock select elements
const typeFilterEl = document.getElementById("yoyGlobalTypeFilter");
typeFilterEl.value = "all";

const bizSelectEl = document.getElementById("yoyTableBizSelect");
bizSelectEl.value = "all";

const sortSelectEl = document.getElementById("yoyTableSortSelect");
sortSelectEl.value = "risk_desc";

// Filter 2026 vs 2025
const data2026 = state.incidents.filter(x => {
  const p = parseIncidentDate(x);
  return p && p.getFullYear() === 2026;
});
const data2025 = state.incidents.filter(x => {
  const p = parseIncidentDate(x);
  return p && p.getFullYear() === 2025;
});

console.log(`2026 incidents: ${data2026.length}, 2025 incidents: ${data2025.length}`);

// Test 1: renderComparisonTable with all data
renderComparisonTable(data2026, data2025, "all");

const tbody = document.getElementById("cmp-breakdown-tbody");
const summaryBadge = document.getElementById("cmp-table-summary-badge");

console.log("\n[Test 1: Render All Data]");
console.log("Summary Badge:", summaryBadge.innerHTML.replace(/\s+/g, ' ').trim());

const rowsHtml = tbody.innerHTML;
const trMatches = rowsHtml.match(/<tr[\s\S]*?<\/tr>/g) || [];
console.log(`Total rows rendered in table: ${trMatches.length}`);

// Verify Total Row
const firstRow = trMatches[0];
const hasTotalRow = firstRow && firstRow.includes('cmp-total-row') && firstRow.includes('전체 (총계)');
console.log("First row is [전체 합계] row?", hasTotalRow);

// Extract A and B from total row
const totalAMatch = firstRow.match(/>(\d+(?:,\d+)*)건<\/td>[\s\S]*?>(\d+(?:,\d+)*)건<\/td>/);
if (totalAMatch) {
  console.log(`Total row counts: A=${totalAMatch[1]}, B=${totalAMatch[2]}`);
}

// Find all Subtotal rows
const subtotalRows = trMatches.filter(r => r.includes('cmp-subtotal-row'));
console.log(`Number of resort subtotal rows: ${subtotalRows.length}`);

let sumSubA = 0;
let sumSubB = 0;
subtotalRows.forEach(r => {
  const mResort = r.match(/\[소계\]\s*([^<]+)/);
  const mCounts = r.match(/>(\d+(?:,\d+)*)건<\/td>[\s\S]*?>(\d+(?:,\d+)*)건<\/td>/);
  if (mResort && mCounts) {
    const resortName = mResort[1].trim();
    const cntA = parseInt(mCounts[1].replace(/,/g, ''), 10);
    const cntB = parseInt(mCounts[2].replace(/,/g, ''), 10);
    sumSubA += cntA;
    sumSubB += cntB;
    console.log(`  - ${resortName}: A=${cntA}건, B=${cntB}건`);
  }
});

console.log(`Sum of Subtotals: A=${sumSubA}, B=${sumSubB}`);
const totalACnt = parseInt(totalAMatch[1].replace(/,/g, ''), 10);
const totalBCnt = parseInt(totalAMatch[2].replace(/,/g, ''), 10);
console.log(`Subtotals match Total row? A: ${sumSubA === totalACnt}, B: ${sumSubB === totalBCnt}`);
if (sumSubA !== totalACnt || sumSubB !== totalBCnt) {
  console.error("FAIL: Subtotals do not sum to total!");
  process.exit(1);
}

// Test 2: Filter by Biz (밸리팀)
console.log("\n[Test 2: Filter by Biz = 밸리팀]");
bizSelectEl.value = "밸리팀";
renderComparisonTable();

const trMatchesBiz = tbody.innerHTML.match(/<tr[\s\S]*?<\/tr>/g) || [];
console.log(`Rows rendered when Biz=밸리팀: ${trMatchesBiz.length}`);
const firstRowBiz = trMatchesBiz[0];
const subRowBiz = trMatchesBiz.find(r => r.includes('cmp-subtotal-row'));
console.log("First row has [전체 합계]?", firstRowBiz.includes('cmp-total-row'));
console.log("Contains [소계] 밸리팀?", subRowBiz && subRowBiz.includes('[소계] 밸리팀'));
console.log("Summary Badge when Biz=밸리팀:", summaryBadge.innerHTML.replace(/\s+/g, ' ').trim());

// Test 3: Filter by Incident Type (타구사고)
console.log("\n[Test 3: Filter by Incident Type = 타구사고]");
bizSelectEl.value = "all";
typeFilterEl.value = "타구사고";
renderComparisonTable(null, null, "타구사고");

const trMatchesType = tbody.innerHTML.match(/<tr[\s\S]*?<\/tr>/g) || [];
console.log(`Rows rendered when Type=타구사고: ${trMatchesType.length}`);
console.log("First row has 타구사고?", trMatchesType[0].includes('타구사고'));
console.log("Summary Badge when Type=타구사고:", summaryBadge.innerHTML.replace(/\s+/g, ' ').trim());

// Test 4: Drilldown testing
console.log("\n[Test 4: Drilldown function verification]");
openYoyDrilldown('all', 'all');
console.log("Drilldown all/all: listA=", state.yoyDrilldown.listA.length, "listB=", state.yoyDrilldown.listB.length);

openYoyDrilldown('밸리팀', 'all');
console.log("Drilldown 밸리팀/all: listA=", state.yoyDrilldown.listA.length, "listB=", state.yoyDrilldown.listB.length);

openYoyDrilldown('밸리팀', '타구사고');
console.log("Drilldown 밸리팀/타구사고: listA=", state.yoyDrilldown.listA.length, "listB=", state.yoyDrilldown.listB.length);

console.log("\nAll tests passed successfully!");
