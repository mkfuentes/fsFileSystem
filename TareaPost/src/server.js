//definicion del servidor
const express = require('express')

const koderRouter =require('./routes/koders')

const app = express()

app.use(express.json())

//aqui se monta la ruta
app.use('/koders', koderRouter)
module.exports = app