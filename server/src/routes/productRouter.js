const express=require('express');
const { requireSignIn, adminMiddleware } = require('../common-middleware/middlewares');
const { createProduct } = require('../controller/product');
const multer=require('multer');
const shortid=require('shortid');
const path=require('path');

const Router=express.Router();
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(path.dirname(__dirname),'uploads'));
    },filename:function(req,file,cb){
        cb(null,shortid.generate()+'-'+file.originalname);
    }
});
const upload=multer({storage});
Router.post('/product/create',requireSignIn,
                adminMiddleware,
                upload.array('productPictures'), 
                createProduct);
Router.get('/product/get',()=>{});
module.exports=Router;