var http = require("http");

http.createServer(function(req, res) {
  // res.writeHead({ 'content-type': 'text/plain'})
  res.end("Hello Worldsdfs");
}).listen(8081);
console.log('server running at http://127.0.0.0:8081/');