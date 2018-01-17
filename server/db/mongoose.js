var mongoose = require('mongoose');

// configuring mongoos - basically creating a connection with mongodb
// mongoose return promises by default
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppp');

// adding gobally use modules
module.exports={
  mongoose : mongoose
}
