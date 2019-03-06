var http = require("http");

var readStream = require("./readStream");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("readStream file");
    readStream();
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000/");