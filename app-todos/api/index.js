// const express = require('express')
// const mongoose = require('mongoose')
// const db = require('./config//connectDb')
// const user = require('./model/user')
// const app = express()
// const port = 3200

// //connect datadb
// db.connect();

// //get user
// app.get('/login', (req, res) => {
//     const data = user.find({})
//     console.log(data)
//     res.body
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const express = require('express');
const mongodb = require('mongodb');

async function main(){
  const url = 'mongodb://localhost:27017';
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log('connected to database');

    const db = client.db('task_list');
    const collection = db.collection('user');
    const app = express();
    app.use(express.json());
    // READ one user
    app.get('/login', async (req, res) => {
      const todo2 = await collection.find({}).toArray()
      res.json(todo2)
  });

  app.listen(3200);
  console.log('local server: http://localhost:3200');
}
main()