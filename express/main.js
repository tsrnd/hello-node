var methodOverride = require('method-override');
var express = require('express');
var multer = require('multer');
var path = require('path')
var router = require('./router');
var middleware = require('./middleware');
var error = require('./error');
var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use(multer({
    dest: './tmp/images'
}).any());

app.use(methodOverride('_method'));

app.use(middleware.Log);

app.set('view engine', 'pug');

app.use(router);

app.use(error.ErrorHandle);

var server = app.listen(8080, function () {
    console.log('Server start');
    console.log(this.address());
});
