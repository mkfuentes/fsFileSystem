var fs = require('fs')
let contenido
fs.readFile('index.html', 'utf8', function read(err, data) {
    if (err) {throw err}
    contenido = data
})
console.log(contenido)