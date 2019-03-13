var express = require('express');
var app = express();

// This responds on the homepage
// app.get('/', function(req, res){
//     res.send("hi get");
// });
// This responds a post for the homepage
// app.post('/', function(req, res){
//     res.send('hi post');
// });
// This responds a delete request for the /del_user page
// app.delete('/del_user', function(req, res){
//     res.send('hi delete');
// });
// get list_user
// app.get('/list_user', function(req, res){
//     res.send('hi list user');
// });
// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*bc', function(req, res){
    res.send('page pattern match');
});
var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
});
