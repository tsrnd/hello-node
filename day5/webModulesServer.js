var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request cho " + pathname + "da nhan duoc");
    fs.readFile(pathname.substr(1), function(err, data){
        if (err){
            console.log(err);
            response.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});

            response.write(data.toString());
        }
        response.end();
    });
   
}).listen(8082);
console.log('Server dang chay tai dia chi : http://127.0.0.1:8082/');