var http = require("http");

http.createServer(function (req, res){
    //Add response header : Content-Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Hello, I'm Huy Doan");
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');