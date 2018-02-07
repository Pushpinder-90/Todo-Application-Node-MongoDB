const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// creating UserScema to add methods
var UserSchema  = new mongoose.Schema({
// validate : for validating user email
  email:{
      type:String,
      required:true,
      minlength:1,
      trim:true,
      unique:true,
      validate:{
        // validator :  validator.isEmail; // we can also write it as
        validator: (value)=>{
          return validator.isEmail(value);  // return true/false after validate
        },
        message: `{value} is not a valid email !`
      }
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  tokens:[{
    access:{
      type:String,
      required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
});

// these are instance methods and have access to individual documents
// creating simple function here to use this keyword because arrow functions do not bind this keyword
UserSchema.methods.generateAuthToken = function(){
  var user = this; // here 'this' binds current document(user)
  var access = 'auth';
  var token = jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
// adding token into tokens array
  user.tokens.push({access,token});
  // now save the changes
  return user.save().then(()=>{
    return token;
  });
};

// overiding mongoose methods
UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject(); // converting mongoose user object into normal object

    return _.pick(userObject, ['_id','email']);
};

// creating Users model by taking UserSchema
var User = mongoose.model('User',UserSchema);


module.exports={
  User
};
