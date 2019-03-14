var express = require('express');
var router = require('./router');
var app = express();
app.use('/', router)
var server = app.listen(8080, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Listener ${host}:${port}`);
});
