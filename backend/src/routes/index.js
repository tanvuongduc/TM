const task = require('./task')
const reg = require('./reg')
const login = require('./login')
function route(app){
    app.use('/login', login)
    app.use('/reg', reg)
    app.use('/task', task)
}
module.exports = route