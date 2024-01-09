const UserModel=require("../../model/user.model");
const bcrypt=require("bcrypt");
const authentication=(req,res,next)=>{
    
    const usernameToCheck = req.body.username; // Replace with the actual username you want to check
    const passwordToCheck = req.body.password; // Assuming you're getting the password from the request body
    
    // Find the user by username
    UserModel.findOne({ customer_username: usernameToCheck })
      .then((user) => {
        if (!user) {
          console.log("User not found");
          // Handle the case where the user with the given username is not found
          return;
        }
    
        // Compare the password
        bcrypt.compare(passwordToCheck, user.customer_password)
          .then((passwordMatch) => {
            if (passwordMatch) {
              console.log("User authenticated");
            } else {
              console.log("Incorrect password");
            }
          })
          .catch((bcryptError) => {
            console.log("Bcrypt error:", bcryptError.message);
          });
      })
      .catch((findError) => {
        console.log("Username lookup error:", findError.message);
      });
    
       
    
  
}

module.exports=authentication;