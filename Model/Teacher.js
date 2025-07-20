const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    subject: {
        type: String
    },
    practical: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("teacher", teacherSchema)