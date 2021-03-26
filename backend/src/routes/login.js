const router = require("express").Router()
const loginController = require("../controller/LoginController")

router.post('/', loginController.index)

module.exports = router