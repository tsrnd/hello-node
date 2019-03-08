var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('Ket noi voi Client');
   connection.on('end', function() {
      console.log('Mat ket noi voi Client');
   });
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});
server.listen(8080, function() { 
  console.log('Server dang lang nghe');
});