const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    url: String,
    descrption:String,
    mainCharacter:Boolean,
    infos: {
        physics:{
            eyeColor: String,
            hairColor: String,
            height: Number,
            specie: String
        }, 
        personals: {
            age: Number,
            genre: String,
            country: String,
            occupation: String
        }
    }
});

const Character = mongoose.model('Character',characterSchema);

module.exports = Character;