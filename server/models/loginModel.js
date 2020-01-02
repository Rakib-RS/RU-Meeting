var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true,

    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    
    firstName:{
      type:String,
      required:true,
    },
    lastName:{
      type:String,
      required:true
    },
})
//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
    var user = this;
    //console.log(user);
    
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });
module.exports = mongoose.model('User',UserSchema);
