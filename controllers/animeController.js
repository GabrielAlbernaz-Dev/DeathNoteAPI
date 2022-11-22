//Model
const Anime = require('../models/Anime');


const animeController = {
    getAnimeInfos: async (req, res) => {
        try {
            const animeInfo = await Anime.find();
            res.status(200).json(animeInfo);
    
        } catch (error) {
            res.status(404).json({error:'An error occurred while accessing the anime list!'});
        }
    },

    insertAnimeInfos: async (req,res,next)=>{
        const {animeName,description,genres,productionInfos} = req.body;
        const animeInfos = {
            animeName,
            description,
            genres,
            productionInfos
        }

        try {
            await Anime.create(animeInfos);
            res.status(201).json({message: 'Anime Infos Post was successfully created'})
        } catch (err) {
            console.log(err);
            res.status(500).json({error:'Passed data is empty or incorrect, please check and try again'});
        }
    },

    editAnimeInfos: async (req, res, next) => {
        const {animeName,description,genres,productionInfos} = req.body;
        const animeInfos = {
            animeName,
            description,
            genres,
            productionInfos
        }
    
        try {
            const updatedAnimeInfos = await Anime.updateMany({},animeInfos);
            if(updatedAnimeInfos.matchedCount === 0) res.json({error:'Anime cannot be updated, because body was empty'});
            res.status(200).json(animeInfos);
        } catch (error) {
            res.status(500).json({error:'An error occurred when changing anime info data, check your boy request'});
        }
    },

    deleteAnimeInfos: async (req, res) => {
        try {
            await Anime.deleteMany({});
            res.status(200).json({msg:'Anime Info was deleted successfully'});
        } catch (error) {
            res.status(500).json({msg:'Anime Info not found or id is invalid'});
        }
    }

}

module.exports = animeController