var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var cookieParser = require('cookie-parser');

app.get('/', function(req, res) {
    res.send('Get');
});

app.post('/', function(req, res)  {
    res.send('Post');
});

app.delete('/del_user', function(req, res) {
    res.send('Delete');
});

app.get('/list_user', function(req, res) {
    res.send('List User');
});

app.get('/ab*cd', function(req, res) {
    res.send('page Match');s
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("example http://%s%s", host,port);
});

/**
 * Serving Static Files
 */
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp' }));
app.use(cookieParser());

app.get('/index.htm', function(req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
});

var urlendcodedParser = bodyParser.urlencoded({ extended: false })

app.post('/progress_post', urlendcodedParser, function(req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    res.end(JSON.stringify(response));
});

app.get('/progess_get', function(req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.post('/file_upload', function(req, res) {
    fs.readFile(req.files.file.path, function(err, data) {
        fs.writeFile(file, data, function(req, res) {
            if (err) {
                console.log(err);
            } else {
                response = {
                    message: 'FIle upload done',
                    filename: req.files.file.name
                }
            }
            res.end(JSON.stringify(response));
        });
    });
});


