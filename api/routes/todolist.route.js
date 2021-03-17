// user.route.js

const express = require('express');
const todoRoutes = express.Router();

// Require User model in our routes module
let Todo = require('../model/todolist.model');


// Defined get data(index or listing) route
todoRoutes.route('/:id').get(function (req, res) {
  let id_sub = req.params.id;
  Todo.find({id_sub:id_sub}, function(err, todo){
    if(err){
      console.log(err);
    }
    else {
      res.json(todo);
    }
  });
 });


//addd
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

//delete
    todoRoutes.route('/delete/:id').get(function (req, res) {
      Todo.findByIdAndRemove({_id: req.params.id}, function(err, business){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
    });



todoRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Todo.findById(id, function (err, todo){
      res.json(todo);
  });
});


module.exports = todoRoutes;
