const express = require('express');
const router = express.Router()
const User = require('../models/login')

router.get('./',(req, res)=>{
    res.json('ok')
})

router.post('/', async (req, res) => {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    const users = await User.find()
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