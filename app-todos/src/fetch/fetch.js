
export function readAllUser() {
    const url = 'http://127.0.0.1:3000/api/'
    return fetch(url, {
        method: 'GET'
    })
}
