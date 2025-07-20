const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rollnumber: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("student",studentSchema)