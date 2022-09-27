const express = require('express');
const app = express();
const router = express.Router();
const {getAnimeInfos,insertAnimeInfos,editAnimeInfos,deleteAnimeInfos} = require('../controllers/animeController')

/* GET anime infos*/
router.get('/', getAnimeInfos)

/* POST anime infos */
router.post('/', insertAnimeInfos)

/* EDIT anime infos */
router.put('/', editAnimeInfos)

/* DELETE anime infos */
router.delete('/', deleteAnimeInfos)

module.exports = router;
