const express = require('express')
const db = require('./config/conectDb')
const app = express()

let userId = 0;
const user = [];
app.get('/api/user', (req, res) => {
    res.json(user);
})
app.post('/api/user', (req, res) => {
    userId++;
    const item = {
        id: userId,
        name: req.body ? req.body.name : ''
    };
    user.push(item);
    res.json(item);
});
app.get('/hello', (req, res) => {
    res.end('hello');
});

app.get('/hello/:name', (req, res) => {
    res.end(`hello ${req.params.name}`);
});

app.use(express.json());

const users = [

    { username: "admin", password: "123456" }


];
const all_tokens = [];

function newToken() {
    return "123456";
}

app.post('/login', (req, res) => {

    for (let i = 0; i < users.length; i++) {
        if (req.body.username == users[i].username && req.body.password == users[i].password) {
            const tokenValue = newToken();
            // console.log(token);
            const result = { ok: true, token: tokenValue }
            all_tokens.push({ token: tokenValue, username: users[i].username })
            res.json(result);
            return;
        }

    }

    res.json({ ok: false });
});

app.get('/info', (req, res) => {
    const token = req.query.token;
    // console.log(token)
    for (let i = 0; i < all_tokens.length; i++) {
        // console.log(all_tokens[i])
        if (all_tokens[i].token == token) {
            res.json({ ok: true, username: all_tokens[i].username })
            return;
        }
    }
    res.json({})
});

app.listen(3000);
