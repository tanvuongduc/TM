const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')

const Task = require('../models/taskList')

//@route POST api/post
//@desc create task
//access Private
router.post('/', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body
    // Simplie validation
    if (!title)
        return res.status(400).json({ success: false, message: 'Title is required' })

    try {
        // create task
        const newTask = new Task({
            title: title,
            description: description,
            url: url.startsWith('https://') ? url : `https//${url}`,
            status: status || 'TO LEARN',
            user: req.userId
        })
        //save database 
        await newTask.save()
        // return clien
        res.json({ success: true, message: 'Happy Learning', task: newTask })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

//@route POST api/task
//@desc get task
//access Private
router.get('/', verifyToken, async (req, res) => {

    try {
        const tasks = await Task.find({ user: req.userId }).populate('user', ['username'])
        res.json({ success: true, tasks })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})
//@route PUT api/task
//desc Update task
//access Private
router.put('/:id', verifyToken, async (req, res) => {
    const { title, description, url, status } = req.body
    if (!title)
        return res.status(400).json({ success: false, message: 'title is not required' })
    try {
        let updatedTask = {
            title: title,
            description: description || '',
            url: (url.startsWith('https://') ? url : `https://${url}`) || '',
            status: status || 'TO LEARN'
        }
        const taskUpdateCondition = { _id: req.params.id, user: req.userId }

        updatedTask = await Task.findOneAndUpdate(taskUpdateCondition, updatedTask, { new: true })
        // User not authorised to ipdete task or task not found
        if (!updatedTask)
            return res.status(401).json({ success: false, messgae: 'Task not found or user not authrised ' })
        res.json({ success: true, message: 'Excellent progress!', task: updatedTask })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, massage: 'Internal server error' })
    }
})

//@route: api/task, desc: delete task, access: Private 
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const taskDeleteCondition = { _id: req.params.id, user: req.userId }
        const deletedTask = await Task.findOneAndDelete(taskDeleteCondition)
        //User not authorised or task not found
        if (!deletedTask)
            return res.status(401).json({ success: false, message: 'Task not found or user not authorised' })
        res.json({ success: true, message: 'delete ok' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

module.exports = router