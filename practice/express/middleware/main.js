var express = require('express')
var app = express()
var auth = require("./auth")
// ...

app.use(auth)
app.get("/hello", function (req, res) {
    name = req.headers["auth-login"];
    res.send("Hello " + name)
});
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})