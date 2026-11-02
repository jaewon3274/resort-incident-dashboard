const fs = require('fs');
const path = require('path');

// Let's inspect the 558 records from data.js and the 3 new records from Excel
// First load data.js
const { INITIAL_INCIDENTS } = require('./data.js');
console.log('Loaded INITIAL_INCIDENTS:', INITIAL_INCIDENTS.length);

// Load the 3 new records we extracted earlier into new_3records.json
const newRecords = JSON.parse(fs.readFileSync('new_3records.json', 'utf8'));
console.log('Loaded newRecords:', newRecords.length);

// Check if all 558 records have correct categories or if any are corrupted
const catCounts = {};
INITIAL_INCIDENTS.forEach(item => {
  catCounts[item.category] = (catCounts[item.category] || 0) + 1;
});
console.log('Current data.js category counts:', catCounts);
