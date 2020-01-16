const User = require('../models/user-model');
const helperCrypt = require('../helperCrypt');

const get = async function (id) {
    if (id) {
        return User.findOne({_id: id})
    }
    else {
        console.log('Error get method');
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
    } catch (e) {
        throw new Error("Такой логин уже существует")
    }

}

const update = async function (body,user) {
    // const userPass = body.password;
    // body.password = await helperCrypt.createHash(userPass);
    // const checkUnique = await User.findOne({login: body.login});
    await User.updateOne(
        {"_id": user._id},
        {
            $set:
                {...body}
        }
    )
    return User.find({"_id": user._id})


};
const updateImage = async (req) => {
    console.log(req.file.path)
    let file = req.file;
    if (!file) {
        throw new Error("Ошибка при загрузке файла");
    } else {
        let updateImage = await User.findOneAndUpdate({ login: req.user.login }, { image: req.file.path }, { new: true });
        return updateImage
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
    updateImage
}
