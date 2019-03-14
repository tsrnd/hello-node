var express = required("express");
var app = express();
var fs = require("fs");

app.get("/err", (req, res, next) => {
    throw new Error("Error")
});

app.get("/err-file", (req, res, next) => {
    fs.readFile("/file-not-found", (err, data) => {
        if(err){
            next(err);
        }
        else {
            res.data(data);
        }
    });
});

