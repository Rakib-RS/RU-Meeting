'use strict'
const bcrypt = require('bcryptjs')
const User = require('../models/loginModel');
const login = (req,res)=>{
  
  const serch = {
    email: req.body.email
  }

  User.findOne(serch,(err,user)=>{
    bcrypt.compare(req.body.password, user.password,  (err, result)=>{
        if(result==true){
          res.json({
            success: true
          })
        }else{
          res.json({
            success: false
          })
        } 
    })
  })
}
module.exports={
  login,

}