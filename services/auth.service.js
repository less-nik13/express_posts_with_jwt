const User = require('../models/user.entity')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

class AuthService {
    async createUser(body, res) {
        const {email, password} = body;

        const oldUser = await User.findOne({where: {email: email}})
        if(oldUser) {
            res.status(400).json({message: 'Email already exists'})
        } else {
            const hashPassword = await bcrypt.hash(password, 10)
            const newUser = await User.create({email, password: hashPassword});
            return res.status(200).json(newUser);
        }
    }

    // async loginUser(req, res) {
    //     const {email, password} = req.body;
    //     const user = await User.findOne({ where: {email}})
    //     if(email !== user.email) {
    //         return res.status(400).json({message: `User with this email is not exists`})
    //     } else {
    //         const comparePassword = await bcrypt.compare(password, user.password);
    //         if(!comparePassword) {
    //             return res.status(400).json({message: `Password is wrong`})
    //         }
    //         const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
    //         return res.status(200).json({message: `User ${user.id} has token ${token}`})
    //     }
    // }

    async loginPassport(req, res) {
        const {id, email} = req.user.dataValues;
        const user = {id, email};
        const token = jwt.sign(user, process.env.JWT_SECRET);
        res.header('Authorization', token).send(token);
    }
}

module.exports = new AuthService();
