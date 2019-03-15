var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodejs_mongo");
  dbo.collection("books").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});