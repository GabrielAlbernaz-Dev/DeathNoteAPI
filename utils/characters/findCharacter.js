function findCharacter(characters,id) {
   return characters.find(character => character.id === parseInt(id))
}

module.exports = {findCharacter}