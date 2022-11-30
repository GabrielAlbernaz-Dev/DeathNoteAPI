//Model
const Place = require('../models/Place');

const placesController = {
    getPlaces : async (req, res) => {
        try {
            const places = await Place.find();
            const length = Array.from(await Place.find()).length
            res.status(200).json({count:length,results:places});
    
        } catch (err) {
            res.status(404).json({error:'An error occurred while accessing the places list!'});
        }
    }, 

    getPlace : async (req, res, next) => {
        const id = req.params.id;
        try {
            const place = await Place.findById(id);
            res.status(200).json(place);
        } catch (err) {
            res.status(422).json({error:'The place does not exist in our data storage'});
        }
    }, 

    insertPlace : async (req,res,next)=>{
        const {name,url,description} = req.body;
        const length = Array.from(await Place.find()).length + 1
        const fullUrl = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
        const place = {
            name,
            url: `${fullUrl.href}/${length}`,
            description
        }
    
        try {
            await Place.create(place);
            res.status(201).json({message: 'Place Post was successfully created'})
        } catch (err) {
            res.status(500).json({error:'Passed data is empty or incorrect, please check and try again'});
        }
    },

    editPlace : async (req, res, next) => {
        const id = req.params.id;
        const {name,description} = req.body;
        const place = {
            name,
            description
        }
    
        try {
            const updatedPlace = await Place.updateOne({_id: id},place);
            if(updatedPlace.matchedCount === 0) res.json({error:'Place cannot be updated, because body was empty'});
            res.status(200).json(place);
        } catch (err) {
            res.status(500).json({error:'An error occurred when changing place data, check your boy request'});
        }
    }, 

    deletePlace : async (req, res) => {
        const id = req.params.id;
        const place = await Place.findOne({id: id});
        if(!place) {
            res.status(422).json({msg:'Place not found or id is invalid'});
            return
        }
    
        try {
            await Place.deleteOne();
            res.status(200).json({msg:'Place deleted successfully'});
        } catch (err) {
            res.status(500).json({msg:'Place not found or id is invalid'});
        }
    
    }


}



module.exports = placesController;