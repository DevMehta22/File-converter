const XLSX = require('xlsx');
const fs = require('fs');

// Load the Excel file
const workbook = XLSX.readFile('test.xlsx');

// Select the sheet you want to convert (by default, it's the first sheet)
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the sheet data to JSON
const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

// Write the JSON data to a file
fs.writeFileSync('output.json', JSON.stringify(jsonData, null, 2));

console.log('Excel data converted to JSON and saved as output.json');
