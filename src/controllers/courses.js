const Course = require('../models/course');

async function addCourse(req, res) {
  const {name, code, description} = req.body;
  const course = new Course({name, code, description});
  await course.save();
  return res.json(course);

}

async function getCourse(req, res) {
  const { id } = req.params;
  const course = await Course.findById(id);
  if (!course) {
    return res.status(404).json("no data!");
  }
  return res.json(course);
}

async function getAllCourses(req, res) {
  const courses = await Course.find();
  return res.json(courses);
}

async function updateCourse(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  // const course = await Course.findById();
  // course.name = name;
  // course.save()

  const course = await Course.findByIdAndUpdate(
    id,
    {
      name,
      description
  },
  {
    new: true,
  });
  if (!course) {
    return res.status(404).json("no data");
  }
  return res.json(course);
}

async function deleteCourse(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id);
  if (!course) {
    return res.status(404).json("no data");
  }
  return res.json(course);

}

module.exports = {
  addCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
};