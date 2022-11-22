const express = require('express');
const router = express.Router();
const {getCharacters,getCharacter,insertCharacter,editCharacter,deleteCharacter} = require('../controllers/charactersController');

//Model
const Character = require('../models/Character');

// Validate
const {tokenValidate} = require('../utils/tokenValidate');

/* Read All Characters */
router.get('/',tokenValidate,getCharacters);

/* Read specific Character */
router.get('/:id',tokenValidate, getCharacter);

/* Create a Characters */
router.post('/',tokenValidate, insertCharacter);

/* Edit a Character */
router.patch('/:id',tokenValidate, editCharacter);

/* Delete a Character */
router.delete('/:id',tokenValidate, deleteCharacter);

module.exports = router;
