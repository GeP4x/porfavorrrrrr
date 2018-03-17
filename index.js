/* eslint-disable no-console */
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import fs from 'fs'
import helmet from 'helmet'
import morgan from 'morgan'
import http from 'http'
import https from 'https'
import rfs from 'rotating-file-stream'

import config from './config.json'

console.log(`Starting in ${process.env.NODE_ENV} mode.`)

const {
  port,
  logDir,
  privateKey,
  certificate
} = config

const accessLog = rfs('access.log', {
  interval: '1d',
  path: logDir || `${__dirname}/logs/`
})

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(helmet())
app.use(morgan('combined', { stream: accessLog }))

app.get('/status', (req, res) => {
  res.status(200).json({ message: 'OK' })
})

if (process.env.NODE_ENV === 'production') {
  const options = {
    cert: fs.readFileSync(certificate),
    key: fs.readFileSync(privateKey)
  }
  https.createServer(options, app).listen(port)
  console.log(`HTTPS server started on port ${port}.`)
} else {
  http.createServer(app).listen(port)
  console.log(`HTTP server started on port ${port}.`)
}
