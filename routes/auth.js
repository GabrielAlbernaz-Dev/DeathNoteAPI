const express = require('express');
const router = express.Router();
const {loginApiUser,registerApiUser} = require('../controllers/authController');

//Model
const User = require('../models/User');

//Login User
router.post('/user',loginApiUser);

// Register User
router.post('/register',registerApiUser);

module.exports = router;
