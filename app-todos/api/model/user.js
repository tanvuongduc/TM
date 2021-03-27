const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const user = new Schema({
    Username: String,
    Password: String,
    RoleID: Number,
    StatusID: Number,
  });

module.exports = mongoose.model('user', user);
