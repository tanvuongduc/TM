require("dotenv").config();
const express = require("express");
const server = express();
const port = process.env.PORT; 
const router = require("./routes");
const {urlencoded} = require("body-parser");
const cors = require("cors");

const db = require("./models");
const auth = require("./middleware/auth")
//Middleware
server.use(express.json());
server.use(urlencoded({extended:true}));
server.use(cors());

//[ROUTER] / localhost:5000/api
server.use("/api" , cors(), router);

//Server listen on port
server.listen(port, (err) => {
    if (err) throw err;

    console.log(`Server listen on ${port}`);
})
