var mongoose = require("mongoose");
const DBNAME = 'testdb';
const PORT = 27017;
mongoose.createConnection(`mongodb://localhost:${PORT}/${DBNAME}`,{useNewUrlParser: true}, function(err, res){
    if (err) throw err;
    console.log("Collection created");

});