function findCharacterIndex(characters,id) {
    return characters.findIndex(character => character.id === parseInt(id))
 }
 
 module.exports = {findCharacterIndex}