var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;

    fs.readFile(pathname.substring(1), (err, data) => {
        if(err) {
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
