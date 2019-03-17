var express = require('express');
var app = express();

//static file
app.use(express.static('../public'));

app.get('/', function (req, res) {
    console.log('Get for homepage');
    res.send('Hello GET');
});

app.post('/', function (req, res) {
    console.log('Post for homepage');
    res.send('Hello POST');
});

app.delete('/del_user', function (req, res) {
    console.log('Delete for /del_user');
    res.send('Hello DELETE');
});

app.get('/list_user', function (req, res) {
    console.log('Get for /list_user');
    res.send('List user');
});

app.get('/ab*cd', function (req, res) {
    console.log('Get for /ab*cd');
    res.send('User');
});

app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.htm');
});

app.get('/process_get', function(req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Listening at http://%s:%s", host, port);
});