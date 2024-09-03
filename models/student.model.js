let mongoose = require("mongoose")

let studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    father_name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    std: {
        type: Number,
        require: true,
    },
    mobile_number: {
        type: Number,
        require: true,
    }
})

let Student = mongoose.model("studentSchema", studentSchema);
module.exports = Student;