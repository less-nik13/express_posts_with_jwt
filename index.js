require('dotenv').config();
const express = require('express');
const sequelize = require('./dbConfig')
const passport = require('passport')
const userRoute = require('./routes/user.router')
const authRoute = require('./routes/auth.router')
const postRoute = require('./routes/post.router')
require('./services/passport.local')
require('./services/passport.jwt')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())

app.use('/api/posts', passport.authenticate('jwt', { session: false }), postRoute)
app.use('/api/', userRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 4000

async function bootstrap() {

    await sequelize.sync().then(result=>{
        console.log(result);
    })
        .catch(err=> console.log(err));

    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)
    })
}

bootstrap()

