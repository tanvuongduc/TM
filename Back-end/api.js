const express = require('express');
const mongodb = require('mongodb');

async function main() {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    })
    await client.connect();
    console.log('connected to database');
    const app = express();
    app.use(express.json());
    // declare random token
    function token() {
        return Math.random().toString().substr(3, 6)
    }
    // declare random id
    function newId() {
        return Math.random().toString().substr(3, 6)
    }
    // add account
    app.post('/api/add', async (req, res) => {
        const newAc = {
            _id: newId(),
            username: req.body.username,
            password: req.body.password
        }
        await client.db('user').collection('use').insertOne(newAc)
        res.json(newAc)
    });
    // login and create token
    app.get('/api/sign', async (req, res) => {
        const id = req.params.id
        const username = req.body.username
        const password = req.body.password
        const account = await client.db('user').collection('use').findOne(
            { username: username, password: password, id: id }
        )
        if (account != null) {
            const login = await client.db('user').collection('use').insertOne({ token: token(), _id: newId() })
            res.json('success')
        }
        else { (res.json('try again')) }
    })
    //login by token

    //delete account by token

    //update account 

    app.listen(3000);
    console.log('local server: http://localhost:3000');
}
main();