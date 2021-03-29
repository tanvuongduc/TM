// using fetch api: GET method
// tạo function tuyền vào tham số callback
function readAllTodo(callback) {
    const url = 'https://jsonplaceholder.typicode.com/users/1/todos';
    // Promise
    // Tạo yêu cầu gửi url khai báo bên dưới lên máy chủ
    fetch(url)
        // DATA JSON -> JAVA SCRIPT
        .then(data => data.json())
        .then(getdata => callback(getdata));
}


// using fetch api: POST method
function createTodo(title, callback) {
    // Khai báo + gán giá trị cho 2 biến url và data
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const data = {
        title: title,
        userId: 1000,
    };
    console.log(data);

    // Fetch tạo yêu cầu gửi dữ liệu lên server
    fetch(url, {
        // Phương thức
        method: 'POST',
        // Nội dung khai báo ở trên
        body: JSON.stringify(data),
        // Header là các thông tin phụ
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    // Khi có phản hồi từ máy chủ sẽ gửi tiếp câu lệnh bên trong
    // r.json là quy định chuyển thành json objects
    .then(r => r.json())
    .then(d => callback(d));
}


readAllTodo(
    (todos) => {
        document.body.innerHTML = JSON.stringify(todos);
    }
);

export default readAllTodo;
