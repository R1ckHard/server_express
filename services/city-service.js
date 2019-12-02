const City = require('../modules/city-module');

const get =  function () {
    return City.find({})
}

const add =  async function (body) {
    const user = new City({
        ...body
    });
    await user.save();
    return user
}

const update =  async function (body, id) {

    await City.updateOne(
        {"_id": id},
        {
            $set:
                {...body}
        }
    )
    return  City.find({})

};
const del = async function (id) {

    await City.deleteOne(
        {"_id": id}
    )
    return  City.find({})

}
module.exports = {
    get,
    add,
    update,
    del,
}