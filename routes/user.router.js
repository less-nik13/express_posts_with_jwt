const Router = require('express');
const router = new Router();

const userController = require('../controller/user.controller')

router.post('/register', userController.createUser)
router.get('/users', userController.getUsers)

module.exports = router