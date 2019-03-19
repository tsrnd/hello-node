var mongoose = require('mongoose');
const host = process.env.MONGOOSE_DB_HOST || "localhost"
const dbName = process.env.MONGOOSE_DB_NAME || "nodejs_mongo"
var url = "mongodb://" + host + ":27017/" + dbName;

mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) throw err;
    console.log("Connect mongoose success!");
});


var db = mongoose.connection;

module.exports = db