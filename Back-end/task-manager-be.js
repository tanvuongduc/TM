const express = require('express');
const mongodb = require('mongodb');

 async function main(){
    const url = 'mongodb://127.0.0.1:27017';
    const client = new mongodb.MongoClient(url ,{
        useUnifiedTopology: true
    });
    await client.connect();
    console.log('connected to database');

    const app = express();
    app.use(express.json()); 
    
    // const task_list =  client.db('task_list')
    // const todos_list = task_list.collection('todos_list');

    //add new todo
    app.post('/add', async(req,res) =>{
        let i = await client.db('task_list').collection('todos_list').count();
        let todo = req.body.todo;
        let todo_check = await client.db('task_list').collection('todos_list').findOne({todo : todo});
        if(todo_check == null){
            await client.db('task_list').collection('todos_list').insertOne({
                _id: i ++,
                todo :todo
            })
           return res.json('ok')
        }else{
            return res.json('Công Việc Đã Tồn tại');
        }
    })
 
    //read all todo

    app.get('/read_all' , async (req,res) => {
        const read_all = await client.db('task_list').collection('todos_list').find().toArray();
        res.json(read_all)
    })

    //delete todo
    app.delete('/delete', async (req, res) => {
        let todo = req.body.todo;
        let todo_check = await client.db('task_list').collection('todos_list').findOne({todo : todo});
        if(todo_check != null){
            await client.db('task_list').collection('todos_list').deleteOne({todo : todo})
           return res.send('đã xóa')
        }else{return res.send('hành động ko tồn tại')}
          
    });
    

    

    app.listen(3000);
    console.log('local server: http://localhost:3000');
 }
 main();
