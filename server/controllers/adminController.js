'use strict'
const User = require('../models/loginModel');
const createUser = (req,res)=>{
    const body = req.body;
    if(body.email && body.username && body.password){
        var userData = {
            email: body.email,
            username: body.username,
            password: body.password
        }
        
        User.create(userData,(err,data)=>{
            if(!data){
                return res.json({
                    error: "username or email already included"
                })
            }
            return res.json({
                sucess: true,
                data: data,
            })
        })
    }
}
module.exports ={
    createUser,
}