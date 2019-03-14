const express = require('express')
const util = require('util')
const router = require('./router/router')

var app = express()
var port = 3001

// apply router
app.use(router)
// app.set('view engine', 'ejs');
// app.set("views", __dirname + '/resources/views/ejs');

var server = app.listen(port, () => {
    console.log(util.format('server is running on port %d...', port))
})