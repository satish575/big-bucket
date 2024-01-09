const UserModel=require("../../model/user.model");
const bcrypt=require("bcrypt");
const sendVerificationEmail=require("../../mail_service/mailService");
const Registration=async(req,res,next)=>{
    

    const hashedPassword= await bcrypt.hash(req.body.password,10);
    const newUser=new UserModel({
        customer_username:req.body.username,
        customer_email:req.body.email,
        customer_password:hashedPassword
    });
    newUser.save().then((data)=>{
        // const userEmail = 'mishrasatish575@gmail.com';
        // const verificationLink = 'https://example.com/verify?token=yourVerificationToken';
        
        // sendVerificationEmail(userEmail, verificationLink);
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(400).json(err.message);
    })

}

module.exports=Registration;