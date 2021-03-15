const express = require('express');
const mongodb = require('mongodb');
const app = express();
const apiEndpoint = {
    login: '/login',
    logout: '/logout',
    addTask: '/addTask',
    modifyTask: '/modifyTask',
    deleteTask: '/deleteTask',
    getTaskList: '/getTaskList',
    getTask: '/getTask',
    addUser: '/addUser',
    deleteUser: '/deleteUser/:id',
    getUserList: '/getUserList',
    getTokenList: '/getTokenList'

}
const randomToken = () => Math.random().toString(36).substr(3, 6);
const randomId = () => Math.random().toString(36).substr(3, 6);

app.use(express.json());
app.listen(3001);


const Main = async () => {
    const mongodbUrl = 'mongodb://127.0.0.1/27017';
    const client = new mongodb.MongoClient(mongodbUrl, {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log('connected');

    const { login, logout, 
            addTask, modifyTask, deleteTask,
            getTaskList, getTask,
            addUser, getUserList, deleteUser,
            getTokenList
        } = apiEndpoint;

    const db = client.db('taskmanager');
    const userDB = db.collection('user');
    const tokenDB = db.collection('token');

    //Adduser
    app.post(addUser, async (req, res) => {
        const userExist = await userDB.findOne(
            { username: req.body.username }
        );
        if (!userExist) {
            const newUser = {
                _id: randomId(),
                username: req.body.username,
                password: req.body.password,
                phonenumber: req.body.phonenumber,
                birthday: req.body.birthday,
                email: req.body.email,
                gender: req.body.gender
            }
            await userDB.insertOne(newUser);
            res.json(newUser);
        } else return
    });

    //Delete User
    app.get(deleteUser, async (req, res) => {
        const userDeleted = await userDB.findOne({_id: req.params.id});
        if (userDeleted) {
            await userDB.deleteOne({ _id: req.params.id });
            res.json({ userDeleted });
        } else return; 
        
    });

    //Get User List
    app.get(getUserList, async (req, res) => {
        const userList = await userDB.find().toArray();
        res.json(userList);
    });

    //Login
    app.post(login, async (req, res) => {
        const userLogin = await userDB.findOne({
            username: req.body.username,
            password: req.body.password 
        });
        if (userLogin) {
            const tokenPackage = {
                'token': randomToken(),
                'userID': userLogin._id,
                '_id': randomId()
            }
            await tokenDB.insertOne(tokenPackage);
            res.json(tokenPackage);
        }   else res.json({
                token: '',
                error: 'username or password is invalid'
            });
        
    });

    //Logout
    app.post(logout, async (req, res) => {
        await tokenDB.deleteOne({token: req.body.token});
        res.json({status: 'logout'});
        
    });

    //Get Token List
    app.get(getTokenList, async (req, res) => {
        const tokenList = await tokenDB.find().toArray();
        res.json(tokenList);
    });

    
}


Main();
