var express = require('express');
var multer  = require('multer');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));    // handle post requets
app.use(multer({dest:'./day5/uploads/'}).single('file'));   //handle file upload
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/product', (req, res) => {
    res.send('product');
});

app.get('/user', (req, res) => {
    res.send('user');
})

app.get('/list', (req, res) => {
    res.send('list');
});

app.get('/a*b', (req, res) => {
    res.send(req.params[0]);
});

app.get('/e/', (req, res) => {
    res.send(req.params[0]);
});
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params);
});

app.get('/product/:userId([0-9]+)', (req, res, next) => {
    next();
}, (req, res) => {
    res.json(200, req.params);
});

app.get('/product2/:userId([0-9]+)', (req, res, next) => {
    next();
}, (req, res) => {
    res.redirect('https://www.google.com/');
});
// Form request
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/handle_get', (req, res) => {
    response = {
        email: req.query.email,
        password: req.query.password
    };
    res.send(response);
});

app.post('/handle_post', (req, res) => {
    response = {
        email: req.body.email,
        password: req.body.password
    };
    res.send(response);
});

app.post('/handle_file', (req, res) => {
    var file = req.file;
    fs.readFile(file.path, (err, data) => {
        if (err) return console.log('Err: ', err);
        fs.writeFile(__dirname + `/uploads/${file.originalname}`, data, (err) => {
            if (err) {
                console.log('Errors: ', err);
            } else {
                response = {
                    mes: 'Upload done',
                    file: file.originalname
                };
            res.send(response);
            }
        });
    });
});
var server = app.listen(7000, () => {
    var host = server.address().host;
    var port = server.address().port;
    // console.log(host);
    console.log(`Host: www:// ${host}:${port}`);
});


