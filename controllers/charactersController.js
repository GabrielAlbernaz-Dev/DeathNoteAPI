//Model
const Character = require('../models/Character');

const charactersController = {
    getCharacters : async (req, res) => {
        try {
            const characters = await Character.find();
            const length = Array.from(await Character.find()).length
            res.status(200).json({count:length,results:characters});
    
        } catch (err) {
            res.status(404).json({error:'An error occurred while accessing the character list!'});
        }
    }, 

    getCharacter : async (req, res, next) => {
        const id = req.params.id;
        try {
            const character = await Character.findById(id);
            res.status(200).json(character);
        } catch (err) {
            res.status(422).json({error:'The character does not exist in our data storage'});
        }
    }, 

    insertCharacter : async (req,res,next)=>{
        const {name,url,description,mainCharacter,infos} = req.body;
        const length = Array.from(await Character.find()).length + 1
        const fullUrl = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
        const character = {
            name,
            url: `${fullUrl.href}/${length}`,
            description,
            mainCharacter,
            infos
        }
    
        try {
            await Character.create(character);
            res.status(201).json({message: 'Character Post was successfully created'})
        } catch (err) {
            res.status(500).json({error:'Passed data is empty or incorrect, please check and try again'});
        }
    },

    editCharacter : async (req, res, next) => {
        const id = req.params.id;
        const {name,description,mainCharacter,infos} = req.body;
        const character = {
            name,
            description,
            mainCharacter,
            infos
        }
    
        try {
            const updatedCharacter = await Character.updateOne({_id: id},character);
            if(updatedCharacter.matchedCount === 0) res.json({error:'Character cannot be updated, because body was empty'});
            res.status(200).json(character);
        } catch (err) {
            res.status(500).json({error:'An error occurred when changing character data, check your boy request'});
        }
    }, 

    deleteCharacter : async (req, res) => {
        const id = req.params.id;
        const character = await Character.findOne({id: id});
        if(!character) {
            res.status(422).json({msg:'Character not found or id is invalid'});
            return
        }
    
        try {
            await Character.deleteOne();
            res.status(200).json({msg:'Character deleted successfully'});
        } catch (err) {
            res.status(500).json({msg:'Character not found or id is invalid'});
        }
    
    }


}



module.exports = charactersController