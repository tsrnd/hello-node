var express = require('express');
var app = express();

app.get('/', function (req, res){
    console.log("Got a Get request for homepage");
    res.send('Hello Get');
})

app.post('/post_user', function (req, res){
    console.log("Got a Post request for homepage");
    res.send('Hello Post');
})

app.delete('/delete_user', function (req, res){
    console.log("Got a Del request for homepage");
    res.send('Hello Delete');
})

app.get('/list_user', function (req, res){
    console.log("Got a Get request for /list_user");
    res.send('Hello page listing');
})

var server = app.listen(3001, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example for listening at http://%s:%s", host, port);
})