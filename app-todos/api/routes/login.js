const exrpess = require("express");
const router = exrpess.Router();
const LoginController = require('../controllers/login')


router.route('/')
    .post(LoginController.login)


module.exports = router;
