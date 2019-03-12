var express = require('express');
var app = express();

//This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.send('Hello GET');
})

app.post('/', function(req,res){
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
})

app.delete('/del_user', function(req, res){
    console.log("Got a REQUEST for /del_user");
    res.send('HELLO DELETE');
})

app.get('/list_user', function(req, res){
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

// var server = app.listen(8080, function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })
//method get

// app.use(express.static('public'));
// app.get('/a.html', function (req, res){
//     res.sendFile(__dirname+"/"+"a.html");
// })
// app.get('/process_get', function(req, res){
//     response = {
//         first_name: req.query.first_name,
//         last_name: req.query.last_name
//     };
//     console.log(response)
//     res.end(JSON.stringify(response));
// })
// var server = app.listen(8084, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
//  })
//method post
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false})
app.use(express.static('public'));
app.get('/form.html', function(req, res) {
    res.sendFile( __dirname + "/" + "form.html" );
})
app.post('/process_post',urlencodedParser, function(req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(8084, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
