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



app.get('/koders', (request, response) => {
  console.log('Koders', koders)
  response.send(`Estos son: ${koders}`)
})