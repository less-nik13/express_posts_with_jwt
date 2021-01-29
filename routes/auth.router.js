const Router = require('express');
const passport = require('passport')
const router = new Router();
const jwt = require('jsonwebtoken')

const authController = require('../controller/auth.controller')

router.post('/register', authController.registerUser);
router.post('/login', passport.authenticate('local', { session: false }),
    function(req, res) {
        const {id, email} = req.user.dataValues
        const user = {id, email}
        const token = jwt.sign(user, process.env.JWT_SECRET);
        res.header('Authorization', token).send(token)
    });

module.exports = router
