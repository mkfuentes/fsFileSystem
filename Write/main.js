fs = require('fs');
fs.writeFile('index.html', 'Hello World!', function (err) {
    if (err)
        return console.log(err);
    console.log('Wrote Hello World in file helloworld.txt, just check it');
});