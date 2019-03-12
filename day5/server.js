var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    console.log("Request cho " + pathname + " da duoc nhan.");

    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, {
                'Content-Type': 'text/html'
            });
        } else {
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });

            // Ghi noi dung cua File toi phan BODY cua Response
            response.write(data.toString());
        }
        // Gui phan BODY cua Response 
        response.end();
    });
}).listen(8081);

// In thong bao sau tren console
console.log('Server dang chay tai dia chi: http://127.0.0.1:8081/');
