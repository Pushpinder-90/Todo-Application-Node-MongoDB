var mongoose = require('mongoose');

// configuring mongoos
// mongoos return promises by default
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoAppp');


module.exports={
  mongoose : mongoose
}
