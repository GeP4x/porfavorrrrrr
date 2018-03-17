const NationalRailDarwin = require('national-rail-darwin')

module.exports = app => app.post('/getDepartureBoard/:crs', (req, res) => {
  const { token, options } = req.body

  const rail = new NationalRailDarwin(token)

  rail.getDepartureBoard(req.params.crs, options, (err, response) => (
    err
      ? res.status(500).json(err)
      : res.json(response)
  ))
})
