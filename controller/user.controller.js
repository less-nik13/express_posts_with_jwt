const User = require('../models/user.entity');

class UserController {

    async getUsers(req, res) {
        const users = await User.findAll()
        return res.json(users);
    }

    // async getUserByEmail(req, res) {
    //     const user = await User.findOne({ email })
    // }
    //
    // async getUserById(req, res) {
    //     const user = await User.findOne({ id })
    // }
}

module.exports = new UserController();
