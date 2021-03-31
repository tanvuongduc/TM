const exrpess = require("express");
const router = exrpess.Router();
const User = require('../models/User')

<<<<<<< HEAD

=======
router.get('/', async (req, res) => {
    res.json('ok')
})
>>>>>>> 70c1a36040c22bf1704d24e06b03b94ac6edb831

router.post('/', async (req, res) => {
    const userName = req.body.userName;
    const passWord = req.body.passWord;

    const users = await User.find()
    console.log(users)
    for (let i in users) {
        if (users[i].userName === userName && users[i].passWord === passWord) {

            const token = Math.random().toFixed(6)
            const update = await User.updateOne({ userName: userName }, { $set: { token: token } })
            res.json({ userName: users[i].userName, token: token, update })
            return insertToken(token, userName);
        }

    }
    res.json({ login: false })
})

function insertToken(token, userName) {
    const url = 'http://localhost:3000/api/todos';
    const data = {
        idToken: token,
        userName: userName
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(r => r.json()).then(d => callback(d));
}

module.exports = router;
