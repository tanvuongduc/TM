const mongoose = require('mongoose')
const WorkSchema = mongoose.Schema({
    name: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
})


//đăng ký lớp Work 
module.exports = mongoose.model('Work', WorkSchema)
