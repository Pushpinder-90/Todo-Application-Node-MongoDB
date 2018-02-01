var env = process.env.NODE_ENV || 'development'; // ONLY SET THIS VARIABLE ON HEROKU NOT LOCALLY
console.log('env ****** ',env);
// setting env variable like production or developemnt and creating a test DB
if(env === 'development'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppp' ; // using origianl DB here
}else if(env === 'test'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApppTest' ; // using test DB here
}
