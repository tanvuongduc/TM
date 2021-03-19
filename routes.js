const express = require("express");
const router = express.Router();
const auth = require("./middleware/auth")
const database = require("./models");

//[POST] -- user login
router.post("/login" , database.checkUser);

//[POST] -- user signup
router.post("/signup" , database.createUser);

//[GET] -- user Data
router.get("/users" , auth.checkToken, database.readUser);

//[GET] -- user Task
router.get("/tasks" , auth.checkToken, database.readTask);

//[POST] -- user Task
router.post("/tasks" , auth.checkToken , database.addTask);

//[POST] -- user Task
router.post("/deltasks" , auth.checkToken , database.removeTask);

//[POST] -- edit Task
router.post("/editTask" , auth.checkToken, database.editTask);

module.exports = router;