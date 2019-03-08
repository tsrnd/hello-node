const express = require('express')

var app = express()
var port = 3001

app.get('/', (req, resp) => {
    resp.end('something wrong')
})

var server = app.listen(port, () => {
    console.log('server is running...')
})