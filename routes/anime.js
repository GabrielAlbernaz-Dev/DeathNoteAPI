const express = require('express');
const router = express.Router();
const {getAnimeInfos,insertAnimeInfos,editAnimeInfos,deleteAnimeInfos} = require('../controllers/animeController');

// Validate
const {tokenValidate} = require('../utils/tokenValidate');

/* GET anime infos*/
router.get('/',tokenValidate, getAnimeInfos)

/* POST anime infos */
router.post('/',tokenValidate,insertAnimeInfos)

/* EDIT anime infos */
router.put('/',tokenValidate,editAnimeInfos)

/* DELETE anime infos */
router.delete('/',tokenValidate,deleteAnimeInfos)

module.exports = router;
