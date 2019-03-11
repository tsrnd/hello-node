var express = require('express');
var app = express();

var myLogger = function(req, res, next) {
    console.log("LOGGED");
    next();
}

app.use(myLogger);

// app.get('/', function(req, res) {
//     res.send("Test Middleware Part 1");
// })


/*
    Whenever app receives a request
    it will print "LOGGED" to the terminal
*/
//app.listen(3000)

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}
  
app.use(requestTime)

app.get('/', function (req, res) {
    var responseText = 'Test middleware Part 2<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

/*
    When make a request to the root of app
    The app will display the timestamp of your request in the browser. 
*/
app.listen(3000)