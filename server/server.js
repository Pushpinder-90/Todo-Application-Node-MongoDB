// library Imports
var express = require('express');
var bodyParser = require('body-parser');

// Local Imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
// confiuring middleware - this middleware will return  JSON which we pass into post request
app.use(bodyParser.json());
 // configuring the routes
app.post('/todos',(req,res)=>{
  console.log(req.body);
// creating an instance of Todo model
  var todo = new Todo({
    text : req.body.text,
    completed: req.body.completed,
    completedAt : req.body.completedAt
  });
  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });

});


// setting up the server port
app.listen(3000 , ()=>{
  console.log('Server is up on 3000');
});
