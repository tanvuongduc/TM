const Task = require('../models/Task')
const Auth = require('../models/Auth')
class TaskController{
    async index(req, res){
        let query={
            user: req.body.user
        }
        let auth = await Auth.findOne(query)
        let data = auth.tasks.map(task=>{
            console.log(task)
            Task.findOne({_id:task})
        })
        res.json(data)
    }
    async addTask(req, res){
        let data = {
            content: req.body.content,
            status: 0,     //0: Pendding, 1: Progress, 2: Done
            createdBy: req.body.user,
            createdAt: Date.now()
        }
        
        await Task.create(data,async (err, r)=>{
            if(err)res.json('Err, pls try again')
            else{
                let query={
                    user: req.body.user
                }
                let auth = await Auth.findOne(query)
                auth.tasks.push(r._id)
                auth.save()
                res.json('added!!')
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