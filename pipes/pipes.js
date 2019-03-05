const http = require('http');
const file = require('fs');

http.createServer(function(request, response) {
    // response.writeHead(200, {
    //     'Content-Type' : 'text/html'
    // });
    // var readable = file.createReadStream(__dirname + '/input.html', { encoding: 'utf8'});
    // readable.pipe(response);

    response.writeContinue(200, {
        'Content-Type' : 'application/json'
    });

    var object = {
        name: 'An',
        last_name: 'Nguyen',
        age: '24',
        job: 'Developer'
    }

    response.end(JSON.stringify(object));
}).listen(6969, '127.0.0.1');

console.log('Server is running in 127.0.0.1:6969');