const Task = require('../models/Task')

class TaskController{
    index(req, res){
        Task.find({user: req.body.user},async (err, data)=>{
            if(err)console.log(err)
            else{
                res.json(data)
            }
        })
    }
}

module.exports = new TaskController()
