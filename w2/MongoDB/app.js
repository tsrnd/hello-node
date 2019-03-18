const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');
// initialize our express app
const app = express();

const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
