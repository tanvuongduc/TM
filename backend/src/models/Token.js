const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Token = new Schema({
    user: String,
    token: String,
    createdAt: Date,
})

module.exports = mongoose.model('token', Token)