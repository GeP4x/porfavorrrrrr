const NationalRailDarwin = require('national-rail-darwin')

const validateToken = require('./lib/validateToken')
const validateOptions = require('./lib/validateOptions')

module.exports = (app) => {
  app.post('/getArrivalsBoard/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsBoard(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getArrivalsBoardWithDetails/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsBoardWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getArrivalsDepartureBoard/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsDepartureBoard(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getArrivalsDepartureBoardWithDetails/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getArrivalsDepartureBoardWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getDepartureBoard/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getDepartureBoard(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getDepartureBoardWithDetails/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getDepartureBoardWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getFastestDeparture/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getFastestDeparture(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getFastestDepartureWithDetails/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getFastestDepartureWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getNextDeparture/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getNextDeparture(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getNextDepartureWithDetails/:crs', validateToken, validateOptions, (req, res) => {
    const { options, token } = req.body
    const { crs } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getNextDepartureWithDetails(crs, options, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getServiceDetails/:service', validateToken, validateOptions, (req, res) => {
    const { token } = req.body
    const { service } = req.params

    const rail = new NationalRailDarwin(token)

    rail.getServiceDetails(service, (err, response) => (
      err
        ? res.status(500).json(err)
        : res.json(response)
    ))
  })

  app.post('/getStationDetails/:query', validateToken, validateOptions, (req, res) => {
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
