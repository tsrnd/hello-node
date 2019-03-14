var express = require("express")
var app = express()

var bodyParser = require("body-parser")
var db = require('./db/db');
var {
    User
} = require('./model/user')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Nodejs running")
});

app.get('/user', (req, res) => {
    User.find().then((user) => {
        res.send({
            user
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.post('/user', (req, res) => {
    var newUser = new User({
        userID: req.body.userID,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });
    newUser.save().then((newUser) => {
        res.send(newUser);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.put('/user/:userID', (req, res) => {
    var query = {
        userID: req.params.userID,
    };
    User.findOneAndUpdate(query, {
        role: req.body.role,
        password: req.body.password
    }, {
            upsert: true
        }, (e, raw) => {
            if (e) {
                res.status(400).send('Cannot update user');
            }
            res.send(raw);
        });
});

app.delete('/user/:userID', (req, res) => {
    var query = {
        userID: req.params.userID,
    };
    User.findOneAndRemove(query, (e, raw) => {
        if(e) {
            res.status(400).send("cannot delete user");
        }
        res.send(raw);
    });
});

app.get('/user/:userID', (req, res) => {
    var userID = req.params.userID;
    User.findOne({userID: userID}).then((user) =>{
        res.send(user);
    }, (e) => {
        res.status(400).send("user not found");
    });
});

var server = app.listen(8000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is running at  http://%s:%s", host, port);
});