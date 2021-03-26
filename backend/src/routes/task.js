const router = require("express").Router()
const taskController = require("../controller/TaskController")
const checkToken = require("../middleware/CheckToken")

router.use(checkToken)
router.get('/', taskController.index)
router.post('/',taskController.update)
module.exports = router