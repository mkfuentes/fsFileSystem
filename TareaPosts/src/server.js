//definicion del servidor
const express = require('express')

const postRouter =require('./routes/posts')

const app = express()

app.use(express.json())

//aqui se monta la ruta
app.use('/posts', postRouter)
module.exports = app