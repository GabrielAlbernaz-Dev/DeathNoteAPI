const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//Model
const User = require('../models/User');

const userController = {

    loginApiUser : async (req, res) => {
        const {email,password} = req.body;
        if(!email) return res.status(422).json({error:'The field email is empty or invalid'});
        if(!password) return res.status(422).json({error:'The field password is empty or invalid'});
    
        const user = await User.findOne({email: email});
        if(!user) return res.status(422).json({error:'User not found or the fields are invalid'});
    
        //Password Match
        const checkPassword = bcrypt.compare(password,user.password);
        if(!checkPassword) return res.status(422).json({error:'The password is empty or invalid'});
    
        try {
            const secret = process.env.SECRET;
            const token = jwt.sign({
                id:user._id
            },secret)
            res.status(200).json({message:'User successfully authenticated',token});
    
        } catch (err) {
            res.status(500).json({error:'Your credentials are incorrect or empty, please try again'});
        }
    
    },

    registerApiUser : async (req, res) => {
        const {name,email,password,confirmPassword} = req.body;
        if(!name) return res.status(422).json({error:'The field name is empty or invalid'});
        if(!email) return res.status(422).json({error:'The field email is empty or invalid'});
        if(!password) return res.status(422).json({error:'The field password is empty or invalid'});
        if(password !== confirmPassword) return res.status(422).json({error:'The passwords does not match'});
    
        const userCheck = await User.findOne({email: email});
        if(userCheck) return res.status(422).json({error:'The user is already registered in our database!'})

        //Password
        const salt = await bcrypt.genSalt(14);
        const passworHash = await bcrypt.hash(password, salt);
    
        const user = {
            name,
            email,
            password: passworHash
        }

        try {
            await User.create(user);
            res.status(201).json({message: 'The user has been successfully registered!'})
        } catch (err) {
            res.status(500).json({error:'Passed data is empty or incorrect, please check and try again'});
        }
    }

}

module.exports = userController;