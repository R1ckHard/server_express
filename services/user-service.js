const User = require('../models/user-model');
const helperCrypt = require('../helperCrypt');

const get = async function (id) {
    if(id){
        return User.findOne({_id:id})
    }
    // const result = await User.aggregate([
    //     {
    //         $lookup: {
    //             from: 'cities',
    //             localField: 'cityID',
    //             foreignField: 'cityID',
    //             as: 'city'
    //         }
    //     },
    // {$unwind: '$city'},
    // {
    //     $project: {
    //         name: '$name',
    //         surname: '$surname',
    //         city:'$city.cityName'
    //     }
    // }
    // ])
    // return result
    return User.find({})

}

const add = async function (body) {

    try {
        const userPass = body.password;
        body.password = await helperCrypt.createHash(userPass);
        const user = new User({
            ...body
        });
        await user.save();
        return user
    }
    catch (e) {
        throw new Error ("Такой логин уже существует")
    }

}

const update = async function (body) {
    const userPass = body.password;
    body.password = await helperCrypt.createHash(userPass);
    const checkUnique = await User.findOne({login: body.login});
    if (!checkUnique) {
        await User.updateOne(
            {"_id": checkUnique._id},
            {
                $set:
                    {...body}
            }
        )
        return User.find({})
    } else {
        return "Такой логин уже существует"
    }


};
const del = async function (id) {

    await User.deleteOne(
        {"_id": id}
    )
    return User.find({})

}
module.exports = {
    get,
    add,
    update,
    del,
}
