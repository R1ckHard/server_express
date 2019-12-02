const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);



const signIn = async function (inputPass,userPass) {
    return await bcrypt.compareSync(inputPass,userPass);
}

const createHash = async function (userPass) {
    return await bcrypt.hashSync(userPass, salt);
}
module.exports = {
    signIn,
    createHash
}