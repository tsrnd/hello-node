var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).single('file'));

app.get('/upload.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "upload.htm" );
})
app.post('/file_upload', function (req, res) {
    console.log(req.file);
    console.log(req.file.name);
    console.log(req.file.path);
    console.log(req.file.type);
    var file = __dirname + "/tmp/" + req.file.originalname;

    fs.readFile( req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if( err ) {
                console.log( err );
            } else {
                response = {
                    message:'File uploaded successfully',
                    filename:req.file.name
                };
            }

            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})