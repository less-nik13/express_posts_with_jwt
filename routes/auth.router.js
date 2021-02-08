const Router = require('express');
const passport = require('passport')
const router = new Router();
const jwt = require('jsonwebtoken')

const authController = require('../controller/auth.controller')

router.post('/register', authController.registerUser);
router.post('/login', passport.authenticate('local', { session: false }),
        authController.loginPassport
);

module.exports = router
