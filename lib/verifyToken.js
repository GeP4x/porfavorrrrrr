const uuidTest = require('uuid-regexp')

const verifyToken = (req, res, next) => {
  req.token = uuidTest(req.body.token)

  next()
}

module.exports = verifyToken
