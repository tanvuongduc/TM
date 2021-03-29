const { ObjectId } = require('bson')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Auth = new Schema({
    user: String,
    password: String,
    permission: Number, //0: Admin, 1: Manager, 2: Staff
    tasks: [ObjectId]
})

module.exports = mongoose.model('auth', Auth)