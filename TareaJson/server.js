const fs = require('fs')
const express = require('express')
const app = express()

const dkoder = fs.readFileSync('koders.json')
const koder = JSON.parse(dkoder)

app.get('/add/:name/:id', addkoder)

function addkoder(request, response){
  const data = request.params
  const word = data.name
  const score = Number(data.id)
  koder[word] = score
  let dakoder = JSON.stringify(koder)
  fs.writeFile('koders.json',dakoder, finished)
  function finished(err){
    console.log('Ok')
  }
  response.send('ok1')
}

app.get('/all', showAll)
function showAll(request, response){
  response.send(koder)
}

app.listen(8080, console.log('Listening'))
