var express = require('express');
var router = require('./router');
var app = express();
var mw = require('./middleware');

app.use('/', router);
app.use(mw.errorHandling);

var server = app.listen(8080, 'localhost', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Listener ${host}:${port}`);
});
