const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
// initialize our express app
const app = express();
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://127.0.0.1:27017/product';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
