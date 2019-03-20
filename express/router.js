var express = require('express');
var bp = require('body-parser');
var router = express.Router();
var user = require('./controller');
var middleware = require('./middleware');

router.use(bp.urlencoded({
    extended: false
}));

router.get('/login', user.getLogin);
router.post('/login', user.login);

router.use(middleware.Auth);

router.get('/user/roles', user.roles);
router.get('/user', user.list);
router.get('/user/add', user.add);
router.get('/user/:id', user.view);
router.put('/user/:id', user.update);
router.get('/user/:id/edit', user.edit);
router.delete('/user/:id', user.delete);
router.post('/user', user.store);

module.exports = router;
