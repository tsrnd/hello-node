const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser')
const conn = require('../database/model/connection');
const app = express();
const handle = require('./handle');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(router);
app.use(handle);

conn.once('open', function() {
  console.log('Opening connection');
});

var server = app.listen(8080, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Listener ${host}: ${port}`);
});
