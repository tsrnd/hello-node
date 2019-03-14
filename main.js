const express = require('express')
const util = require('util')
const router = require('./router/router')
const path = require('path')
const db = require('./utils/db')

var app = express()
var port = process.env.PORT

// apply router
app.use(router)

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/resources/views'));

var server = app.listen(port, () => {
    console.log(util.format('server is running on port %d...', port))
})