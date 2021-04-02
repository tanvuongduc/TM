const User = require('../models/User')

const login = async (req, res, next) => {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    // console.log(userName, passWord);
    const users = await User.find({ userName, passWord })
    for (let i in users) {
        if (users[i].userName === userName && users[i].passWord === passWord) {

            const token = Math.random().toFixed(6)
            const update = await User.updateOne({ userName: userName }, { $set: { token: token } })
            return res.status(200).json({ userName: users[i].userName, token: token, update })
        }
    }
    res.json({ login: false })
}
module.exports = {
    login
}