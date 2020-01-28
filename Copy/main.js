const fs = require('fs');

fs.copyFile('index.html', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});