const express = require('express')
const app = express()

app.get('/', (request, response) => {
    console.log('GET /')
    response.send('GET /')
})

app.get('/miguel', (request,response) => {
        response.send('mkfuentes')
    })

app.get('/koders/:id', (request, response) => {
  console.log('Koder id:', request.params.id)
  response.send(`Koder: ${request.params.id}`)
})

app.get('/middleware',(request, response, next) => {
  console.log('Middleware')
  next()
}, (request, response, next) =>{
  console.log('Middleware2')
  next()
}, (request, response, next) =>{
  console.log('Middleware2')
  next()
},  (request, response, next) =>{
  console.log('Middleware3')
  next()
},  (request, response, next) =>{
  response.send('Fin')
  next()
})

app.listen(8080, () => {
    console.log('App listening')
})
