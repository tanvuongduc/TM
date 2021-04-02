
export function readAllUser() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    return fetch(url, {
        method: 'GET'
    })
}
