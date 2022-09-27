const {getCharacters} = require('../utils/characters/getCharacters')
const {findCharacter} = require('../utils/characters/findCharacter')
const {findCharacterIndex} = require('../utils/characters/findCharacterIndex')
const {getCharactersMains} = require('../utils/characters/getCharactersMains')

const characters = getCharacters()

const jsonCharacters = {
    count:characters.length,
    results: characters
}

const charactersController = {
    getCharacters : (req,res,next)=> {
        res.json(jsonCharacters)
    }, 

    getCharacter : (req,res,next)=> {
        const {id} = req.params
        const characterFound = findCharacter(characters,id)
        if(!characterFound) return res.status(404).json({msg:'Character not found'})
        res.status(200).json(characterFound)
    }, 

    insertCharacter : (req,res,next)=> {
        const {name,description,infos} = req.body
        const requiredExpression = !name || !description || !infos 
        if(requiredExpression) return res.status(422).json({msg:'Request body invalid'})
        const charactersMains = getCharactersMains()
        characters.push({
            id:characters.length + 1,
            name:name,
            url:`localhost:3000/characters/${characters.length + 1}`,
            description:description,
            mainCharacter: charactersMains.some((character) => character === name),
            infos:infos,
        })
        res.status(200).json(characters)
    },

    editCharacter : (req,res,next)=> {
        const {id} = req.params
        const {name,description,infos} = req.body
        const requiredExpression = name && description && infos
        const characterFound = findCharacter(characters,id)
        if(!characterFound) return res.status(404).json({msg:'Character not found'})
        else if(requiredExpression) {
            characterFound.name = name
            characterFound.description = description
            characterFound.infos = infos
        }
        else if(name) characterFound.name = name
        else if(description) characterFound.description = description
        else if(infos && physics && personals && eyeColor && hairColor && specie && age && country && occupation) characterFound.infos = infos
        else return res.status(404).json({msg:'Invalid data please see api documentation'})

        res.status(200).json(characterFound)
    }, 

    deleteCharacter : (req,res,next)=> {
        const {id} = req.params
        const characterFound = findCharacterIndex(characters,id)
        if(characterFound === -1) return res.status(404).json({msg:'Delete was failed'})
        characters.splice(characterFound, 1)
        res.status(200).json(characters)
    }


}



module.exports = charactersController