// user.route.js

const express = require('express');
const todoListRoutes = express.Router();

// Require User model in our routes module
let TodoList = require('../model/todoList.model');


// Defined get data(index or listing) route
todoListRoutes.route('/').get(function (req, res) {
  TodoList.find(function(err, todos){
    if(err){
      console.log(err);
    }
    else {
      res.json(todos);
    }
  });
 });

 todoListRoutes.route('/add').post(function (req, res) {
  let todo = new TodoList(req.body);
  todo.save()
    .then(business => {
      res.status(200).json({'todo': 'todo in added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

todoListRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  TodoList.findById(id, function (err, todos){
      res.json(todos);
  });
});


module.exports = todoListRoutes;
