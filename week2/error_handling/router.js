var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mw = require('./middleware');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/users/:userID', mw.checkId, function(request, response) {
    response.send(`User's ID: ${request.params.userID}`);
});

module.exports = router;
