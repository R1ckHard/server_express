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
        const token = authHeader.replace('Bearer ', '');
        const user = await User.findById(await jwt.verify(token, jwtSecret));
        req.user = user;
        if (!user) {
            throw new Error();
        }
        if (user === req.params.id) {
            next()
        } else if (user === adminID) {
            next()
        } else {
            throw new Error('У вас нет доступа')
        }
    } catch (e) {
        res.status(400).send({error: e.message})
    }
}


module.exports = checkToken;
