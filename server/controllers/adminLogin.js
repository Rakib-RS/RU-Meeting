'use strict'
const bcrypt = require('bcryptjs')
const User = require('../models/loginModel');
const validateLoginInput = require('../validator/login');
const keys = require('../config/keys');
const jwt = require("jsonwebtoken");
const login = (req,res)=>{
  console.log(req.body);
  
  const serch = {
    email: req.body.email
  }
  const {errors, isValid}  = validateLoginInput(req.body);
  if(!isValid){
    return res.status(400).json(errors);
  }

  User.findOne(serch,(err,user)=>{
    //console.log(user);
    
    if (err || !user) {
      return res.json({
        data: "email is not exist"
      })
    }
    bcrypt.compare(req.body.password, user.password,  (err, result)=>{
        if(result==true){
          // User matched
        // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
          // Sign token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
         /* return res.json({
            sucess: true
          })*/
      }
        else{
          return res.json({
            data: "password is incorrect"
          })
        } 
    })
  })
}
module.exports={
  login,

}