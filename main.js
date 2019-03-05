var http = require('http');

var port = 3001
http.createServer(function (req, resp) {
    resp.writeHead(200, {'Content-Type': 'application/json'})
    resp.end('{"test": 11111}')
}).listen(port)

console.log('server running on port ', port)