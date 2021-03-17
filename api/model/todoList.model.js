const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Todolist = new Schema({
  id:{
    type: Number
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
    collection: 'todolist'
});

module.exports = mongoose.model('Todolist', Todolist);