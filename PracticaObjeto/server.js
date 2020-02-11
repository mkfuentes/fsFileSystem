const express = require('express')
const app = express()

const koders = [
  {
    name:'Miguel',
    id:1
},
  {
    name:'Angel',
    id:2
  },
  {
    name:'Fuentes',
    id:3
  },
]

app.get('/koders/name/:name', (request, response) => {
  console.log('Koders: ', koders)
  let name = request.params.name
  response.json(`Este es: ${name}`)
})

app.get('/koders/id/:id', (request, response) => {
  console.log('Koders', koders+request.params.id)
  response.json(`Este es: ${koders[id]}`)
})

app.get('/koders', (request, response) => {
  console.log('Koders', koders)
  response.json(`Estos son: ${JSON.stringify(koders)}`)
})

app.listen(8080, () => {
  console.log('App listening')
})