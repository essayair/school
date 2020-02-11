const express = require('express');
const router = express.Router();

const { addCourse, deleteCourse, getAllCourses, getCourse, updateCourse} = require("../controllers/courses");

router.get('/', getAllCourses);
router.get('/:code', getCourse);
router.post('/', addCourse);
router.put('/:code', updateCourse);
router.delete('/:code', deleteCourse)




module.exports = router;

