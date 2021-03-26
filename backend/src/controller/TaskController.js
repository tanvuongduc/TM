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
    update(req,res){
        if(req.body.tasks){
            Task.update({user: req.body.user}, { $set: { tasks: req.body.tasks }}, (err, ress)=>{
                if(err) console.log(err)
                else{
                    res.json({
                        status:"ok"
                    })
                    console.log(ress)
                }
            });
        }
        
    }
}

module.exports = new TaskController()