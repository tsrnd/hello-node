var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
    // res.send('end');
    // var err = new Error('Forbidden');
    // err.statusCode = 403;
    // res.send('asdasd');
    next(new Error('dasdasd'));
})

app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    console.error(req.xhr);
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message);
})

app.listen(8080);
