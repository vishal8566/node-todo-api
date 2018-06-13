//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log("Unable to connect MongoDb server");
  }
  console.log("connected to mongodb server!");

  //delteMany

  // db.collection("Todos").deleteMany({text: "Eat Lunch"}).then((result) => {
  //     console.log(result);
  // });

  //deleteOne
  // db.collection("Todos").deleteOne({text: "Something to do"}).then((result) => {
  //     console.log(result);
  // });

  //find one and deleteOne
  db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
      console.log(result);
  });

  //db.close();
});
