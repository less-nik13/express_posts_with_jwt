const User = require('../models/user.entity')

class UserController {
    async createUser(req, res) {
        const {email, password} = req.body;
        const newUser = await User.create({email, password});
        return res.json(newUser);
    }

    async getUsers(req, res) {

    }

    async getUserByEmail(req, res) {

    }

    async getUserById(req, res) {

    }
}

module.exports = new UserController();