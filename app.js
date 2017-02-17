const express = require('express')
const bodyParser = require('body-parser')
const { listColors, getColor, createColor, deleteColor } = require('./dal.js')
const app = express()
app.use(bodyParser.text())


app.get('/colors', function (req, res) {
  res.send(listColors())
})

app.get('/colors/:name', function (req, res) {
  res.send(getColor(req.params.name))
})

app.post('/colors', function (req, res) {
  res.send(createColor(req.body))
})

app.delete('/colors/:name', function (req, res) {
  res.send(deleteColor(req.params.name))
})

app.listen(3030, function () {
  console.log("listening on port 3030!")
})
