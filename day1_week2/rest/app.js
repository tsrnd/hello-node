var express = require('express');
var app = express()
var router = express.Router()

middleware = require(__dirname+'/middleware/middleware.js')
router.use(middleware)
app.use('/', router)

route = require(__dirname+'/router.js')(app)
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})