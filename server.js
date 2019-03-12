// var net = require('net');
// var server = net.createServer(function (connection) {
//     console.log('first');
//     connection.write('data', function (err) {

//     });
//     connection.on('end', function () {
//         console.log('end connect');
//     });

//     // connection.pipe(connection);
// });

// server.listen(8080, function () {
//     console.log('server is listening');
// });
// build server, khai báo sử dụng socket io
var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./client");

var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);
