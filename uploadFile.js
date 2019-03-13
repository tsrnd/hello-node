var express = require('express');
var app = express();
var fs = require('fs');

var bodyParse = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParse.urlencoded({
    extended: false
}));
app.use(multer({
    dest: '/tmp/'
}));

app.get('/uploadFile.htm', function (req, res) {
    res.sendFile(__dirname + '/' + 'uploadFile.htm');
});
app.post('/file_upload', function (req, res) {
    console.log(req.files.file.name);
    console.log(req.files.file.path);
    console.log(req.files.file.type);
    var file = __dirname + '/' + req.files.file.name;
    
    fs.readFile(req.files.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
               response = {
                   message: 'File upload successflly',
                   filename: req.files.file.name
               };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server = app.listen(8081, function(){
    var host = server.address().host
    var port = server.address.port
    console.log('example app is listening at http: //%s%s', host, port);
});