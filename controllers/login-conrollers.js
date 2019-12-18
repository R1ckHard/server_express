const service = require('../services/login-service');

class LoginController {
    constructor() {
    }

    signUp = async (req, res) => {
        try {
            const result = await service.logIn(req.body);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error: e.message+"login-controller"})
        }
    };
}
module.exports = LoginController;
