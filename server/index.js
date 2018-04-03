'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.disable('x-powered-by')

app.use('/', [
  require('./routes/user_routes'),
  require('./routes/project_routes')
])

const errorHandler = require('./middleware/error_middleware')

app.use([
  errorHandler.unauthorized,
  errorHandler.forbidden,
  errorHandler.conflict,
  errorHandler.badRequest,
  errorHandler.unprocessable,
  errorHandler.notFound,
  errorHandler.genericError,
  errorHandler.catchall
])

module.exports = app
