const User = require('./user.entity');
const Post = require('./post.entity');

User.hasMany(Post);
Post.belongsTo(User);

module.exports = {
    User, Post
}