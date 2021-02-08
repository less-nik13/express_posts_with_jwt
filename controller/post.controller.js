const postService = require('../services/posts.service')

class PostController {
    createPost(req, res) {
        return postService.createPost(req, res)
    }

    async getAllPosts(req, res) {
        return postService.getAllPosts(req, res)
    }

    async getPost(req, res) {
        return postService.getPost(req, res)
    }
}

module.exports = new PostController();
