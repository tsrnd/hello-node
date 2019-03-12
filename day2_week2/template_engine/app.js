var express = require('express'); 
var path = require('path'); 
var app_use_ejs = express();
app_use_ejs.set('views', [__dirname, path.join(__dirname, 'particle')]);
app_use_ejs.set('view engine', 'ejs');
app_use_ejs.get('/', function(req, res){ 
    res.render('index',{users : [
              { name: 'name1' },
              { name: 'name2' },
              { name: 'name3' }
    ]});
});

var server_use_ejs = app_use_ejs.listen(8081, function () {
    var host = server_use_ejs.address().address
    var port = server_use_ejs.address().port
    console.log("Example app_use_ejs listening at http://%s:%s", host, port)
})

var app_use_pug = express();
app_use_pug.set('views', path.join(__dirname, ''));
app_use_pug.set('view engine', 'pug');
app_use_pug.get('/', function(req, res){ 
    res.render('index',{users : [
              { name: 'name1' },
              { name: 'name2' },
              { name: 'name3' }
    ]});
});

var server_use_pug = app_use_pug.listen(8082, function () {
    var host = server_use_pug.address().address
    var port = server_use_pug.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
