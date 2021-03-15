const url = 'http://localhost:3001';
const apiEndpoint = {
    login: '/login',
    logout: '/logout',
    addTask: '/addTask',
    modifyTask: '/modifyTask',
    deleteTask: '/deleteTask',
    getTaskList: '/getTaskList',
    getTask: '/getTask',
    addUser: '/addUser',
    getUserList: '/getUserList',
    getTokenList: '/getTokenList'
}

export const login = async (username, password) => 
    await fetch(`${url}${apiEndpoint.login}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    }).then (response => response.json()) 

    

    
        