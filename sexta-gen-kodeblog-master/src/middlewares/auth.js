
const jwt = require('../lib/jwt')

function auth (request, response, next) {
  try {
    const { authorization: token } = request.headers
    console.log('auth: ', token)
    const decodedToken = jwt.verify(token)
    console.log('decodedToken: ', !decodedToken)
    if (!decodedToken) throw new Error('Invalid token')

    next()
  } catch (error) {
    response.status(401)
    response.json({
      success: false,
      message: 'Unauthorized'
    })
  }
}

module.exports = auth
