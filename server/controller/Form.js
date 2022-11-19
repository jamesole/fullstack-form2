const Student = require('../model/Student');


const getAllStudents = async(req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    }
    catch(err) {
        console.log(err);
    }
}

const createStudent = async(req, res) => {
    try {
        const student = await Student.create({
            name: req.body.name,
            year: req.body.year,
            major: req.body.major,
            greek: req.body.greek,
        })
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    getAllStudents,
    createStudent
}
