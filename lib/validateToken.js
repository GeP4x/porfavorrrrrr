const verifyToken = (req, res, next) => {
  const { token } = req.body || ''

  if (token
    .toLowerCase()
    .match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  ) {
    next()
  } else {
    res.sendStatus(400)
    next('Token malformed or missing.')
  }
}

module.exports = verifyToken
