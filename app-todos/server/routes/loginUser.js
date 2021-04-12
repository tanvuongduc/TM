const express = require('express');
const router = express.Router();
const argan2 = require('argon2');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//@router POST api/auth/login
//@desc login user
//@access public

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    //simple validation
    if (!username || !password)
        return res.status(400).json({ success: false, message: 'missing username and password' });
    try {
        //check for existing user
        const user = await User.findOne({ username })
        if (!user)
            return res.status(400).json({ success: false, message: 'Incorrect username and password' });
        //user name found
        const passwordValid = await argan2.verify(user.password, password)
        if (!passwordValid)
            return res.status(400).json({ success: false, message: 'Incorrect username and password' })
        //return token
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN)

        res.json({ success: true, message: 'user logged in successfully!!!', accessToken })

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'internal server error' })
    }
})

module.exports = router