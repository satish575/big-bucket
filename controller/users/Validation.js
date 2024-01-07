
const validateUser=(req,res,next)=>{
    const userData=req.body;
    const username=req.body.username;
    const email=req.body.email;
    const img=req.body.img;
    const password=req.body.password;
    
    // validation here...

}
module.exports=validateUser;