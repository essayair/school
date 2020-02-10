const express = require('express');
const router = express.Router();

const { addStudent, deleteStudent, getAllStudents, getStudent, updateStudent} = require("../controllers/students");

router.get('/', getAllStudents);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent)



module.exports = router;

