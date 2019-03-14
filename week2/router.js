var express = require("express")
var app = express();

app.get('/', (req, res) => {
    res.send("hello");
});

app.all('/hello', (req, res, next) => {
    console.log("hello all");
    next()
})

app.get('/test', (req, res, next) => {
    console.log("the response will be next function");
    next()
}, (req, res) => {
    res.send("hello")
});

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at  http://%s:%s", host, port);
});

