var express = require('express');
var router = express.Router();
import AuthController from '../controllers/auth.controller';
import Authenticate from '../middlewares/Authenticate';

/* GET users listing. */
router
    .get('/', function(req, res, next) {
        res.send('respond with a resource');
    })
    .get('/me', Authenticate.verify, AuthController.me)
    .post('/login', AuthController.login, Authenticate.generate)
    .post('/signup', AuthController.signup);

module.exports = router;
