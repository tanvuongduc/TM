import axiosClient from "./axiosClient";

const taskListApi = {
  getTaskList: (params) => {
    const url = "/getTaskList";
    return axiosClient.get(url, { params });
  },
  addTask: (userID, taskName, priority, status) => {
    const url = `/addTask/${userID}`;
    return axiosClient.post(url, {
      taskName,
      priority,
      status,
    });
  },
  modifyTask: (taskID, taskName, priority, status) => {
    const url = `/modifyTask/${taskID}`;
    return axiosClient.post(url, {
      taskName,
      priority,
      status,
    });
  },
  deleteTask: (taskID) => {
    const url = `/deleteTask/${taskID}`;
    return axiosClient.post(url);
  },
};

export default taskListApi;
