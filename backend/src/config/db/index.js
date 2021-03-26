const mongoose = require('mongoose')


async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/taskmanager', {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Connect Successfully!!')
    } catch (error) {
        console.log('Connect Failed to DB')
    }
}


module.exports = {connect}