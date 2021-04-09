const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoClient = require('mongoose')
const workRoute = require('./routes/work')
<<<<<<< HEAD
const loginRoute = require('./routes/login')

mongoClient.connect('mongodb://localhost/task_list', {
        useNewUrlParser: true,
        useUnifiedTopology: true
=======
const loginRouter = require('./routes/login')
const userRoute = require('./routes/user')
// const User = require('./models/User')

mongoClient.connect('mongodb://localhost/TM', {
    useNewUrlParser: true,
    useUnifiedTopology: true
>>>>>>> 89238a473b194962c0825a2d93080b778761353d
})
    .then(() => console.log("Connect database successfully"))
    .catch((error) => console.error("Connect database false"))

const app = express()


//middleware
app.use(logger('dev'))
app.use(bodyParser.json())


//config routes cua works
app.use('/work', workRoute)
app.use('/login', loginRouter)
app.use('/user', userRoute)

app.use('./login', loginRoute)

//routers
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Server was run'
    })
})


//bắt lỗi
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})


//hứng lỗi bằng hàm function
app.use((req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const statust = err.status || 500

    //trả thông báo cho người dùng
    return res.status(statust).json({
        error: {
            message: error.message
        }
    })
})


//start the server
const port = app.get('port') || 3001
app.listen(port, () =>
    console.log(`Server is listening on port ${port}`)
)
