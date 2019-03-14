const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const postRouter = require('./routers/posts');
const userRouter = require('./routers/user');

const app = express();

mongoose
    .connect("mongodb://localhost:27017/mongo_example", { useNewUrlParser: true})
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

app.use('/api/posts', postRouter);
app.use('/api/user', userRouter);

module.exports = app;