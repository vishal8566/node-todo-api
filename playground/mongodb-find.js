//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log("Unable to connect MongoDb server");
  }
  console.log("connected to mongodb server!");

  db.collection('Users').find().count().then((count) =>{
    console.log(`Total Counts: ${count}`);
  },(err) => {
    console.log("unable to fetch", err);
  });
  //db.close();
});
