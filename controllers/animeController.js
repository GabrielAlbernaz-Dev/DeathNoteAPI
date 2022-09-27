const {getAnimeInfo} = require('../utils/anime/getAnimeInfo')
const infos = getAnimeInfo()

const animeController = {
    getAnimeInfos: (req,res,next)=>{
        res.json(infos)
    },

    insertAnimeInfos: (req,res,next)=>{
        const datas = Object.keys(req.body || [])
        if(datas.length > 0) {
            datas.forEach(key => {
                infos[key] = req.body[key]
            })
            res.status(200).json(infos)
        } else {
            res.status(422).json({msg:'Request body invalid'})
        }
    },

    editAnimeInfos: (req,res,next)=>{
        const datas = Object.keys(req.body)
        if(datas.length > 0) {
            datas.forEach(key => {
                if(infos[key]) infos[key] = req.body[key]
            })
            res.status(200).json(infos)
        }
    }
}

module.exports = animeController