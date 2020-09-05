const express=require('express');
const Router=express.Router();

const userModel = require('../../models/userModel');
const { signup, signin } = require('../../controller/admin/authAdmin');

Router.post('/admin/signup',signup);

Router.post('/admin/signin',signin);

module.exports=Router;