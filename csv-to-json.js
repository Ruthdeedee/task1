const fs = require('fs');
const csv = require('csv-parser');

const results = [];

// Read the CSV file and convert it to JSON
fs.createReadStream('input.csv')
  .pipe(csv())
  .on('data', data => results.push(data))
  .on('end', () => {
    // Write the JSON data to a file
    const json = JSON.stringify(results);
    fs.writeFileSync('output.json', json);

    console.log('CSV file successfully converted to JSON!');
  });