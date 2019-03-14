var ex = require("express");
var fs = require("fs");
var app = ex();

app.get("/", function (req, res, next) {
    fs.readFile("/file-does-not-exist", function (err, data) {
        if (err) {
            next(err); // Pass errors to Express.
        }
        else {
            res.send(data);
        }
    });
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})




