var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Get');
})

app.post('/', function(req, res)  {
    res.send('Post');
})

app.delete('/del_user', function(req, res) {
    res.send('Delete');
})

app.get('/list_user', function(req, res) {
    res.send('List User');
})

app.get('/ab*cd', function(req, res) {
    res.send('page Match');s
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("example http://%s%s", host,port);
})

/**
 * Serving Static Files
 */
app.use(express.static('public'));

app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/progess_get', function(req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    res.end(JSON.stringify(response));
})