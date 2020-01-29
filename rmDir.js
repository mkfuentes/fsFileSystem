const fs = require('fs');

fs.rmdir('./apple', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('done')
  });