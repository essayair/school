const Student = require('../models/student');
const Course = require('../models/course')


async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Student({firstName, lastName, email});
  await student.save();//validator works here with save
  return res.json(student);
}

async function getStudent(req, res) {
  const { id } = req.params;
  const student = await (await Student.findById(id)).populate
  ('courses', "name");
  if (!student) {
    return res.status(404).json("no data")
  };
  return res.json(student);
}

async function getAllStudents(req, res) {
  const students = await Student.find();
  return res.json(students);
}

async function updateStudent(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  //try joi if not save function
  const newStudent = await Student.findByIdAndUpdate(
    id,
    { firstName, lastName, email},
    { new: true });
  if (!student) {
    return res.status(404).json("no data")
  };
  return res.json(newStudent)

}

async function deleteStudent(req, res) {
  const { id } = req.params;
  const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json("no data")
    };

    await Course.updateMany(
      { _id: {$in: student.courses} },
      { $pull: {students:student._id} }
    );
    return res.json(deletedStudent);
}

async function addCourse(req, res) {
  const {id, code } = req.params;
  const course = await Course.findById(code);
  const student = await Student.findById(id);
  if (!course || !student) {
    return res.status(404).json('student or course not found');
  };
  student.courses.push.addToSet(course._id);
  course.students.push.addToSet(student._id);


  await student.save();
  await course.save();
  return res.json(student);
}

async function deleteCourse(req, res) {
  const {id, code } = req.params;
  const course = await Course.findById(code);
  const student = await Student.findById(id);
  if (!course || !student) {
    return res.status(404).json('student or course not found');
  };
  const oldCount = student.courses.length;
  student.courses.pull(course.id);
  course.students.pull(student.id);

  if (student.courses.length === oldCount){
    return res.status(404).json('Enrolment not exit');
  }
  await student.save();
  await course.save();
  return res.json(student);


}


module.exports = {
  addStudent,
  getStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  addCourse,
  deleteCourse
};