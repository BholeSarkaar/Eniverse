const express=require('express');
const { addCategory, getCategories } = require('../controller/category');
const { requireSignIn, adminMiddleware } = require('../common-middleware/middlewares');
const Router=express.Router();

Router.post('/category/create',requireSignIn,adminMiddleware,addCategory);
Router.get('/category/get',getCategories);
module.exports=Router;