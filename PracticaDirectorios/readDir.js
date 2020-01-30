const fs = require('fs');

fs.readdir('./apple', (err, data) => {
    if (err) throw err;
    console.log(data)
  });