require('dotenv').config();
const express = require('express');
const sequelize = require('./dbConfig')
const userRoute = require('./routes/user.router')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/', userRoute);

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

