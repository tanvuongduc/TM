const route = require("./routes")
//#region Connect to mongoDb
const db = require('./config/db')
db.connect()
//#endregion

//#region Config Server
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
const server = require("http").Server(app)
server.listen(3000, () => {
    console.log("Server start on port 3000");
})
route(app)
//#endregion