const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Auth = new Schema({
    user: String,
    password: String,
    permission: Number, //0: Admin, 1: Manager, 2: Staff
    fullname: String,
    number: String
})

module.exports = mongoose.model('auth', Auth)