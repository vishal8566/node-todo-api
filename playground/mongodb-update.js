//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log("Unable to connect MongoDb server");
  }
  console.log("connected to mongodb server!");

  db.collection("Todos").findOneAndUpdate({_id : new ObjectID ('5b20ef232a9bd501d21de179')},{$set : {completed: false}}).then((result) => {
      console.log(result);
  });

  //db.close();
});
