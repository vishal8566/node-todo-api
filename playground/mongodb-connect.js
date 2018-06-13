//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    console.log("Unable to connect MongoDb server");
  }
  console.log("connected to mongodb server!");
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err){
  //     return console.log("unable to insert", err);
  //   }
//}) ;
// db.collection('Users').insertOne({
//     name: "Vishal Goyal",
//     age: 25,
//     location: "Ahmedabad"
// }, (err, result) => {
//     if(err){
//     return  console.log('unabel');
//     }
//     console.log(JSON.stringify(result.ops, undefined, 2));
//
// }) ;

  db.close();
});
