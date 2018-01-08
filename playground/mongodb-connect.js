// const MongoClient = require('mongodb').MongoClient;
// to perform deserializing of object - to create a variable from an object
		const {MongoClient , ObjectID} = require('mongodb');
		// var objId = new ObjectID();
		// console.log('This is regular Object id : ',objId);
		// end of deserializing of object ID

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
	if(err){
		return console.log('Unable to connect to DB server');
	}
	console.log('Connected to MongoDb server');
	// creating first document Todoss - check in Robomongo
	// we cannot see the DB in Robomongo util we add some data into it , so inserting data into db
	db.collection('Todoss').insertOne({
		firstTodo :'Go for Running',
		completed : true
		},(err,result) => {
			if(err){
				return console.log('Unable to add TODO',err);
			}
			console.log(JSON.stringify(result.ops,undefined,2));
		});

// to create users document - check in Robomongo
// db.collection('Users').insertOne({
// 	name:'Pushpi',
// 	age : 27,
// 	location:'Chandigarh'
// }, (err , result)=>{
// 		if(err){
// 			console.log('Unable to add into users',err);
// 		}
// 		console.log(JSON.stringify(result.ops,undefined,2));
// 		// result.ops is an array of all the documents added , getting timestamp from _id property
// 		console.log(result.ops[0]._id.getTimestamp());
// });


	db.close();
});
