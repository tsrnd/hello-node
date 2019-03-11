var express = require('express');
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')

middleware = require(__dirname+'/middleware')
router.use(middleware.logTimeAndURLMiddleware)
app.use('/', router)
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
route = require(__dirname+'/router.js')(app)
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})