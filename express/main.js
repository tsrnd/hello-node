var express = require('express');
var app = express();
var router = require('./router');
var methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.set('view engine', 'pug')
app.use(router);
app.use(function (err, req, res, next) {
    console.log(err);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).render('error', {
        error: err
    });
})

var server = app.listen(8080, function () {
    console.log('Server start');
    console.log(this.address());
});
