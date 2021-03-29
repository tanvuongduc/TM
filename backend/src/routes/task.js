const router = require("express").Router()
const taskController = require("../controller/TaskController")
const checkToken = require("../middleware/CheckToken")

router.use(checkToken)


router.post('/', taskController.index)//clineent get username from token in req.body 
router.post('/add', taskController.addTask)
module.exports = router