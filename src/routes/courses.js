const express = require('express');
const router = express.Router();

const { addCourse, deleteCourse, getAllCourses, getCourse, updateCourse} = require("../controllers/courses");

router.get('/', getAllCourses);
router.get('/:id', getCourse);
router.post('/', addCourse);
router.put('/', updateCourse);
router.delete('/', deleteCourse)




module.exports = router;

