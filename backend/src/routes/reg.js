const router = require("express").Router()
const regController = require("../controller/RegController")


router.post('/', regController.index)

module.exports = router