const express = require('express');
const router = express.Router();
const {getCharacters,getCharacter,insertCharacter,editCharacter,deleteCharacter} = require('../controllers/charactersController');

/* GET All Characters */
router.get('/', getCharacters);

/* GET specific Character */
router.get('/:id', getCharacter);

/* Post a Characters */
router.post('/', insertCharacter);

/* Put a Character */
router.put('/:id', editCharacter);

/* Delete a Character */
router.delete('/:id', deleteCharacter);

module.exports = router;
