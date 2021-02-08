const Sequelize = require('sequelize');
const sequelize = require('../dbConfig');

const Post = sequelize.define("post", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Post;
