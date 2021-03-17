const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Todolist = new Schema({
  _id:{
    type: String
  },
  id_sub: {
    type: String
  },
  task: {
    type: String
  },
  status:{
    type: String
  },
  priority:{
    type: String
  },
},{
    collection: 'todolist'
});

module.exports = mongoose.model('Todolist', Todolist);