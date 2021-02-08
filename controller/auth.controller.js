const authService = require('../services/auth.service')

class AuthController {
    registerUser(req, res) {
        return authService.createUser(req.body, res)
    }

    // async loginUser(req, res) {
    //    return authService.loginUser(req, res);
    // }

    async loginPassport(req, res) {
        return authService.loginPassport(req, res)
    }
}

module.exports = new AuthController();
