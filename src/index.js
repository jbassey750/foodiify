const express = require('express')
const stock = require('./xceldb')

const port = process.env.port || 3000

const app = express()

app.get('/stock-api', (req, res) => {
    res.send(stock)
})

app.listen(port, () => {
    console.log('server listening on port ' + port);
})