const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: {
        type: String,
        required: true
    },
    works: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Work'
        }
    ],
    token: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('User', UserSchema);