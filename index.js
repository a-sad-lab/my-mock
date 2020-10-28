const express = require('express')
const app = express()
const port = 4001

app.listen(port, function() {
  console.log(`My mock app listening at http://localhost:${port}`)
})

app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get('/null', function(req, res) {
  res.json(null)
})

app.get('/user', function(req, res) {
  res.json({name: 'Furry', age: 10})
})

app.get('/where', function(req, res) {
  res.send('Somewhere I belong?')
})

app.post('/push', function(req, res) {
  res.send(`OK! Got it.[${req.body.gift}]`)
})
