var http = require("http")

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello 8081\n');
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Hello 8080\n');
}).listen(8080);
// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))