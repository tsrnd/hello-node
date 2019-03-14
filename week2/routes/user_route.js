let router = require("express").Router();
let userController = require('../controllers/userController')

router.route('/user')
    .get(userController.index)
    .post(userController.add)
router.route('/user/:userId')
    .get(userController.detail)
    .put(userController.update)
    .delete(userController.delete)
// Export API routes
module.exports = router;