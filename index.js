const express = require('express');
const app = express();
const userRouter = require('./routers/user-routers')
const cityRouter = require('./routers/city-routers')
const signUpRouter = require('./routers/login-router')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const cors = require('cors')

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
app.use('/city',cityRouter)
app.use('/login',signUpRouter)


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
