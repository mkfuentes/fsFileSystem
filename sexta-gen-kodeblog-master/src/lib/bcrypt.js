
const bcrypt = require('bcrypt')

const { SALT_ROUNDS } = process.env
console.log('SALT_ROUNDS: ', typeof SALT_ROUNDS)

function hash (plainText) {
  return bcrypt.hash(plainText, parseInt(SALT_ROUNDS))
}

module.exports = {
  ...bcrypt,
  hash
}
