var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));

app.get('/indexGet.html', function (req, res) {
   res.sendFile( __dirname + "/" + "indexGet.html");
})

app.get('/indexPost.html', function (req, res) {
    res.sendFile( __dirname + "/" + "indexPost.html");
})

app.get('/process_get', function (req, res) {

    response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

app.post('/process_post', urlencodedParser, function (req, res) {

    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Ung dung Node.js dang nghe tai dia chi: http://%s:%s", host, port)

})