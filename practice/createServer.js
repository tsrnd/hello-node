var sv = require("http")

function server(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}

sv.createServer(server).listen(8888);
console.log("Server is running at http://127.0.0.1:8888");
