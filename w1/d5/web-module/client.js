var http = require('http');

// Option to be used by request
var option = {
    host: 'localhost',
    port: '8081',
    path: '/index.htm'
};

// Callback  function is used to deal with response
var callback = function(response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    response.on('end', function() {
        // Data received completely.
        console.log(body);
    });
}

// Make a request to the server
var req = http.request(option, callback);
req.end();
