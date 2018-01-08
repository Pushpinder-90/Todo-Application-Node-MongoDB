// const MongoClient = require('mongodb').MongoClient;
// to perform deserializing of object - to create a variable from an object
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,db)=>{
	if(err){
		return console.log('Unable to connect to DB server');
	}
	console.log('Connected to MongoDb server');
// 1. deleteMany() -   deletes all the duplicate documents
	db.collection('Todoss').deleteMany({text : 'something to do'}).then((result)=>{
			console.log('Document Deleted');
			console.log(JSON.stringify(result,undefined,2));
	}, (err)=>{
			console.log('Not Found the Document');
	// });

	// 2. deleteOne() -   deletes first documents
		db.collection('Todoss').deleteOne({text : 'Buy Fruits'}).then((result)=>{
				console.log('Document Deleted');
				console.log(JSON.stringify(result,undefined,2));
		}, (err)=>{
				console.log('Not Found the Document');
		});
		// 3. findOneAndDelete() - Find one as per criteiaand delete that documents
		// Mostly used , if you only know the id of the document
			db.collection('Todoss').findOneAndDelete({completed:false}).then((result)=>{
					console.log('Document Deleted');
					console.log(JSON.stringify(result,undefined,2));
			}, (err)=>{
					console.log('Not Found the Document');
			});

	db.close();
});
