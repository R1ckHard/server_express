const service = require('../services/city-service');

class CityController {
    constructor() {}

    getCity = async (req,res) => {
        try {

            const result = await service.get();
            res.status(200).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }

    };
    addCity = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.status(201).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }

    };
    updateCity = async (req, res) => {
        try {
            const result = await service.update(req.body,req.params.id);
            res.status(202).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    };
    deleteCity = async (req,res) => {
        try {
            const result =  await service.del(req.params.id);
            res.status(202).send(result)
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    }
}


module.exports = CityController;