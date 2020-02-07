const db = require("./src/lib/db.js")
const server = require('./src/server')

db
  .then(() => {
    console.log("estamos conectados")
    server.listen(8080, () => {
      console.log('Server running')
    })
  })
  .catch(error => {
    console.log("estamos conectados", error)
  })