const express=require('express');
const env=require('dotenv');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

//routes
const userRoutes=require('./routes/user');
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

app.use(bodyParser());
app.use('/api',userRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})