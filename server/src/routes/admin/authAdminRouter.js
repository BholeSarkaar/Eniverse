const express=require('express');
const Router=express.Router();

const userModel = require('../../models/userModel');
const { signup, signin } = require('../../controller/admin/authAdmin');
const { validateSigninRequest,validateRequest, isrequestValidated } = require('../../validator/validate');

Router.post('/admin/signup',validateRequest,isrequestValidated,signup);

Router.post('/admin/signin',validateSigninRequest,isrequestValidated,signin);

module.exports=Router;