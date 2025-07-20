const { getTeacher, postTeacher, putTeacher, deleteTeacher } = require("../Controller/teacherController")

const route = require("express").Router()

route.get("/", getTeacher)
route.post("/", postTeacher)
route.put("/:id", putTeacher)
route.delete("/:id", deleteTeacher)

module.exports = route