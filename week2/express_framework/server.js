var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer();

app.use(upload.array())
app.use(express.static('public'));

app.get('/form_get', function(request, response) {
    console.log('-- Accept GET /form_get');
    response.sendFile(__dirname+ '/' + 'form_get.html');
});

app.get('/handle_form_get', function(request, response) {
    console.log('-- Accept GET /handle_form_get');
    name = request.query.name;
    age = request.query.age;
    response.redirect(`/result?name=${name}&age=${age}`)
});

app.get('/result', function(request, response) {
    response.send(`Hello ${name}, ${age} is your age !!!`);
});

var server = app.listen(8080, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Listener ${host}:${port}`);
});
