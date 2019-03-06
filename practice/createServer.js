var sv = require("http")
var url = require("url")
var fs = require("fs")

function server(request, response) {
    // Parse the request containing file name
    var pathname = url.parse(request.url).pathname;
   
    // Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");

    fs.readFile('./page/'+ pathname.substr(1), function(err, data) {
        if (err) {
            response.writeHead(404, {'Content-Type': 'text/html'});
            return response.end("404 Not Found");
        }  
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    });
}

sv.createServer(server).listen(8888);
console.log("Server is running at http://127.0.0.1:8888");
