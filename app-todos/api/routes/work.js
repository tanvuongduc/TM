const express = require('express')
const workController = require('../controllers/work')
const router = express.Router()

//router lấy tất cả work và thêm mới work
router.route('/')
    .get(workController.getAll)
    .post(workController.createWork)

//router lấy 1 work, update work
router.route('/:workID')
    .get(workController.getOneWork)
    .patch(workController.updateWork)
    .delete(workController.deleteOneWork)
module.exports = router
