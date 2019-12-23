const service = require('../services/user-service');

class UserController {
    constructor() {
    }

    getUser = async (req, res) => {
        try {
            res.send(req.user);
        }
        catch (e) {
            res.status(400).send({error: e.message+'getUser Error'})
        }
    }
    addUser = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }

    };
    updateUser = async (req, res) => {
        try {
            console.log(req.user);
            const result = await service.update(req.body);
            res.status(202).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    };
    deleteUser = async (req, res) => {
        try {
            const result = await service.del(req.user._id);
            res.status(202).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    }

}


module.exports = UserController;
