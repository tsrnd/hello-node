var birds = require('./router');
var express = require('express')
var app = express()
// ...

app.use('/birds', birds)
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })