const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
        product_name:{
            type:String,
            required:true,
            unique:true
        },
        product_desc:{
            type:String,
            required:true
        },
        product_price:{
            type:Number,
            required:true
        },
        product_brand:{
            type:String
        },
        product_stock:{
            type:Number
        },
        product_img:{
            type:String,
            required:true
        },
        product_category:{
            type:String,
            required:true
        }
})


const productModel=mongoose.model('product',productSchema);

module.exports=productModel;
