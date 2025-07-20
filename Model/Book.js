const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dateofissue:{
        type:Number,
        required:true
    },
    dateofrenew:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("book",bookSchema)