const { studentSchema } = require("../models")


let getStudent = async (req, res) => {
    try {

        let student = await studentSchema.find()
        res.status(200).json({
            message: "student get success",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let addStudent = async (req, res) => {
    try {

        let body = req.body;

        let student = await studentSchema.create(body)

        res.status(201).json({
            message: "student admition is success",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let deleteStudent = async (req, res) => {
    try {
        let { id } = req.params;

        let student = await studentSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "student admition is delete success",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let updateStudent = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let data = await studentSchema.findByIdAndUpdate(id, body);

        let student = {
            id,
            ...body,
        }

        res.status(200).json({
            message: "student data updete",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let studentProfile = async (req, res) => {
    try {
        let { id } = req.params;
        let student = await studentSchema.findById(id)

        res.status(200).json({
            message: "student get success",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

module.exports = { getStudent, addStudent, deleteStudent, updateStudent, studentProfile }