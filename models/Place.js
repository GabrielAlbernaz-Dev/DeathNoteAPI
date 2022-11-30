const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    url: String,
    descrption:String
});

const Place = mongoose.model('Place',placeSchema);

module.exports = Place; 