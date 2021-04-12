require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const route = require('./routes');
const db = require('./configdb');


db.connect();

app.use(cors())
app.use(express.json())
route(app);

app.listen(3001);