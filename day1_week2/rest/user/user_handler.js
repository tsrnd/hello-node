var appRoot = require('app-root-path');
var express = require('express');
var app = express();
var fs = require("fs");
readerStream = fs.createReadStream(appRoot + "/day1_week2/rest/users.json")
readerStream.setEncoding('UTF8');
module.exports = {
    "getAllUsers": function (req, res) {
        readerStream.pipe(res)
        readerStream.on('error', function(err) {
            console.log(err)
            res.status(500).send('Something broke!');
        });
    },

    "getUser": function (req, res) {
        dataJSONStr = '';
        readerStream.on('data', function(chunk) {
            dataJSONStr += chunk;
        });

        readerStream.on('end',function() {
            dataJSON = JSON.parse(dataJSONStr)
            user = dataJSON.find(function(element) {
                return element.id == req.params.id
            })
            if (user == null) {
                res.sendStatus(404);
                return
            }
            console.log(user)
            res.end(JSON.stringify(user));

        });

        readerStream.on('error', function(err) {
            console.log(err)
            res.status(500).send('Something broke!');
        });
    },

    "deleteUser": function (req, res) {
        dataJSONStr = '';
        readerStream.on('data', function(chunk) {
            dataJSONStr += chunk;
        });

        readerStream.on('end',function() {
            dataJSON = JSON.parse(dataJSONStr)
            data = dataJSON.filter( function(item) {
                return item.id != req.params.id;
            });
            if (data.length == dataJSON.length) {
                res.sendStatus(404);
                return
            }
            fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(data, null, 4), function(){})

            console.log(data)
            res.end("Delete successful!");

        });

        readerStream.on('error', function(err) {
            console.log(err)
            res.status(500).send('Something broke!');
        });
    }
}
