const router = require("express").Router()
const taskController = require("../controller/TaskController")
const checkToken = require("../middleware/CheckToken")

router.use(checkToken)

router.post('/add', taskController.addTask)//staff add a task for himself
router.post('/addtaskid', taskController.addTaskForStaffId)// add a task for uid from admin or manager

router.put('/edittaskid', taskController.editTaskId)

router.delete('/deletetask',taskController.deleteTaskId)

router.put('/updateui', taskController.updateUserInfo)

router.post('/get', taskController.getTaskId)// get task of staff (for admin or manager)
router.post('/', taskController.index)// get data of tasks if staff, staffs if manager, all if admin
module.exports = router