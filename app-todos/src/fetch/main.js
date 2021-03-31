function readAllUser(callback) {
    const url = 'https://jsonplaceholder.typicode.com/users/1/todos'
    fetch(url)
        .then(data => data.json())
        .then(getdata => callback(getdata));
}

readAllUser( (todos) => {
        JSON.stringify(todos)
        console.log(todos)
    }
);

export default readAllUser;
