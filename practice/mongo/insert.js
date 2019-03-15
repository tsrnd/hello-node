var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("nodejs_mongo");
  var myobj = { name: "Mắt biếc", author: "Nguyễn Nhật Ánh", pulishing_year: '2004'};
  dbo.collection("books").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});