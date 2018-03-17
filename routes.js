const NationalRailDarwin = require('national-rail-darwin')

module.exports = (app) => {
  app.post('/getArrivalsBoard/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsBoard(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getArrivalsBoardWithDetails/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsBoardWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getArrivalsDepartureBoard/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsDepartureBoard(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getArrivalsDepartureBoardWithDetails/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsDepartureBoardWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getDepartureBoard/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getDepartureBoard(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getDepartureBoardWithDetails/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getDepartureBoardWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getFastestDeparture/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getFastestDeparture(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getFastestDepartureWithDetails/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getFastestDepartureWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getNextDeparture/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getNextDeparture(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getNextDepartureWithDetails/:crs', (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getNextDepartureWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getServiceDetails/:service', (req, res) => {
    const { token } = req.body
    const { service } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getServiceDetails(service, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getStationDetails/:query', (req, res) => {
    const { token } = req.body
    const { query } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getStationDetails(query, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })
}
