const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app=express();
dotenv.config();
app.use(express.json());
app.use('/product',require("./routes/ProductRoutes/products"));
app.use('/user',require("./routes/users/users"));


mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server started on port ${process.env.PORT}`);
        
    });
}).catch((err)=>{
    console.log(err.message);
})




