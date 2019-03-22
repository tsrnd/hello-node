console.log('is main')
express = require('express')
util = require('util')
router = require('./router/router')
path = require('path')
db = require('./utils/db')

app = express()
var port = 3002

// use router
app.use(router)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))

var server = app.listen(port, () => {
    console.log('server is running at ... %d', port)
})
