const Student = require('../models/student');

async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Student({firstName, lastName, email});
  await student.save();
  return res.json(student);
}

async function getStudent(req, res) {
  const { id } = req.params;
  const student = await Student.findById(id);
  if (!student) {
    return res.status(404).json("no data")
  };
  return res.json(student)

}

async function getAllStudents(req, res) {
  const students = await Student.find();
  return res.json(students);
}

async function updateStudent(req, res) {
  const { id } = req.params;
  const { firstName, lastName, email} = req.body;
  const student = await Student.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      email
    },{
      new: true
    });
  if (!student) {
    return res.status(404).json("no data")
  };
  return res.json(student)

}

async function deleteStudent(req, res) {
  const { id } = req.params;
  const student = await Student.findByIdAndDelete(id);
    if (!student) {
      return res.status(404).json("no data")
    };
    return res.json(student)


  
}

module.exports = {
  addStudent,
  getStudent,
  getAllStudents,
  updateStudent,
  deleteStudent
};