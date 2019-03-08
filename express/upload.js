var express = require("express");
var app = express();
var fs = require("fs");
var multer = require('multer');
var upload = multer({
    dest: __dirname + '/tmp'
});

app.get('/info', (req, res) => {
    res.sendFile(__dirname + '/' + 'form.html');
});

app.post('/file-upload', upload.single('file'), function(req, res) {

    console.log(req.file.filename);
    console.log(req.file.path);
    console.log(req.file.mimetype);
    var file = __dirname + "/" + req.file.filename;
    fs.readFile(req.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'File duoc upload thanh cong!',
                    filename: req.file.filename
                };
            }
            console.log(response);
            res.end(JSON.stringify(response))
        })
    })
});

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at  http://%s:%s", host, port);
});
