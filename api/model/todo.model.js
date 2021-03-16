const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Todo = new Schema({
  id_sub: {
    type: String
  },
  content: {
    type: String
  }
},{
    collection: 'todo'
});

module.exports = mongoose.model('Todo', Todo);