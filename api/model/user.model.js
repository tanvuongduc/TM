const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
},{
    collection: 'user'
});

module.exports = mongoose.model('User', User);