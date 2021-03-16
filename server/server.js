const cors = require('cors');
const express = require('express');
const mongodb = require('mongodb');


async function main() {
    const url = "mongodb://127.0.0.1:27017";
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log("connection");
    const sevr = express();
    sevr.use(express.json());
    sevr.use(cors());
    sevr.get('/api/todos',cors(),async (req,res) =>{
        const todos = await client.db('Test1').collection('Test1').find().toArray();
        res.json(todos);
    })
    sevr.post('/api/login',cors(),async (req,res) => {
        // const username = req.body.username;
        // const password = req.body.password;
        console.log(req.body.username,req.body.password)
        const login = await client.db('Test1').collection('Test1').findOne(
            {
                username : req.body.username
            }
        );
            if(login=== null)
            {
                console.log('Sai ten dang nhap');
            }
            else{
                if(req.body.password === login.password)
                {
                   console.log('dang nhap thanh cong')
                }
                else{
                    console.log('sai mat khau')
                }
            }
    })
   
    sevr.listen(5000);
    console.log('local server: http://localhost:5000');
}

main();