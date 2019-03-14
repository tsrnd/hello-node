// Initialize express router
let router = require('express').Router();
var contactController = require('../controllers/contactController');

// Import contact controller
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;