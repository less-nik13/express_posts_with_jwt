const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user.entity')
const bcrypt = require('bcrypt')

// passport.use(new LocalStrategy({usernameField: 'email'},
//     async function (email, password, done) {
//         await User.findOne({where : {email: email}, async function (err, user) {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {message: 'User with this email is not created'});
//             }
//
//             await bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if(err) throw err;
//                 if(isMatch) {
//                     return done(null, user)
//                 } else {
//                     return done(null, false, {message: 'Password incorrect'})
//                 }
//             })
//         });
//     }
// ))

passport.use('local', new LocalStrategy({usernameField: 'email', passwordField: 'password'},
    async function (email, password, done) {
        await User.findOne({where: {email: email}}).then(async function (user) {
            if (!user) {
                return done(null, false, {message: 'User with this email is not created'});
            } else {
                await bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Password incorrect'})
                    }
                })
            }
        })
    })
)


