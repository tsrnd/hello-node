var mongo = require('mongodb');
var url = "mongodb://localhost:27017/";

mongo.connect(url, function (err) {
    if (err) throw err;
    console.log("Collection created!");
});