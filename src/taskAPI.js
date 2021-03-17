const url = 'http://localhost:3001';
const apiURL = {
    login: `${url}/login`,
    getTaskList: `${url}/getTaskList`,
    logout: `${url}/logout`
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
    return await fetch(getTaskListURL).then(response => response.json())
}

export const logout = async token => {
    await fetch(apiURL.logout, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
    })
}
    

    
        