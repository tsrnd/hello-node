var express = require('express');
var mw = require('./middleware.js');

var router = express.Router();

router.get('/', function(request, response) {
    response.send(`Hello NodeJS`);
});

router.all('/method', function(request, response) {
    response.send(`Received ${request.method} method.`);
});

router.get('/users/:userId', mw.checkId, function(request, response) {
    response.send(`User's ID: ${request.params.userId}`);
});

router.get('/callback', function(request, response, next) {
    response.send(`Hello Node`);
    next();
}, function (request, response) {
    console.log(`--- Received callback`);
});

router.route('/check')
    .get(function(request, response) {
        response.send(`Check GET`);
    })
    .post(function(request, response) {
        response.send('Check POST');
    });

module.exports = router;
