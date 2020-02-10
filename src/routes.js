const express = require('express');
const router = express.Router();

const studentRoute = require("./routes/students.js")
const courseRoute = require("./routes/courses.js")


router.use('/students', studentRoute);
router.use('/courses', courseRoute);



module.exports = router;

