var express = require('express'),
    app = express(),
    port = process.env.PORT || 8001,
    mongoose = require('mongoose'),
    User = require('./model/usermodel'),
    Post = require('./model/postmodel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./router/router');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});


app.listen(port);

console.log('todo list RESTFUll API server started on: ' + port);
