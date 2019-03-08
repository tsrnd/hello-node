var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlParser = bodyParser.urlencoded({ extended: false });
var fs = require("fs");
var multer = require('multer');
var multer = require('multer');
// var upload = multer({ dest: __dirname + '/tmp' });
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ dest: '/tmp/'}));
// app.use(multer({dest:'./uploads/'}).single('photo'));
// app.use(multer({dest: __dirname+'/file/uploads/'}).single('file'));

app.get('/', (req, res) => {
    res.send('hello nodejs');
});

app.get('/a*b', (req, res) => {
    res.send('regex match');
});

app.post('/', (req, res) => {
    res.send('post');
});

app.delete('/', (req, res) => {
    res.send('delete');
});

app.get('/info', (req, res) => {
    res.sendFile(__dirname + '/' + 'form.html');
})

app.get('/get-info', (req, res) => {
    response = {
        name: req.query.name,
        age: req.query.age
    };
    res.end(JSON.stringify(response));
})

app.post('/post-info', urlParser, (req, res) => {
    response = {
        name: req.body.name,
        age: req.body.age
    };
    console.log(req.body);
    res.end(JSON.stringify(response));
});

app.post('/file-upload', multer().single('file'), (req, res) => {
    console.log(req.file);
    var file = __dirname + '/' + req.file.originalname;
    // fs.readFile(req.file.path, (err, data) => {
    //     fs.writeFile(file, data, (err) => {
    //         if(err) {
    //             console.log(err)
    //         } else {
    //             response = {
    //                 message: "upload file successfully.",
    //                 filename: req.file.originalname
    //             };
    //         }
    //         console.log(response)
    //         res.end(JSON.stringify(response));
    //     });
    // });
    fs.writeFileSync(req.file.originalname, req.file.buffer);
    response = {
        message: "upload file successfully.",
        filename: req.file.originalname
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at  http://%s:%s", host, port);
});
