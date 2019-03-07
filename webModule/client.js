var http = require("http");

var options = {
    host: 'localhost',
    port: '8000',
    path: '/index.html'
 };

var callback = (response) => {
    var body = '';
    response.on('data', (data) => {
        body += data;
    });
    response.on('end', ()=> {
        console.log(body);
    });
}
var request = http.request(options, callback);
request.end();
