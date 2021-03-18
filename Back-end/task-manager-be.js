const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');

async function main() {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log('connected to database');
    function ID() {
        return Math.random().toString().substr(3, 6);
    }

    const app = express();
    app.use(express.json());
    app.use(cors());

    // const task_list =  client.db('task_list')
    // const todos_list = task_list.collection('todos_list');

    //add new todo
    app.post('/api/todos', async (req, res) => {
        let i =ID();
        let text = req.body.text;
        let priority = req.body.priority;
        let status = req.body.status;
        let text_check = await client.db('task_list').collection('todos_list').findOne({ text: text });
        if (text_check == null) {
            let item = {
                _id: i,
                text: text,
                priority,
                status
            }
            await client.db('task_list').collection('todos_list').insertOne(item)
            return res.json(item)
        } else {
            return res.json('Công Việc Đã Tồn tại');
        }
    })

    //read all todo

    app.get('/api/todos', async (req, res) => {
        const read_all = await client.db('task_list').collection('todos_list').find().toArray();
        res.json(read_all)
    })

    //delete todo
    app.delete('/api/todos/:id', async (req, res) => {
        let id = req.params.id;
        let todo_check = await client.db('task_list').collection('todos_list').findOne({ _id: id });
        if (todo_check != null) {
            await client.db('task_list').collection('todos_list').deleteOne({ _id: id })
            return res.send('đã xóa')
        } else { return res.send('hành động ko tồn tại') }

    });

    // UPDATE todo
    app.post('/api/todo/:id', async (req, res) => {
        const id = req.params.id
        let {text, priority, status} = req.body;
        let todo_check = await client.db('task_list').collection('todos_list').findOneAndUpdate({_id:id},
            {
                $set:{
                    text:text,
                    priority: priority,
                    status: status
                }
            })
            res.json(todo_check)
    });


    app.listen(3000);
    console.log('local server: http://localhost:3000');
}
main();
