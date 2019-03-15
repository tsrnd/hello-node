var express = require('express');
var bp = require('body-parser');
var router = express.Router();
var user = require('./controller');

router.use(bp.urlencoded({
    extended: false
}));

router.get('/user', user.list);
router.get('/user/add', user.add);
router.get('/user/:id', user.view);
router.put('/user/:id', user.update);
router.get('/user/:id/edit', user.edit);
router.delete('/user/:id/delete', user.delete);
router.post('/user', user.store);

module.exports = router;
