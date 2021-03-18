const url = 'http://localhost:3001';
const apiURL = {
    login: `${url}/login`,
    getTaskList: `${url}/getTaskList`,
    logout: `${url}/logout`,
    deleteTask: `${url}/deleteTask`,
    modifyTask: `${url}/modifyTask`,
    addTask: `${url}/addTask`
};

export const login = async (username, password) => 
    await fetch(apiURL.login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then (response => response.json()) 

    
export const updateTaskList = async userID => {
    const getTaskListURL = `${apiURL.getTaskList}/${userID}`;
    return await fetch(getTaskListURL).then(response => response.json());
}

export const logout = async token => {
    await fetch(apiURL.logout, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
    })
}

export const deleteTask = async taskID => {
    await fetch(apiURL.deleteTask, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({taskID})
    })
}

export const modifyTask = async (taskID, taskname, priority, status) => {
    const modifyTaskURL = `${apiURL.modifyTask}/${taskID}`;
    await fetch(modifyTaskURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ taskname, priority, status })
    })
}

export const addTask = async (userID, taskname, priority) => {
    const addTaskURl = `${apiURL.addTask}/${userID}`;
    await fetch(addTaskURl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {taskname, priority} )
    });
}

    
        