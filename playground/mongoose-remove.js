const {ObjectID} = require('mongodb');
const {mongoose}  = require('./../server/db/mongoose');
const {Todo}  = require('./../server/models/todo');

// var id = "5a5f55ba86cc50d75bb09af3";
//
// if (ObjectID.isValid(id)){
//   console.log('ID is not valid');
// }

// will remove all the todos from Document
// Todo.remove({}).then((result)=>{
//   console.log(result)
// });

// findByIdAndRemove and findByIdAndRemove works similar except arguement
// will remove specific todo based on query _id from Document
Todo.findByIdAndRemove({_id:'5a71d7eb493283121c9a85ce'}).then((todo)=>{
    console.log(`${todo} is removed`);
});

// will remove specific todo from Document
Todo.findByIdAndRemove('5a71d7eb493283121c9a85ce').then((todo)=>{
    console.log(`${todo} is removed`);
});
