const mongoose = require('mongoose')
const Schema = mongoose.Schema

//cấu hình cho kiểu dữ liệu của work bằng Schema
const WorkSchema = new Schema({
    name: {
        type: String
    }
})

//đăng ký lớp Work 
const Work = mongoose.model('Work', WorkSchema)
module.exports = Work