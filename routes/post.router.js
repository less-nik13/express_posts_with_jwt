const {Router} = require('express');
const PostController = require('../controller/post.controller');

const router = Router();

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPost);
router.post('/', PostController.createPost);

module.exports = router;