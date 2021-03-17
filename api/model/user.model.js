const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  _id:{
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  taskList:{
    type: Array
  },
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);