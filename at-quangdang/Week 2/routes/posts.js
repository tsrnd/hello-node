const express = require('express');

const PostController = require('../controllers/posts');
const checkAuth = require('../middleware/auth')
const router = express.Router();

router.post("/add",checkAuth ,PostController.createPost);
router.put("/:id",checkAuth, PostController.updatePost);
router.get("/", checkAuth,PostController.getPosts);
router.get("/:id",checkAuth, PostController.getPost);

module.exports = router;