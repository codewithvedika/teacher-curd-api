const mongoose = require("mongoose")
const studentRoute = require("./Route/studentRoute")
const teacherRoute = require("./Route/teacherRoute")
const bookRoute = require("./Route/bookRoute")
const express = require("express")
require("dotenv/config")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("HOME")
})

app.use("/api/student", studentRoute)
app.use("/api/teacher", teacherRoute)
app.use("/api/book",bookRoute)

app.listen(process.env.PORT || 5000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()