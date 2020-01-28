var fs = require('fs');
  fs.readFile('index.html', 'utf8' function(err, data) {
    if (err) throw err
    console.log(data)
  });
