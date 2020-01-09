const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
        login: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        surname: {
            type: String

        },
        Image: {
            type: String
        }
    },
    {
        versionKey: false
    });


const User = mongoose.model('User', userSchema);
module.exports = User;