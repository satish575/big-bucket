const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    customer_username:{
        type:String,
        required:true,
        unique:true
    },
    customer_email:{
        type:String,
        required:true,
        unique:true
    },
    customer_image:{
        type:String,

    },
    customer_password:{
        type:String,
        required:true,
    }
    
},{
    timestamps: true, // This option adds the createdAt and updatedAt fields
  });

  const UserModel=mongoose.model('user',userSchema);

  module.exports=UserModel;