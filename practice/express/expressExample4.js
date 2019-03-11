var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));

app.get('/upload', function (req, res) {
    res.sendFile(__dirname + "/page/" + "upload.html");
})

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public/upload');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage }).single('file');


app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded successfully!");
        console.log(req.file.originalname + " uploaded successfully");
    });
});


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})