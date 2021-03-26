const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());
let todoId = 0
const todoList = []

//get all todo list
app.get('/api/todoList', (req, res) => {
    res.json(todoList)
})

//create a work
app.post('api/todoList', (req, res) => {
    todoId++
    const item = {
        id: todoId,
        text: req.body.text
    }
    todoList.push(item)
    res.json(item)
})

//delete all todoList
app.delete('api/todolist', (req, res) => {
    while (todoList.length) { todoList.pop() }
    res.json(todoList)
})

//delete one todolist
app.delete('api/todoList/:id', (req, res) => {
    const id = +req.params.id
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].id === id) {
            res.json(todoList[i])
            todoList.splice(i, 1)
        }
    }
})