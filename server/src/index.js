const express=require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//routes
const userRoutes=require('./routes/authRouter');
const adminRoutes=require('./routes/admin/authAdminRouter');
const categoryRoutes=require('./routes/categoryRoute');
const productRoutes=require('./routes/productRouter');
const app=express();
env.config();
mongoose.connect(
    `mongodb+srv://eniverse:EniverseHitman@cluster0.lk9ik.mongodb.net/Eniverse?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    }
).then(()=>{
    console.log("database connected!!");
});

app.use(express.json());
app.use('/api',userRoutes);
app.use('/api',adminRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})