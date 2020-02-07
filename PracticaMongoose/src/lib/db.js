const mongoose = require('mongoose')

const DB_PASSWORD = "spaceman1"
const DB_NAME = "test"

const url = `mongodb+srv://mkfuentes:${DB_PASSWORD}@servermkfuentes-pczqn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  userNewUrlParser:true,
  useUnifiedTopology: true
})