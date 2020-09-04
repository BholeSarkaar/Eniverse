const express=require('express');
const Router=express.Router();
const User=require('../models/userModel');
const userModel = require('../models/userModel');

Router.post('/signup',(req,res)=>{
     userModel.findOne({email:req.body.email})
     .exec((err,user)=>{
         if(user) return res.status(400).json({
             message:"User already registered!"
         });
         const {
             firstname,
             lastname,
             email,
             password
         }=req.body;
         const _user=new User({
            firstname,
             lastname,
             email,
             password,
             username:Math.random().toString()
         });
         _user.save((error,data)=>{
                if(error){
                    return res.status(400).json({
                        message:"Something went wrong!"
                    });
                }
                if(data){
                    return res.status(201).json({
                        message:"user created successfully..!"
                    });
                }
         })
     })
});

Router.post('/signin',(req,res)=>{

});

module.exports=Router;