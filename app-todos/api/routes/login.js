const exrpess = require("express");
const router = exrpess.Router();
const User = require('../models/User')



router.post('/', async (req, res) => {
    const userName = req.body.userName;
    const passWord = req.body.passWord;

    const users = await User.find()
    console.log(users)
    console.log(users)
    for( let i in users){
        if(users[i].userName === userName && users[i].passWord === passWord){
            
            const token = Math.random().toFixed(6)
            const update = await User.updateOne( {userName: userName},{$set :{token: token}})
            res.json({userName: users[i].userName, token: token ,update})
            return;
        }
       
    }
    res.json({login: false})


})


module.exports = router;