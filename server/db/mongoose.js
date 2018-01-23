var mongoose = require('mongoose');

// configuring mongoos - basically creating a connection with mongodb
// mongoose return promises by default
mongoose.Promise = global.Promise;
// process.env.MONGODB_URI   -  Is Server DB url provided by 'heroku config'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoAppp');

// adding gobally use modules
module.exports={
  mongoose : mongoose
}
