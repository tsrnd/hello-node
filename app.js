console.log('is app')
const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')

const userRouter = require('./routers/user');
const app = express();

mongoose
    .connect("mongodb://localhost:27017/demoWeek2", { useNewUrlParser: true})
    .then(() => {
        console.log("connected database");
    })
    .catch( () => {
        console.log("connected Failure");
    });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded( { extended: false}));
app.use(function(req, res, next) {
    next();
});

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
app.use('/api/user', userRouter);

module.exports = app;