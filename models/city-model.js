const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    cityID: {
        // type: String,
        type:mongoose.Types.ObjectId,

        required: true,
        unique:true
    },
})

const City = mongoose.model('City', citySchema);
module.exports = City;