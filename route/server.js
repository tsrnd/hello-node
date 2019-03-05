const http = require('http');
const file = require('fs');
const qs = require('querystring');

http.createServer(function(request, response) {
    if (request.url == '/login') {
        console.log('Login Page');
        response.writeHead(200, {'Content-Type': 'text/html'});
        file.createReadStream(__dirname + '/login.html', {encoding : 'utf8'}).pipe(response);
    } else if (request.url == '/') {
        console.log('Home Page');
        response.writeHead(200, {'Content-Type': 'text/html'});
        file.createReadStream(__dirname + '/index.html', {encoding : 'utf8'}).pipe(response);
    } else if (request.url == '/store' && request.method == 'POST') {
        let body = '';
        request.on('data', chunk => {
            body += chunk;
        });
        request.on('end', () => {
            console.log(qs.parse(body));
            response.end('ok');
        });
    }
}).listen(6969, '127.0.0.1');

console.log('Server is running in 127.0.0.1:6969');