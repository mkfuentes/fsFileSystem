//definicion del servidor
const express = require('express')

const koderRouter =require('./routes/koders')

const app = express()

app.use(express.json())

app.use('/koders', koderRouter)
module.exports = app