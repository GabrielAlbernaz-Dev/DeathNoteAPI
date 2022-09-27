const express = require('express');
const router = express.Router();
const {getIndexInfos} = require('../utils/index/getIndexInfos')

/* GET anime router */
router.get('/', (req,res,next) => {
    res.json(getIndexInfos())
})

module.exports = router;
