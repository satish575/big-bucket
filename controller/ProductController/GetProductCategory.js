const productModel=require("../../model/product.model");
const GetProductCategory=async(req,res,next)=>{
    
    try {
        const productData=await productModel.find({product_category:req.params.category});
        if(productData){
            res.status(200).json(productData);

        }else{
            res.status(400).json("no category found");
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
      
}

module.exports=GetProductCategory;