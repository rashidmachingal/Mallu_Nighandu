const express = require("express");
const router = express.Router();
const {transporter} = require('./mailConfig')


//contact message to maiil

router.post("/contact",(req,res) => {
    const mailOptions = {
        from: '"Mallu Nighandu" <therashileo@gmail.com>',
        to: 'rashileocontact@gmail.com',
        subject: "New Message From Mallu Nighandu Contact Form",
        text: `Name: ${req.body.name}\n
        email: ${req.body.email}\n
        message: ${req.body.message}`
      };
      transporter.sendMail(mailOptions)
      res.json({status:"OK"})
})







module.exports = router;