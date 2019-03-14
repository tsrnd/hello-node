var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(multer({
    dest: 'upload/image'
}).single('file'));

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Upload',
        message: 'Hello'
    })
})

app.post('/file_upload', function (req, res) {
    var file = __dirname + "/public/" + req.file.originalname;

    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.log(err);
                res.end();
            } else {
                res.render('profile', {
                    title: 'Profile',
                    name: req.body.name,
                    avatar: req.file.originalname
                })
            }
        });
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
