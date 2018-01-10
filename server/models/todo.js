var mongoose = require('mongoose');

// creating Todo model : collection can store anything in mongodb
// In which give all the fiels along with their datatypes & Validations
var Todo = mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
});


module.exports={
  Todo
};
