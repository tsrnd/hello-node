const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://127.0.0.1:27017/product';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// a simple test url to check that all of our files are communicating correctly.
router.get('/', product_controller.product_list);
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/:id', product_controller.product_details);
router.put('/:id/', product_controller.product_update);
router.delete('/:id/', product_controller.product_delete);
module.exports = router;
