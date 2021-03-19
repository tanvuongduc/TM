//Setup file moi truong
require("dotenv").config();

//Ma hoa pass va token
const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

//config MongoDB
const MongoClient = require("mongodb").MongoClient;
const url = process.env.DB_URL_LOCAL;
// const url = process.env.DB_URL_CLOUD;

//Bang Users
MongoClient.connect(url).then(
    database => {
        userCollection = database.db("Todo-App").collection("Users");
    }
).catch((err) => console.log(err));

//Bang Tasks
MongoClient.connect(url).then(
    database => {
        taskCollection = database.db("Todo-App").collection("Tasks");
    }
).catch((err) => console.log(err));



//Tao tai khoan - Signup
exports.createUser = function(req,res) {
    let passCrypto = crypto.MD5(req.body.password).toString();

    let userData = {
        _id : Math.floor(Math.random(0,1) * 10000).toString(),
        username : req.body.username,
        password : passCrypto,
        role : "staff"
    }
    userCollection.findOne({username : req.body.username}).then(
         data => {
             if (data === null) {
                userCollection.insertOne(userData).then(
                    data => {
                        res.send(data);
                        console.log("Tao tai khoan thanh cong");
                }).catch(err => console.log(err))
             }
             else {
                 console.log(`Ten dang nhap ${req.body.username} da ton tai`)
             }
         }
     )
}

//Dang nhap - Login
exports.checkUser = function(req,res) {
    let passCrypto = crypto.MD5(req.body.password).toString();

    userCollection.findOne({
        username : req.body.username,
        password : passCrypto
    }).then(
        data => {
            if (data != null) {
                //truyen sang reactjs
                let payload = {
                    _id : data._id,
                    username : req.body.username
                }

                let token = jwt.sign(payload, process.env.ACCESS_TOKEN);
                res.send(token); 
                // console.log(token);
            }    
            else {
                console.log("Sai username password");
                res.sendStatus(401);
            }
        }
    ).catch(err => console.log(err))
}

//Trang home user
exports.readUser = function (req,res) {
    let payload = jwt.verify(req.token , process.env.ACCESS_TOKEN);
    // console.log(payload);

    userCollection.findOne({_id : payload._id}).then(
        data => {
            res.send(data);
            // console.log(data);
        }
    ).catch(err => console.log(err));
}


//API FOR TASKS

//Api get tasks
exports.readTask = function (req,res) {
    let payload = jwt.verify(req.token , process.env.ACCESS_TOKEN);
    // console.log(payload);

    taskCollection.find({userID : payload._id}).toArray().then(
        data => {
            res.send(data);
            // console.log(data);
        }
    ).catch(err => console.log(err))
}


//Api add task
exports.addTask = function (req,res) {
    let payload = jwt.verify(req.token , process.env.ACCESS_TOKEN);
    // console.log(payload);
    //tao chuoi ngau nhien
    let id = Math.random().toString(36).substring(7);

    let newTask = {
        "_id" : id,
        "userID" : payload._id,
        "name" : req.body.task
    }
    console.log(req.body.task);

    taskCollection.find({userID : payload._id}).toArray().then(
        data => {
            //Do du lieu len view react
            data.push(newTask);
            res.send(data);
            // console.log(data);

            //them moi cho db
            taskCollection.insertOne(newTask).then(
                () => console.log("Them thanh cong")
            ).catch(err => console.log(err))
        }
    ).catch(err => console.log(err))
}


//Api remove Task
exports.removeTask = function (req,res) {
    let payload = jwt.verify(req.token , process.env.ACCESS_TOKEN);
    console.log(req.body.task);
    
    taskCollection.find({userID : payload._id}).toArray().then(
        data => {
            //Do du lieu len view react
            let newData = data.filter(data => data.name !== req.body.task);
            res.send(newData);

            //xoa du lieu tren db
            let removeDB = data.filter(data => data.name === req.body.task);
            console.log(removeDB);
            removeDB.map(document => 
                taskCollection.deleteOne({_id : document._id}).then(
                    () => console.log("xoa thanh cong")
                )
            )
        }
    ).catch(err => console.log(err))

}

//Edit Task
exports.editTask = function (req,res) {
    let payload = jwt.verify(req.token , process.env.ACCESS_TOKEN);
    console.log(req.body.task,req.body.taskID);

    taskCollection.find({userID : payload._id}).toArray().then(
        data => {
            //Do du lieu len view react
            let editData = data.filter(data => data._id === req.body.taskID);
            editData[0].name = req.body.task;
            console.log(editData[0].name);
            res.send(data)

            //sua du lieu db
            taskCollection.updateOne({_id : req.body.taskID}, {$set:{name : req.body.task}}).then(
                () => console.log("Da update thanh cong")
            ).catch(err => console.log(err)) 
        }
    ).catch(err => console.log(err))
}