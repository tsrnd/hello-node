var express = require('express');
var bp = require('body-parser');
var mw = require('./middleware');
var app = express();

app.use(mw({
    cao: 10
}))

app.use(bp.urlencoded({
    extended: false
}))

app.get('/', function (req, res) {
    console.log('params func', req.params);
    res.send(`GGEZ`)
})

app.listen(8080);
