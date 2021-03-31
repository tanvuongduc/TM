const exrpess = require("express");
const router = exrpess.Router();
const User = require('../models/login')


router.get('/', async (req, res) => {
    res.json('ok')
})


module.exports = router;