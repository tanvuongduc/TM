import React, { useEffect, useState } from "react";
import "../css/Task.css";
import TaskHeader from "./TaskHeader";
import TaskBody from "./TaskBody";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import taskListApi from "../api/taskListApi";

const Task = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [reloadTime, setReloadPage] = useState(0);
  const [taskList, setTaskList] = useState([]);
  const history = useHistory();
  const [sortBy, setSortBy] = useState("status");
  const [direction, setDirection] = useState("desc");

  const tokenPackage = JSON.parse(localStorage.getItem("tokenPackage"));

  useEffect(() => {
    const getListfromServer = async () => {
      const params = {
        token: tokenPackage.token,
      };
      try {
        const newList = await taskListApi.getTaskList(params);

        setTaskList(newList);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        setisError(true);
        throw err;
      }
    };
    getListfromServer();
  }, [reloadTime, tokenPackage.token]);

  const reloadPage = () => {
    setReloadPage(reloadTime + 1);
  };
  console.log(taskList);
  const handleFilterTask = () => {
    let tasks = [];
    if (sortBy === "status") {
      tasks = taskList.map((t) => {
        if (t.status === "pending" || t.status === 0)
          return { ...t, status: 0 };
        if (t.status === "progress" || t.status === 1)
          return { ...t, status: 1 };
        if (t.status === "done" || t.status === 2) return { ...t, status: 2 };
      });
    } else {
      tasks = taskList.map((t) => {
        if (t.priority === "low" || t.priority === 0)
          return { ...t, priority: 0 };
        if (t.priority === "medium" || t.priority === 1)
          return { ...t, priority: 1 };
        if (t.priority === "high" || t.priority === 2)
          return { ...t, priority: 2 };
      });
    }
    const newTastList = _.orderBy(tasks, [sortBy], [direction]);
    setTaskList(newTastList);
  };
  const handleSelectedSortBy = (value) => {
    if (value === 1) return setSortBy("status");
    if (value === 2) return setSortBy("priority");
  };
  const handleSelectedDirection = (value) => {
    value === 2 ? setDirection("asc") : setDirection("desc");
  };
  console.log(direction);
  const handleFilter = (value) => {
    console.log(value);
  };
  return tokenPackage ? (
    <div className="task">
      <TaskHeader username={tokenPackage.username} token={tokenPackage.token} />
      <TaskBody
        taskList={taskList}
        username={tokenPackage.username}
        isLoading={isLoading}
        isError={isError}
        onReloadpage={reloadPage}
        userID={tokenPackage.userID}
        onFilterTask={handleFilterTask}
        onSelectedSortBy={handleSelectedSortBy}
        onFilter={handleFilter}
        onSelectedDirection={handleSelectedDirection}
      />
    </div>
  ) : (
    <div>
      <p>You need to login before, click button to turn back Login</p>
      <button onClick={() => history.push("/")}>Back to Login</button>
    </div>
  );
};

export default Task;
