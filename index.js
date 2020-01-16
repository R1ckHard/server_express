const express = require('express');
const app = express();
const userRouter = require('./routers/user-router')
const myPage = require('./routers/myPage-router')
const cityRouter = require('./routers/city-router')
const signUpRouter = require('./routers/login-router')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const registration = require('./routers/registration-rourer')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users',userRouter);
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/city',cityRouter)
app.use('/login',signUpRouter)
app.use('/myPage',myPage);
app.use('/settings',userRouter)
app.use('/registration',registration)




app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});
