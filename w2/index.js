let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./routes/contact")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', {
    useNewUrlParser: true
});
var db = mongoose.connection;
// Setup server port
var port = process.env.PORT || 8081;
// Send message for default URL
app.get('/', (req, res) => res.send('Hello World!'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running server on port " + port);
});