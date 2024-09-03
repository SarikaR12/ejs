let express = require("express");
const { getStudent } = require("../controller/student.controller");
const { addStudent } = require("../controller/student.controller");
const { deleteStudent } = require("../controller/student.controller");
const { updateStudent } = require("../controller/student.controller");
const { studentProfile } = require("../controller/student.controller");

let route = express.Router();

route.get("/get", getStudent);
route.post("/add", addStudent);
route.delete("/delete/:id", deleteStudent);
route.put("/update/:id", updateStudent);
route.get("/get/:id", studentProfile)

module.exports = route;
