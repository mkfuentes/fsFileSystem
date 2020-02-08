const fs = require('fs')
const express = require('express')
const app = express()

const newKoder = {
  name:"Miguel2",
  id:10
}

const jsonString = JSON.stringify(newKoder)

fs.readFile('./koders.json', 'utf8', (err, jsonString) => {
  if (err){
    console.log("Archivo no leido" , err)
    return
  }
  console.log("Informacion: ", jsonString)
})

app.get('./new', addkoder)
function addkoder (request, response) {
  response.send('Agregar koder')
  
}

fs.writeFile('./koders.json', jsonString, err => {
  if (err) {
    console.log('Error escribiendo el archivo', err)
} else {
    console.log('Satisfactorio')
}
})

app.listen(8080, console.log('Listening'))
