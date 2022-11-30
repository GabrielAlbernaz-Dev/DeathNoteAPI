const express = require('express');
const router = express.Router();
const {getPlaces,getPlace,insertPlace,editPlace,deletePlace} = require('../controllers/placesController');

//Model
const Places = require('../models/Character');

// Validate
const {tokenValidate} = require('../middlewares/authMiddleware');

/* Read All Characters */
router.get('/',tokenValidate,getPlaces);

/* Read specific Character */
router.get('/:id',tokenValidate, getPlace);

/* Create a Characters */
router.post('/',tokenValidate, insertPlace);

/* Edit a Character */
router.patch('/:id',tokenValidate, editPlace);

/* Delete a Character */
router.delete('/:id',tokenValidate, deletePlace);

module.exports = router;
