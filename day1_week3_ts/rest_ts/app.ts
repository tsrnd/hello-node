import * as express from 'express';
import {json, urlencoded} from 'body-parser';
import {logTimeAndURLMiddleware} from './middleware/middleware'
import {connect} from 'mongoose'
import {route} from './router'
import * as app_root from "app-root-path";
let app = express();
let router = express.Router();
let config_myapp = require(app_root+"/app.config.json")
router.use(logTimeAndURLMiddleware)
app.use('/', router)
app.use( json() );       // to support JSON-encoded bodies
app.use(urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var db_url = function(type, port) {
  return `${type}://${config_myapp.db.user}:${config_myapp.db.password}@localhost:${port}/${config_myapp.db.db_name}`
}
// Connect mongo
connect(db_url('mongodb', 27017), (err) => {
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

route(app)
let server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
