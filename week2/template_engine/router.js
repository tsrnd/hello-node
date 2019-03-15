var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.route('/register')
    .get(function(request, response) {
        response.render('register');
    })
    .post(function(request, response) {
        console.log('-- Accept GET /register');
        name = request.body.name;
        age = request.body.age;
        response.render('result', {name: name, age: age});
    })
;

module.exports = router;
