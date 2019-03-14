const express = require('express')
const util = require('util')
const router = require('./router/router')
const path = require('path')

var app = express()
var port = 3001

// apply router
app.use(router)

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/resources/views'));

var server = app.listen(port, () => {
    console.log(util.format('server is running on port %d...', port))
})