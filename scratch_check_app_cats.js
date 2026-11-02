const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// find all category references
const regex = /category\s*===?\s*['"]([^'"]+)['"]/g;
const cats = new Set();
let match;
while ((match = regex.exec(content)) !== null) {
  cats.add(match[1]);
}
console.log('Category comparisons in app.js:', Array.from(cats));

// check populateFilterDropdowns
const idx = content.indexOf('populateFilterDropdowns');
if (idx !== -1) {
  console.log('populateFilterDropdowns excerpt:');
  console.log(content.slice(idx, idx + 600));
}
