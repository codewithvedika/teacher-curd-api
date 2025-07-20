const { getBook, postBook, putBook, deleteBook } = require("../Controller/bookController")

const route = require("express").Router()

route.get("/", getBook)
route.post("/", postBook)
route.put("/:id", putBook)
route.delete("/:id", deleteBook)

module.exports = route