var ex = require("express");
var app = ex();

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    var productArr = ["pen", "ruler", "pencil", "book"]
    res.render('index', {
        items: productArr
    })
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
