const express = require('express');
const mongodb = require('mongodb');

function randomString() {
    return Math.random().toString(36).substr(3, 6);
}

async function main() {
    const url = 'mongodb://127.0.0.1:27017';
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    })
    await client.connect();
    console.log('connected to database');
    const app = express();
    app.use(express.json());
    // LOGIN
    app.post('/api/login', async (req, res) => {
        function token() {
            return Math.random().toString(5).substr(3, 6);
        }
        const tokens = token();

        // compare password
        // create token
        let inputuser = req.body.username
        let inputpassword = req.body.password
        let user = await client.db('account').collection('user').findOne({ username: inputuser });
        if (user != null) {
            if (user.password == inputpassword) {   
                await client.db('account').collection('user').insertOne(
                    { tokens: tokens, userID: user._id }

                )

            } else { res.json("sai mk") }

        } else { res.json("ko co user") }
        res.json("oke"+""+tokens)
    });
    // Get user info
    app.get('/api/info', async (req, res) => {
        const token = req.query.token;
        let tokenid = await client.db('account').collection('user').findOne({ tokens: token })
        const find = await client.db('account').collection('user').find({_id : tokenid.userID}).toArray();
        res.json(find);

    });

    app.listen(3000);
    console.log('local server: http://localhost:3000');

}

main();
