const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');

var app = express();

var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies - Create application/x-www-form-urlencoded parser
app.use(fileUpload());

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html', 'utf8');
});

// app.get('/contact/:userID/send', function(request, response) {
//     response.send('Customer have id ' + request.params.userID)
// });

app.get('/login', function(request, response) {
    response.sendFile(__dirname + '/login.html', 'utf8');
});

app.post('/accept', function(request, response) {
    console.log(request.body.username);
    let image = request.files.image;
    console.log(image);
    console.log(request.body.fileName);
    image.mv(__dirname + '/public/image/' + image.name, function(err) {
        if (err) console.log(err);
    });
    if (request.body.username == 'admin' && request.body.password == '123123') {
        response.render('admin', {username: request.body.username, path: '/image/' + image.name});
    } else {
        response.sendFile(__dirname + '/index.html', 'utf8');
    }
});

app.listen(6969);