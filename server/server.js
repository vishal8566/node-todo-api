var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} =  require('./db/mongoose');
var {Todo} =  require('./models/todo');
var {User} =  require('./models/users');

var app = express();

app.use(bodyParser.json());

// Post Method
app.post('/todos', (req, res) => {
var todo  = new Todo({
  text: req.body.text
});

todo.save().then((doc) => {
  res.send(doc);
}, (e) => {
      res.send(e);
});
});

// Get Method

app.listen(3000, ()=> {
  console.log("Started on Port 3000");
})
