var http = require('http');
var myModule = require('./myModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + myModule.myDateTime());
    res.write(req.url);
    res.end();
  }).listen(8888);
