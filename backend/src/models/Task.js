const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Task = new Schema({
    content: String,
    status: Number,     //0: Pendding, 1: Progress, 2: Done
    createdBy: String,
    createdAt: Date
})

module.exports = mongoose.model('task', Task)