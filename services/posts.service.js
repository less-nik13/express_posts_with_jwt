const Post = require('../models/post.entity');

class PostService {
    async createPost(req, res) {
        const {title, description} = req.body;
        const {id} = req.user;
        const post = await Post.create({title, description, userId: id});
        return res.status(200).json({post});
    }

    async getAllPosts(req, res) {
        const posts = await Post.findAll({where: {userId: req.user.id}});
        res.status(200).json({posts});
    }

    async getPost(req, res) {
        const post = await Post.findOne({where: {id: req.params.id, userId: req.user.id}});
        res.status(200).json({post});
    }
}

module.exports = new PostService();