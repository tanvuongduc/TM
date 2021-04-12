require('dotenv').config()
const express = require('express');
const app = express();
const route = require('./routes');
const db = require('./configdb');


db.connect();

app.use(express.json())
route(app);

app.listen(3000);