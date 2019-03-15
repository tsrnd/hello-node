var express = require('express');
var router = require('./router');
var app = express();

app.use('/', router);
app.set('view engine', 'pug');

app.use(express.static('public'))

var server = app.listen(8080, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Listener ${host}: ${port}`);
});
