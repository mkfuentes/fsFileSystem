var fs = require('fs');

fs.unlink('index.html', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});