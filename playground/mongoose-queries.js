const {ObjectID} = require('mongodb');
const {mongoose}  = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');

var id = "5a5f55ba86cc50d75bb09af3";

if (ObjectID.isValid(id)){
  console.log('ID is not valid');
}

Todo.find({
  _id:id
}).then((todos)=>{
  console.log("Todos: ",todos)
})

Todo.findOne({
  _id:id
}).then((todo)=>{
  console.log("Todo: ",todo)
})

Todo.findById(id).then((todo)=>{
  if(!todo){
    console.log('Id is not valied for todo')
  }
  console.log("Todo: ",todo)
}).catch((e)=> console.log(e))
