// const MongoClient = require('mongodb').MongoClient;
// to perform deserializing of object - to create a variable from an object
		const {MongoClient , ObjectID} = require('mongodb');
		// var objId = new ObjectID();
		// console.log('This is regular Object id : ',objId);
		// end of deserializing of object ID
// Note  : this ObjectID constructor is used to fetch out the data on the basis if _id from collection

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
	if(err){
		return console.log('Unable to connect to DB server');
	}
	console.log('Connected to MongoDb server');
	//  1. to fetch the data from todoss document regardless of any data criteria
	// find() - just returns a cursor that points to every todo in the document
	// toArray() - just returns the promise
	db.collection('Todoss').find().toArray().then((docs)=>{
		console.log('1.All Todos : ');
		console.log(JSON.stringify(docs , undefined, 2));
	},(err)=>{
		console.log('Unable to fetch Todos',err);
	});

// 2. fetch the data on the basis of data crteria
	db.collection('Todoss').find({completed :true}).toArray().then((docs)=>{
		console.log('Completed Todos : ');
		console.log(JSON.stringify(docs , undefined, 2));
	},(err)=>{
		console.log('Unable to fetch Todos',err);
	});
// 3. fetch the data on the basis of _id
// just need to pass the ObjectId("5a4e0067da5edbd87e35d567") from db to ObjectID()
db.collection('Todoss').find({_id: new ObjectID('5a4e0067da5edbd87e35d567')}).toArray().then((docs)=>{
	console.log('Todos By _id : ');
	console.log(JSON.stringify(docs , undefined, 2));
} , (err)=>{
	console.log('unable to fetch the Todos', err);
});
// 4. count the todos
db.collection('Todoss').find().count().then((count)=>{
	console.log(`Todos Count : ${count}`);
} , (err)=>{
	console.log('unable to fetch the Todos', err);
});
	db.close();
});
