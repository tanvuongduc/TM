// user.route.js

const express = require('express');
const userRoutes = express.Router();

// Require User model in our routes module
let user = require('../model/user.model');


// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
  user.find(function(err, user){
    if(err){
      console.log(err);
    }
    else {
      res.json(user);
    }
  });
 });

userRoutes.route('/:id').get(function (req, res) {
  let id = +req.params.id;
  user.findById(id, function (err, user){
      res.json(user);
  });
});

module.exports = userRoutes;
