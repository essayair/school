const Course = require('../models/course');
const Student = require('../models/student');

async function addCourse(req, res) {
  // const course = new Course({
  //   _id: 'EFG3sss',
  //   name: 'Intro to Web',
  //   description: 'intro'
  // });
  // await course.save();
  // return res.json(course);
  const {name, code, description} = req.body;
  const course = new Course({name, code, description});
  await course.save();
  return res.json(course);
//?? course code不能重复。关联也不能更新
}

async function getCourse(req, res) {
  const { code } = req.params;
  const course = await Course.findById(code).popular('student');
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
  const { code } = req.params;
  const { name, description } = req.body;
  // const course = await Course.findById();
  // course.name = name;
  // course.save()
  const course = await Course.findByIdAndUpdate(
    code,
    { name, description },
  {
    new: true,
  });
  if (!course) {
    return res.status(404).json("no data");
  }
  return res.json(course);
}

async function deleteCourse(req, res) {
  const { code } = req.params;
  const course = await Course.findByIdAndDelete(code);
  if (!course) {
    return res.status(404).json("no data");
  }
  await Student.updateMany(
    { 
      courses:course._id
    },
    {
      $pull: {
        courses: course._id
      }
    }
  )
  return res.json(course);

}

module.exports = {
  addCourse,
  getCourse,
  getAllCourses,
  updateCourse,
  deleteCourse
};