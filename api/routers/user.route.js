// user.route.js

const express = require('express');
const userRoutes = express.Router();

// Require User model in our routes module
let User = require('../model/user.model');


// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function(err, useres){
    if(err){
      console.log(err);
    }
    else {
      res.json(useres);
    }
  });
 });


module.exports = userRoutes;
