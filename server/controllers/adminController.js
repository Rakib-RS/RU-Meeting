'use strict'
const User = require('../models/loginModel');
const createUser = (req,res)=>{
    const body = req.body;
    if(body.email && body.username && body.password && body.firstName && body.lastName){
       /* if(body.confPassword!= body.password){
            return res.json({
                error: "not matching password and confirm password"
            })
        }*/
        var userData = {
            email: body.email,
            username: body.username,
            password: body.password,
            firstName: body.firstName,
            lastName: body.lastName,
        }
        const user = new User(userData);
        if(!user){
            return res.json({
                success: false
            })
        }
        user.save()
            .then(()=>{
                return res.json({
                    data: userData,
                    success: true
                })
            })
            .catch((error)=>{
                return res.json({
                    error,
                    success: false
                })
            })
    }
    else 
    return res.json({
        error: "error",
        success: false
    })
}

module.exports ={
    createUser,
}