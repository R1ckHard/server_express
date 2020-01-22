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
        image: {
            type: String,
            default:'uploads/default-user-image-png-7.png'
        }
    },
    {
        versionKey: false
    });


const User = mongoose.model('User', userSchema);
module.exports = User;
