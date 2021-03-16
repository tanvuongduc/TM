/*

*/
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
    app.post('/api/todos', async (req, res) => {
        const newAc = {
            _id: newId(),
            username: req.body.username,
            password: req.body.password
        }
        await client.db('user').collection('use').insertOne(newAc)
        res.json(newAc)
    })

    // login and create token
    app.get('/api/todos', async (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const account = await client.db('user').collection('use').findOne(
            { username: username, password: password }
        )
        if (account != null) {
            const login = await client.db('user').collection('token').insertOne({ token: token(), _id: newId, idUse: account._id })
            res.json('success')
        }
        else { (res.json('try again')) }
    })

    //login by token
    app.get('/api/todos/:token', async (req, res) => {
        const token = req.params.token
        const account = await client.db('user').collection('token').findOne({ token: token })
        const login = await client.db('user').collection('use').findOne({ _id: account.idUse })
        res.json(login)
    })

    //delete account
    app.delete('/api/todos/:id', async (req, res) => {
        const id = req.params.id
        const account = await client.db('user').collection('use').findOneAndDelete({ _id: id })
        res.json(account)
    })

    //update account 
    app.post('/api/todos/:id', async (req, res) => {
        const id = req.params.id
        const account = await client.db('user').collection('use').findOneAndUpdate({ _id: id },
            {
                $set: {
                    username: req.body.username,
                    password: req.body.password
                }
            })
        res.json(account)
    })

    app.listen(3000);
    console.log('local server: http://localhost:3000');
}
main()