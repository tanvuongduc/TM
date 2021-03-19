const cors = require('cors');
const express = require('express');
const mongodb = require('mongodb');
const jwt = require('jsonwebtoken');

const auth = require('./auth')
function randomID() {
    return Math.random().toString(36).substr(3, 6);
}
async function main() {
    const url = "mongodb://127.0.0.1:27017";
    const client = new mongodb.MongoClient(url, {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log("connection");
    const sevr = express();
    sevr.use(express.json());
    sevr.use(cors());

    // CHECK LOGIN
    const key = "x!n !t t!et ban e!"
    sevr.post('/api/login', cors(), async (req, res) => {

        const login = await client.db('Test1').collection('Test1').findOne(
            {
                username: req.body.username
            }
        );
        if (login === null) {
            res.json('Sai ten dang nhap');
            console.log("Sai tai khoan")
        }
        else {
            if (req.body.password === login.password) {
                let payload = {
                    _id: login._id,
                    username: login.username
                }
                let token = jwt.sign(payload, key)
                res.send(token);
                console.log(token);
                console.log('dang nhap thanh cong');
            }
            else {
                console.log("sai mat khau")
            }
        }
    })
    //   READ USER
    sevr.get('/api/user', checkToken, async (req, res) => {
        let token = req.token;
        let payload = jwt.verify(token, key);
        const data = await client.db('Test1').collection('Test1').findOne({
            _id: payload._id
        })
        res.send(data);
    })
    //   READ TASK
    sevr.get('/api/task', checkToken, async (req, res) => {
        let token = req.token;
        let payload = jwt.verify(token, key);
        const data = await client.db('Test1').collection('Task').find(
            { userID: payload._id }
        ).toArray()
        res.send(data);

    })
    /// API ADD TASK
    sevr.post('/api/task',checkToken, async(req, res)=>{
        let payload = jwt.verify(req.token, key);
        let newTask = {
            "_id" : randomID(),
            "userID": payload._id,
            "name" : req.body.task
        }
        const data = await client.db('Test1').collection('Task').find({
            userID : payload._id 
        }).toArray()
        data.push(newTask);
        console.log(data);
        res.send(data);
        client.db('Test1').collection('Task').insertOne(newTask);
    })

    //API REMOVE TASK
    sevr.post('/api/deltask',checkToken, async(req,res)=>{
        let payload = jwt.verify(req.token, key);
        const data = await client.db('Test1').collection('Task').find({ userID : payload._id }).toArray()
        let newData = data.filter(data =>{
            return data._id !== req.body.taskID
        })
        res.send(newData);
        

        client.db('Test1').collection('Task').deleteOne({_id:req.body.taskID});
    })


    //TOKEN
    sevr.get('/api/user', checkToken, async (req, res) => {
        let token = req.token
        // console.log(token);
        let payload = jwt.verify(token, key);

        const data = await client.db('Test1').collection('Test1').findOne({
            _id: payload._id
        })
        res.json(data)
    })

    function checkToken(req, res, next) {
        let authToken = req.get("Authorization");
        let token = ""

        if (authToken === undefined) {
            res.status(401);
            return;
        }
        else if (authToken.startsWith = "Bearer ") {
            token = authToken.substring(7) //Bearer_
        }

        else {
            res.status(401);
            return;
        }

        try {
            req.token = token;
            next()
        } catch (e) {
            res.status(401)
        }
    }
    sevr.listen(5000);
    console.log('local server: http://localhost:5000');


}
main();