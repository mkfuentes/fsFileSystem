const express = require('express')
const cors = require('cors')

const postsRouter = require('./routes/posts')
const usersRouter = require('./routes/users')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'ok'
  })
})

app.use('/posts', postsRouter)
app.use('/users', usersRouter)

module.exports = app
