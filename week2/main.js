let express = require("express");
let apiRoutes = require("./routes/user_route")
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
});
var db = mongoose.connection;
app.use("/api", apiRoutes)
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});
