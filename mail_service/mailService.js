// const nodemailer=require("nodemailer");

// const emailConfig={
//     host: "smtp.forwardemail.net",
//     port: 465,
//     secure: true,
//     auth: {
//       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//       user: process.env.BUSSINESS_EMAIL,
//       pass: process.env.BUSSINESS_PASSWORD,
//     },
//   }

// const transporter=nodemailer.createTransport(emailConfig);
// console.log(emailConfig.auth.user);
// console.log(emailConfig.auth.pass);
// function sendVerificationEmail(userEmail, verificationLink) {
//     const mailOptions = {
//       from: process.env.BUSSINESS_EMAIL,
//       to: userEmail,
//       subject: 'Verify Your Account',
//       html: `Click the following link to verify your account: ${verificationLink}`,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         console.error('Error sending email:', error);
//       } else {
//         console.log('Email sent:', info.response);
//       }
//     });
//   }

//   module.exports=sendVerificationEmail;
  
//   // Example usage
