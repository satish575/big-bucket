
const validateUser=(err,req,res,next)=>{
    
    const username=req.body.username;
    const email=req.body.email;
    const img=req.body.img;
    const password=req.body.password;
    
    // validation here...
  // Username pattern: alphanumeric characters, underscores, and hyphens allowed, 3 to 20 characters
  const usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;

  // Email pattern: basic email validation, allowing letters, numbers, dots, and a limited set of special characters
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password pattern: at least 8 characters, at least one uppercase letter, one lowercase letter, and one digit
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const validation_error={
    username_err:"",
    email_err:"",
    password_err:""
  }

  if(username.trim()){
     if(!usernamePattern.test(username)){
        validation_error.username_err="alphanumeric characters, underscores, and hyphens allowed, 3 to 20 characters"
     }
  }else{
    validation_error.username_err="Enter the username ";
  }

  if(email.trim()){
    if(!emailPattern.test(email)){
        validation_error.email_err="Enter valid email";
    }
  }else{
    validation_error.email_err="Enter email";
  }
  if(password.trim()){
    if(!passwordPattern.test(password)){
        validation_error.password_err="at least 8 characters, at least one uppercase letter, one lowercase letter, and one digit";
    }
  }else{
    validation_error.password_err="Enter password";
  }


  if(validation_error.email_err || validation_error.username_err || validation_error.password_err){
      res.status(400).json(validation_error);
     
  }else{
    next();
  }
  

}
module.exports=validateUser;