var net = require("net");
var server = net.createServer(function(connection){
    console.log("client connection");
    connection.on("end", function(){
        console.log("client disconnect");
    });
    connection.write("Hello World");
    connection.pipe(connection);
});
server.listen(8080, function(){
    console.log("Server is listening")
})
