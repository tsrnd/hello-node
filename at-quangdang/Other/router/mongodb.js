var mongodb = require('mongodb');
var express = require('express');
var app = express();

var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/mongo_example';

var mydbo;

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo_example");
    mydbo = dbo.collection('customer')
    dbo.createCollection("customer", function(err, res) {
        if (err) throw err;
        db.close();
    });
});

app.get('/customer/all', function(req, res) {
    mydbo.find({}).toArray(function(err, result) {
        if (err) throw err;
        res.end(result);
    });
});

app.post('/customer/add', function(req, res) {
    
});

app.get('/customer/:id', function(req, res) {

});

app.delete('/customer/:id', function(req, res) {

});


