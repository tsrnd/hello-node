console.log('is router')
const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();


router.post("/signup", UserController.createUser);
router.get('/index', UserController.index);

// router.post()
// router.post("/login", UserController.userLogin);

module.exports = router;