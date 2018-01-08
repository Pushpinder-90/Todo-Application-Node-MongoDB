// const MongoClient = require('mongodb').MongoClient;
// to perform deserializing of object - to create a variable from an object
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
	if(err){
		return console.log('Unable to connect to DB server');
	}
	console.log('Connected to MongoDb server');
// finding and updating the record by _id
	// db.collection('Todoss').findOneAndUpdate({
	// 	_id : new ObjectID('5a537831ab0e9e297cfbb7d3')
	// },{
	// 	$set:{
	// 		completed :false
	// 		}
	// },{
	// 	returnOriginal:false
	// }).then((result)=>{
	// 	console.log(JSON.stringify(result));
	// });


// updating name and increament age by _id
db.collection('Users').findOneAndUpdate({
	_id: new ObjectID('5a4df44fa9d32e10b00cc7c4')
},{
	$set : {
		name:'Pushpi'
	},$inc : {
		age:1
	}
},{
	returnOriginal:false
}).then((result)=>{
	console.log(result)
})



});
