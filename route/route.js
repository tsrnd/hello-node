const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const multer  = require('multer');
const middleware = require('../middleware/middleware.js');
const controller = require('../controller/controller');

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded 
app.use(multer().any());

var user = {};

app.get('/', controller.homeController.index);

// app.route('/login').get(function(req, res) {
//     res.render('login');
// }).post(function (req, res) {
//     var file = "/public/images/" + req.files;
//     console.log(req.body);
   
//    fs.readFile( req.files.file.path, function (err, data) {
//       fs.writeFile(file, data, function (err) {
//          if( err ) {
//             console.log( err );
//             } else {
//                response = {
//                   message:'File uploaded successfully',
//                   filename:req.files.file.name
//                };
//             }
         
//          console.log( response );
//          res.end( JSON.stringify( response ) );
//       });
//    });
// });

// app.use(middleware.admin())

// app.get('/admin', function (req, res) {
    // res.render('admin', {username: req.body.username, path: '/images/' + req.body.image});
// });

// app.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params)
// });

module.exports = {
    app: app,
}
