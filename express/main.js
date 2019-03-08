const express = require('express')
const util = require('util')
const router = require('./router')

var app = express()
var port = 3001

// apply router
app.use(router)

var server = app.listen(port, () => {
    console.log(util.format('server is running on port %d...', port))
})