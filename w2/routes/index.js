var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // debugger;
  res.render('index', { title: '123123' });
});

router.get('/user/:id(\\d+)', (req, res) => res.send(req.params.id));

module.exports = router;
 