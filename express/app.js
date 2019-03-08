const app = require('express')();
const bodyParser = require('body-parser');
const demoRouter = require('./router');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/demo', demoRouter);

app.listen('3000', () => {
    console.log("Hearing at localhost:3000");
})