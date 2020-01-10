const Validator = require('validator')
const isEmpty = require('is-empty')
module.exports = function validateRegisterInput(data){
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "" ;
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.passwordConf = !isEmpty(data.passwordConf) ? data.passwordConf : "";
    // Name checks

    if (Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }
    // Email checks

    if (Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }
    else if (Validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    //password check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required"; 
    }
    if(Validator.isEmpty(data.passwordConf)){
        errors.passwordConf = "Confirm Password field is required"; 
    }
    if(!Validator.equals(data.password,data.passwordConf)){
        errors.passwordConf = "Passwords must match";
    }
    return {
        errors,
        isValid : isEmpty(errors)
    };
};