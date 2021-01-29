const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const User = require('../models/user.entity')

passport.use(new JwtStrategy({
        secretOrKey: process.env.JWT_SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }, async function(token, done) {
    console.log(token)
        await User.findOne({where: {email: token.email}}).then(function(user) {
            if (!user) {
                return done(null, false, {message: 'User with this email is not created'});
            } else {
                return done(null, token)
            }
        })
    })
)