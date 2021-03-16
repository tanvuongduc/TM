import axios from 'axios';

const getAllTask = async (params) => {
  const result = await axios({
    method: 'GET',
    url: `http://localhost:3000/api/todos`,
    params,
  });
  return result;
};
const editTask = async ({id, ...rest}) => {
  const result = await axios({
    method: 'POST',
    url: `http://localhost:3000/api/todos/${id}`,
    data: {...rest},
  });
  return result;
};

const addTask = async (data) => {
  const result = await axios({
    method: 'POST',
    url: `http://localhost:3000/api/todos`,
    data,
  });
  return result;
};
const delTask = async ({taskId}) => {
  const result = await axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/todos/${taskId}`,
    param: {taskId}
  });
  return result;
};

export default { getAllTask, editTask, addTask, delTask };