const jwt = require('jsonwebtoken');
const jwtSecret = 'Viron IT';
const adminID = '5dde4b96ae26511e1623c508';
const User = require('../../models/user-model');

const checkToken = async function (req, res, next) {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        res.status(401).json({message: 'Token not provided'});
    }

    try {
        const token = await authHeader.replace('Bearer ', '');
        const userID = await jwt.verify(token, jwtSecret);
        const user = await User.findById(userID);
        req.user = user;
        if (!userID) {
            throw new Error("problems with auth");
        }
        // if (user === req.params.id) {
        //     next()
        // }
        // else if (userID === adminID) {
        //     next()
        // } else {
        //     throw new Error('У вас нет доступа')
        // }
        else {
            next()
        }
    } catch (e) {
        res.status(400).send({error: e.message + 'asdsf'})
    }
}


module.exports = checkToken;
