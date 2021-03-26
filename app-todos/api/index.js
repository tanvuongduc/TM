const express = require('express')
const mongoose = require('mongoose')
const db =require('./config//connectDb')
const app = express()
const port = 3000

//connect datadb
db.connect();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})