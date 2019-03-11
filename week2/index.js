var express = require("express");
var app = express();
var test = require('./router2');
var router = express.Router();

app.use('/test', test);

router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

router.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
})

router.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next router
    if (req.params.id === '0') next('route')
    else next()
}, function (req, res, next) {
    res.send('regular')
})

router.get('/user/:id/:name', function (req, res, next) {
    console.log(req.params.id)
    res.send('special')
})

// mount the router on the app
app.use('/', router)

var server = app.listen(8001, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at http://%s:%s", host, port);
});
