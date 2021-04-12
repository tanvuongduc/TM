const express = require('express');
const router = express.Router();
const argan2 = require('argon2');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//@router POST api/auth/register
//@desc register user
//@access public

router.post('/register', async (req, res) => {
    const { username, password } = req.body
    //simple validation
    if (!username || !password)
        return res.status(400).json({ success: false, message: 'missing username and password' });
    try {
        //check for existing user
        const user = await User.findOne({ username })
        if (user)
            return res.status(400).json({ success: false, message: 'username already taken' });
        //hashedPassword
        const hashedPassword = await argan2.hash(password)
        //create new user
        const newUser = new User({ username: username, password: hashedPassword })
        //save database
        await newUser.save()
        //return token
        const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN)

        res.json({ success: true, message: 'user created successfully!!!', accessToken })

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'internal server error'})
    }
})

module.exports = router