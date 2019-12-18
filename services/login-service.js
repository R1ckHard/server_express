const User = require('../models/user-model');
const heplerCrypt = require('../helperCrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = 'Viron IT';


const logIn = async function (body) {
    const user = await User.findOne({login: body.login});
    if (!user) {
        throw new Error("Пользователя с таким логином не существует")
    }
    const inputPass = body.password;
    const isValid = await heplerCrypt.signIn(inputPass, user.password);

    if (isValid) {
        const token = jwt.sign(user._id.toString(), jwtSecret);
        return token
    } else {
        throw new Error("Неправильный пароль")
    }

}
module.exports = {
    logIn
}
