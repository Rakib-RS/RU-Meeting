'use strict'
const bcrypt = require('bcryptjs')
const User = require('../models/loginModel');
const login = (req,res)=>{
  console.log(req.body);
  
  const serch = {
    email: req.body.email
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
         return res.json({
            data: true
          })
        }else{
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