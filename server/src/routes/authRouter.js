const express=require('express');
const Router=express.Router();
const { signup, signin } = require('../controller/auth');
const { validateRequest,isrequestValidated,validateSigninRequest } = require('../validator/validate');

Router.post('/signup',validateRequest,isrequestValidated,signup);

Router.post('/signin',validateSigninRequest,isrequestValidated,signin);

Router.post("/profile",(req,res)=>{
    res.status(200).json({user:"profile"});
})
module.exports=Router;