'use strict'
const User = require('../models/loginModel');
const createUser = (req,res)=>{
    const body = req.body;
    if(body.email && body.username && body.password && body.firstName && body.lastName){
        if(body.confPassword!= body.password){
            return res.json({
                error: "not matching password and confirm password"
            })
        }
        var userData = {
            email: body.email,
            username: body.username,
            password: body.password,
            firstName: body.firstName,
            lastName: body.lastName,
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
    else 
    return res.json({
        error: "error"
    })
}
module.exports ={
    createUser,
}