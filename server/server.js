var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Finish!');

});

server.listen(6969, '127.0.0.1');
console.log('Start');