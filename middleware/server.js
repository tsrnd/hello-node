//call module express
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('stuff'));

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.get('/', function (req, res) {
    res.render('index', {time: req.requestTime});
});

app.get('/login', function (req, res, next) {
    res.render('login');
});



app.listen(6969);