let express = require("express");
let routes = express.Router();
let studentRoute = require("./student.routes")


routes.use("/student", studentRoute)

module.exports = routes;
