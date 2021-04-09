const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UsersSchema);