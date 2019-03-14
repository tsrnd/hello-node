const express = require('express');

const PostController = require('../controllers/posts');

const router = express.Router();

router.post("/add", PostController.createPost);
router.put("/:id", PostController.updatePost);
router.get("/", PostController.getPosts);
router.get("/:id", PostController.getPost);

module.exports = router;