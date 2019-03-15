var express = require('express');
var app = express()
var router = express.Router()
var bodyParser = require('body-parser')

var appRoot = require('app-root-path');
config_myapp = require(appRoot+ "/day4_week2/rest/app.config.json")
middleware = require(__dirname+'/middleware')

router.use(middleware.logTimeAndURLMiddleware)
app.use('/', router)
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var db_url = function(type, port) {
  return `${type}://${config_myapp.db.user}:${config_myapp.db.password}@localhost:${port}/${config_myapp.db.db_name}`
}
info_db = config_myapp.db.user + ':' + config_myapp.db.password + '@localhost:{port}/mydb'
// Connect mongo
const mongoose = require('mongoose');
mongoose.connect(db_url('mongodb', 27017), (err) => {
    if(err) {
        console.log("Connect to mongodb failed", err.message)
    } else {
        console.log("Connect to mongodb database success")
    }
})
// Connect postgres
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: db_url('postgres', 5432)
});

pool.on('connect', () => {
  console.log('connected to the prostgres database success');
});

route = require(__dirname+'/router.js')(app)
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})