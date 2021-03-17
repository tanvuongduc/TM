const express = require("express");
const mongodb = require("mongodb");
const app = express();
const apiEndpoint = {
  login: "/login",
  logout: "/logout",
  addTask: "/addTask/:userID",
  modifyTask: "/modifyTask/:id",
  deleteTask: "/deleteTask",
  getTaskList: "/getTaskList/:userID",
  getTask: "/getTask",
  addUser: "/addUser",
  deleteUser: "/deleteUser/:id",
  getUserList: "/getUserList",
  getTokenList: "/getTokenList",
};
const randomToken = () => Math.random().toString(36).substr(3, 6);
const randomId = () => Math.random().toString(36).substr(3, 6);

app.use(express.json());
app.listen(3001);

const Main = async () => {
  const mongodbUrl = "mongodb://127.0.0.1/27017";
  const client = new mongodb.MongoClient(mongodbUrl, {
    useUnifiedTopology: true,
  });
  await client.connect();
  console.log("connected");

  const {
    login,
    logout,
    addTask,
    modifyTask,
    deleteTask,
    getTaskList,
    getTask,
    addUser,
    getUserList,
    deleteUser,
    getTokenList,
  } = apiEndpoint;

  const db = client.db("taskmanager");
  const userCollection = db.collection("user");
  const tokenCollection = db.collection("token");
  const taskListCollection = db.collection("tasklist");

  //Adduser
  app.post(addUser, async (req, res) => {
    const userExist = await userCollection.findOne({
      username: req.body.username,
    });
    if (!userExist) {
      const newUser = {
        _id: randomId(),
        username: req.body.username,
        password: req.body.password,
        phonenumber: req.body.phonenumber,
        birthday: req.body.birthday,
        email: req.body.email,
        gender: req.body.gender,
      };
      await userCollection.insertOne(newUser);
      res.json(newUser);
    } else return;
  });

  //Delete User
  app.get(deleteUser, async (req, res) => {
    const userDeleted = await userCollection.findOne({ _id: req.params.id });
    if (userDeleted) {
      await userCollection.deleteOne({ _id: req.params.id });
      res.json({ userDeleted });
    } else return;
  });

  //Get User List
  app.get(getUserList, async (req, res) => {
    const userList = await userCollection.find().toArray();
    res.json(userList);
  });

  //Login
  app.post(login, async (req, res) => {
    const userLogin = await userCollection.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (userLogin) {
      const tokenPackage = {
        token: randomToken(),
        userID: userLogin._id,
        _id: randomId(),
      };
      await tokenCollection.insertOne(tokenPackage);
      res.json(tokenPackage);
    } else
      res.json({
        token: "",
        error: "username or password is invalid",
      });
  });

  //Logout
  app.post(logout, async (req, res) => {
    await tokenCollection.deleteOne({ token: req.body.token });
    res.json({ status: "logout" });
  });

  //Get Token List
  app.get(getTokenList, async (req, res) => {
    const tokenList = await tokenCollection.find().toArray();
    res.json(tokenList);
  });

  // Get TaskList
  app.get(getTaskList, async (req, res) => {
    const taskList = await taskListCollection
      .find({
        userID: req.params.userID,
      })
      .toArray();
    res.json(taskList);
  });

  // modifyTask
  app.post(modifyTask, async (req, res) => {
    const taskID = req.params.id;
    const {taskname, priority, status} = req.body;
    const updatedTask = await taskListCollection.updateOne(
      {
        _id: taskID,
      },
      {
        $set: {
          taskname: taskname,
          priority: priority,
          status: status     
        }
      }
    );
    res.json(updatedTask);
  });

  // Add Task
  app.post(addTask, async (req, res) => {
    const newTask = {
      _id: randomId(),
      userID: req.params.userID,
      taskname: req.body.taskname,
      priority: req.body.priority,
      status: "Not Complete",
      createdDate: new Date().getTime(),
    };

    await taskListCollection.insertOne(newTask);
    res.json(newTask);
  });

  // Delete Task
  app.post(deleteTask, async (req, res) => {
    const deletedTask = await taskListCollection.findOne({_id: req.body.taskID});
    await taskListCollection.deleteOne({
      _id: req.body.taskID,
    });
    res.json(deletedTask);
  });
};

Main();
