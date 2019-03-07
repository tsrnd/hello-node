var express = require('express');
var app = express();
var fs = require('fs');

var json = __dirname + "/" + "user.json";

var user = {
    "user4": {
        "name": "Check",
        "password": "1234",
    }
}

app.get('/user/list', function(req, res) {
    fs.readFile(json, "utf8", function(err, data) {
        res.end(data);
    });
});

app.post('/user/add', function(req, res) {
    fs.readFile(json, "utf8", function(err, data) {
        var newdata = JSON.parse(data);
        newdata["user4"] = user["user4"];
        fs.writeFile(json, JSON.stringify(newdata), function(err) {
            if (err) {

            } else {
                fs.readFile(json, "utf8", function(err, redJson) {
                    if (err) {

                    } else {
                        console.log(redJson)
                        res.end(redJson);
                    }
                })
            }
        });
    });
});

app.get('/user/:id', function(req, res) {
    fs.readFile(json, 'utf8', function(err, data) {
        var users = JSON.parse(data);
        var user = users["user" + req.params.id];
        res.end(JSON.stringify(user));
    })
});

app.delete('/user/:id', function(req, res) {
    fs.readFile(json, 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data["user" + req.params.id];
        fs.writeFile(json, JSON.stringify(data), function(err) {
            fs.readFile(json, 'utf8', function(err, newdata) {
                res.end(newdata);
            });
        });
    });
});

var server = app.listen(8081, function() {
    var host = server.address().address;
    var port = server.address().port;
});