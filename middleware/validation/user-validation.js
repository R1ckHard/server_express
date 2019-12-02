const Joi = require('@hapi/joi');

const schema = Joi.object({
    login: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9]{3,30}$/),


})
module.exports = schema;