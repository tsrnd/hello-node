var http = require('http');
var option = {
    host: 'localhost',
    port: '8080',
    path: '/index.html'
}
var callback = function(response) {
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function(){
        console.log(body)
    });
}
var request = http.request(option, callback);
request.end();
