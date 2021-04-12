 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const taskSchema = new Schema({
     title: {
         type: String,
         required:true,
     },
     description: {
        type:String
     },
     url:{
         type: String
     },
     status: {
         type: String,
         enum: ['TO LEARN', 'LEARNING', 'LEARNED']
     },
     user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'users'
     }
 })

 module.exports = mongoose.model('task', taskSchema);