const express = require('express')
const UserController = require('../controllers/user')
const router = express.Router()

router.route('/')
    .get(UserController.getAllUser)
    .post(UserController.createUser)

router.route('/:userId')
    .get(UserController.getOneUser)
    .patch(UserController.updateUser)
    .delete(UserController.deleteOneUser)

module.exports = router
