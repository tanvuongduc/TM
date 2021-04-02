
export function readAllUser() {
    const url = 'http://127.0.0.1:4200/api/'
    return fetch(url, {
        method: 'GET'
    })
}
