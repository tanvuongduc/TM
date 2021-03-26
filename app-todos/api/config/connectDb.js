const mongoose = require('mongoose');

async function connect(){
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/task_list', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('connect thanh cong')
  } catch (error) {
      console.log('ket noi khong thanh cong')
  }
}
module.exports = {connect};