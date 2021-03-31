const Task = require('../models/Task')
const Auth = require('../models/Auth')
const md5 = require('md5')
class TaskController {
    async index(req, res) {
        const auth = req.auth
        const tasks = await Task.find().where('_id').in(auth.tasks).exec()

        let data = {}

        data.user = auth.user
        switch (auth.permission) {
            case 0:
                data.tasks = tasks
                break
            case 1:
                data.tasks = tasks
                data.staffs = await Auth.find().select('user').$where(`this.permission<${auth.permission}`).exec()
                break
            case 2:
                data.staffs = await Auth.find().select({ "user": 1, "permission": 1, "email": 1 }).$where(`this.permission<${auth.permission}`).exec()
                break
        }
        res.json(data)
    }
    async getTaskId(req, res) {
        const auth = req.auth
        let data = {}
        if (auth.permission > 0) {
            let staff = await Auth.findById(req.body._id).$where(`this.permission<${auth.permission}`).exec()
            let tasks = await Task.find().where('_id').in(staff.tasks).exec()
            data = {
                staffName: staff.user,
                tasks: tasks
            }
            res.json(data)
        }
        else {
            res.json('Access denied!!!!')
        }

    }
    async addTask(req, res) {
        const auth = req.auth
        let data = {
            content: req.body.content,
            status: 0,     //0: Pendding, 1: Progress, 2: Done
            createdBy: auth.user,
            createdAt: Date.now()
        }

        await Task.create(data, async (err, r) => {
            if (err) res.json('Err, pls try again')
            else {
                auth.tasks.push(r._id)
                auth.save()
                res.json('added!!')
            }
        })

    }
    async addTaskForStaffId(req, res) {
        const auth = req.auth
        if (auth.permission == 1 && req.body._id) {
            let data = {
                content: req.body.content,
                status: 0,     //0: Pendding, 1: Progress, 2: Done
                createdBy: auth.user,
                createdAt: Date.now()
            }
            let staff = await Auth.findById(req.body._id).exec()
            if (!staff) {
                res.json('Not found staff!!!')
                return
            }
            await Task.create(data, async (err, r) => {
                if (err) res.json('Err, pls try again')
                else {
                    staff.tasks.push(r._id)
                    staff.save()
                    res.json('added!!')
                }
            })
        }

    }
    async updateUserInfo(req, res) {
        const auth = req.auth
        const staff = req.body.staff
        if (auth.permission == 2 && staff._id) {
            let user = await Auth.findById(staff._id).exec()
            if (!user) {
                res.json('Not found staff!!!')
                return
            }
            user.permission = staff.permission
            user.email = staff.email
            user.password = md5(staff.password)
            await user.save()
            res.json("Update!!")
        }
        else {
            res.json("Access denied!!")
        }
    }
    async editTaskId(req, res) {
        const auth = req.auth
        let task = await Task.findById(req.body._id).exec()
        if (auth.user === task.createdBy) {
            task.content = req.body.content
            task.status = req.body.status
            await task.save()
            res.json(`Success update!`)
        }
        else {
            console.log(task)
            res.json(`Not permission`)
        }
    }

    async deleteTaskId(req, res) {
        const auth = req.auth
        let task = await Task.findById(req.body._id).exec()

        if (task && auth.user == task.createdBy) {
            await task.delete()
            for (let i = 0; i < auth.tasks.length; i++) {
                let id = auth.tasks[i]
                if (id == String(task._id)) {
                    auth.tasks.splice(i, 1);
                    await auth.save()
                    res.json(`Success delete!`)
                    return
                }
            }
        }
        else {
            res.json(`Not permission`)
        }
    }
    addStaff(req, res) {
        const auth=req.auth
        if(auth.permission<2){
            res.json('Access denied!!!!!')
            return
        }
        Auth.find({
            user: req.body.user,
        }, async (err, data) => {
            if(err)console.log(err)
            else {
                if(data.length===0){
                    await Auth.create(
                        {
                            user: req.body.user,
                            password: md5(req.body.password),
                            permission: req.body.permission,

                        }
                    )
                    res.json(
                        {
                            msg: 'Susccessfully Registed!'
                        }
                    )
                }
                else{
                    res.json(
                        {
                            msg: 'Your username existed!'
                        }
                    )
                }
            }
        }
        )
    }
}

module.exports = new TaskController()
