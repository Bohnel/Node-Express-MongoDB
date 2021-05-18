const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");
const homeRoute = require("./routes/home");

app.use("/posts", postsRoute);
app.use("/", homeRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => { console.log("connected to DB"); }
)

//listen to port 3000
app.listen(3000);