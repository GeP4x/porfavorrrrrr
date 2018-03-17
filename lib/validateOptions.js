const standardOptions = ['timeOffset', 'timeWindow', 'rows', 'filter', 'destination']

const validOptionsPerRoute = {
  getArrival: standardOptions,
  getArrivalsBoard: standardOptions,
  getArrivalsBoardWithDetails: standardOptions,
  getArrivalsDepartureBoard: standardOptions,
  getArrivalsDepartureBoardWithDetails: standardOptions,
  getDepartureBoard: standardOptions,
  getDepartureBoardWithDetails: standardOptions,
  getFastestDeparture: standardOptions,
  getFastestDepartureWithDetails: standardOptions,
  getNextDeparture: standardOptions,
  getNextDepartureWithDetails: standardOptions,
  getServiceDetails: [],
  getStationDetails: []
}

const validateOptions = (req, res, next) => {
  const { options } = req.body

  if (!options) {
    next()
  } else {
    const route = req.url.split('/')[1]

    Object.keys(options).forEach((i) => {
      if (validOptionsPerRoute[route].indexOf(i) === -1) {
        res.sendStatus(400)
        next(400)
      }
    })

    next()
  }
}

module.exports = validateOptions
