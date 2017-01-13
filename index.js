'use strict'

const app = require('express')()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080 // eslint-disable-line no-magic-numbers, no-process-env

app.use(bodyParser.json())

app.post('/', (req, res) =>
  res.send(req.body)
)

module.exports = app.listen(PORT)
