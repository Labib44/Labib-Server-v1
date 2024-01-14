const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

const projectRouter= require("./routes/project.route")


app.get("/", (req, res) => {
  res.send("Route is working.........!!!!!!!!!!!!!!!!!!");
});

app.use('/api/v1/project',projectRouter)


module.exports = app;