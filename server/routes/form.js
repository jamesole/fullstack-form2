const express = require('express');
const router = express.Router();
const {getAllStudents, createStudent} = require('../controller/form');

//get the list of students
router.route('/').get(getAllStudents);
//creates a new student
router.route('/').post(createStudent);

module.exports = router;
