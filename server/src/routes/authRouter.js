const express=require('express');
const Router=express.Router();

const userModel = require('../models/userModel');
const { signup, signin, requireSignIn } = require('../controller/auth');

Router.post('/signup',signup);

Router.post('/signin',signin);

Router.post("/profile",requireSignIn,(req,res)=>{
    res.status(200).json({user:"profile"});
})
module.exports=Router;