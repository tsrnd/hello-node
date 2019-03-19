// getting-started.js
const mongoose = require('mongoose');
//define a schema
const Schema = mongoose.Schema;
const URL= "localhost", PORT= 27017, DBNAME= 'test'
mongoose.connect(`mongodb://${URL}:${PORT}/${DBNAME}`, {useNewUrlParser: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
