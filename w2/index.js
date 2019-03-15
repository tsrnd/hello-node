let express = require('express')
let bodyParser = require('body-parser')
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./routes/contact")
let db = require('./db/connect')

// Use Api routes in the App
app.use('/api', apiRoutes)
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hey',
        message: 'Hello there!'
    })
})

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at  http://%s:%s", host, port);
});