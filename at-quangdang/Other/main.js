var http = require("http");
var customer = require('./router/customer');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World');    
}).listen(8081);


