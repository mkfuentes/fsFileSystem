const fs = require('fs');

fs.appendFile('index.html', 'data to append', function (err) {
  if (err) throw err;
  console.log('Saved!');
});