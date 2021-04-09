const exrpess = require("express");
const router = exrpess.Router();
const LoginController = require('../controllers/login')


router.get('/', async(req, res ) =>{
    try {
        const user = await User.find()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
});



module.exports = router;
