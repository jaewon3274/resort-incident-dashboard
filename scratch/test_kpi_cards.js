const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== Testing 4-Card KPI Grid & Removal of Medical Card ===");

// 1. Verify index.html
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf-8');
const kpiGridMatch = html.match(/<section class="kpi-grid"[\s\S]*?<\/section>/);
if (!kpiGridMatch) {
  console.error("FAIL: Could not find .kpi-grid in index.html");
  process.exit(1);
}
const kpiGridContent = kpiGridMatch[0];

const cardMatches = kpiGridContent.match(/<div class="kpi-card[^"]*" id="([^"]+)"/g) || [];
console.log(`Found ${cardMatches.length} cards in .kpi-grid:`);
cardMatches.forEach(c => console.log(" ", c));

if (cardMatches.length !== 4) {
  console.error(`FAIL: Expected exactly 4 cards, found ${cardMatches.length}`);
  process.exit(1);
}

if (kpiGridContent.includes('id="kpi-card-medical"') || kpiGridContent.includes('id="kpi-medical"')) {
  console.error("FAIL: Hospital/medical card still present in .kpi-grid!");
  process.exit(1);
}
console.log("PASS: Medical card completely removed from .kpi-grid in index.html.");

// 2. Verify styles.css
const css = fs.readFileSync(path.join(__dirname, '../styles.css'), 'utf-8');
const kpiGridCssMatch = css.match(/\.kpi-grid\s*\{[\s\S]*?\}/);
if (!kpiGridCssMatch) {
  console.error("FAIL: Could not find .kpi-grid in styles.css");
  process.exit(1);
}
console.log("Found .kpi-grid CSS:\n", kpiGridCssMatch[0]);

if (!kpiGridCssMatch[0].includes('repeat(4, 1fr)')) {
  console.error("FAIL: .kpi-grid does not use repeat(4, 1fr)!");
  process.exit(1);
}
console.log("PASS: .kpi-grid uses repeat(4, 1fr) for grid-cols-4 layout.");

// 3. Verify app.js renderKPIs execution without kpi-medical
class Element {
  constructor(tag, id = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.innerText = '';
    this.textContent = '';
    this.style = {};
  }
}
const elements = {};
global.document = {
  getElementById: (id) => {
    if (id === 'kpi-medical' || id === 'kpi-card-medical') return null; // removed!
    if (!elements[id]) elements[id] = new Element('div', id);
    return elements[id];
  },
  querySelector: () => new Element('div'),
  querySelectorAll: () => [],
  addEventListener: () => {}
};
global.window = { addEventListener: () => {}, document: global.document };
Object.assign(global, global.window);

const dataCode = fs.readFileSync(path.join(__dirname, '../data.js'), 'utf-8');
vm.runInThisContext(dataCode);
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf-8');
vm.runInThisContext(appCode);

state.filteredIncidents = INITIAL_INCIDENTS;
try {
  renderKPIs();
  console.log("PASS: renderKPIs() executed without errors!");
  console.log("  kpi-total:", document.getElementById('kpi-total').innerText);
  console.log("  kpi-progress:", document.getElementById('kpi-progress').innerText);
  console.log("  kpi-resolved-rate:", document.getElementById('kpi-resolved-rate').innerText);
  console.log("  kpi-total-cost:", document.getElementById('kpi-total-cost').innerText);
} catch (e) {
  console.error("FAIL: renderKPIs threw error:", e);
  process.exit(1);
}

console.log("\nAll KPI Card clean-up tests passed successfully!");
