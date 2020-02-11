const Student = require('../models/student');

async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Student({firstName, lastName, email});
  await student.save().exec();
  return res.json(student);
}

async function getStudent(req, res) {
  const { id } = req.params;
  Student.findById(id).exec((err, result) => {
    if (err) return res.status(400).send('error');
    return res.json(result);
  });
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
  const newStudent = await Student.findByIdAndUpdate(
    id,
    { irstName, lastName, email},
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
    return res.json(deletedStudent)


  
}

module.exports = {
  addStudent,
  getStudent,
  getAllStudents,
  updateStudent,
  deleteStudent
};