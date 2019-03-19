const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const book = require("./api/models/book")
require('dotenv').load()

const db = require('./api/db')
const port = process.env.PORT || 8081
const accepted_extensions = ['jpg', 'png', 'jpeg'];

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static('public'))
// app.use(express.static('public'));
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public/upload/book');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "-" + file.originalname);
    }
});
app.use(multer({storage: storage,
    limits: { 
        fileSize: 10 * 1024 * 1024,  // 10 MB upload limit
    },
    fileFilter: (req, file, cb) => {
        // if the file extension is in our accepted list
        if (accepted_extensions.some(ext => file.originalname.endsWith("." + ext))) {
            return cb(null, true);
        }
        // otherwise, return error
        return cb(new Error('Only ' + accepted_extensions.join(", ") + ' files are allowed!'));
    }
}).single('file'))
app.set("views", __dirname + '/api/views');
app.set("view engine", "pug")

let routes = require('./api/router') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port)

console.log('RESTful API server started on: ' + port)