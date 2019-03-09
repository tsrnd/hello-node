var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;

   fs.readFile(__dirname + '/' +  pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         res.writeHead(404, {'Content-Type': 'text/html'});
      }else{
         res.writeHead(200, {'Content-Type': 'text/html'});
         res.write(data.toString());
      }
      res.end();
   });
}).listen(7000);
console.log('Server running at 7000');

