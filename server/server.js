// library Imports
const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

// Local Imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000; // confiuring dynamic port for heroku
// confiuring middleware - this middleware will return  JSON which we have to pass into post request
app.use(bodyParser.json());
 // configuring the routes and making POST requst
app.post('/todos',(req,res)=>{
  console.log(req.body);
// creating an instance of Todo model
  var todo = new Todo({
    text : req.body.text,
    completed: req.body.completed,
    completedAt : req.body.completedAt
  });
  // saving of an instance of model Todo
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});


// fetching all the todos from collection
app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
      res.send({todos}) // passing whole object inside of send()
    },(err)=>{
      res.status(400).send(err);
    })
});

// fetching the request url paramertes using GET /Todos
app.get('/todos/:id',(req,res)=>{
    // res.send(req.params);
    var id = req.params.id;
    console.log('id  :',id)

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
            return res.status(404).send();
        }
      res.status(200).send(todo); //sending back as an object along with properties
  }).catch((e)=>{
    res.status(400).send(e);
  });
});

// setting up the server port
app.listen(port , ()=>{
  console.log(`Server is up on ${port}`);
});
