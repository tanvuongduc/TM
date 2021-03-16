const express = require('express');
const todoRoutes = express.Router();

// Require User model in our routes module
let Todo = require('../model/todo.model');


// Defined get data(todo list) route
todoRoutes.route('/:id_sub').get(function (req, res) {
    Todo.find(function(err, todos){
    if(err){
      console.log(err);
    }
    else {
      res.json(todos);
    }
  });
 });

//add
todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
      .then(business => {
        res.status(200).json({'todo': 'todo in added successfully'});
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });
  

//edit
  todoRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todos){
        res.json(todos);
    });
  });

  todoRoutes.route('/update/:id').post(function (req, res) {
    Todo.findById(req.params.id, function(err, todos) {
    if (!todos)
      res.status(404).send("data is not found");
    else {
        
        todos.content = req.body.content;

        todos.save().then(todos => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// delete
// Defined delete | remove | destroy route
todoRoutes.route('/delete/:id').get(function (req, res) {
    Todo.findByIdAndRemove({_id: req.params.id}, function(err, todos){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = todoRoutes;
