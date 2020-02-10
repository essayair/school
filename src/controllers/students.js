const Student = require('../models/student');

async function addStudent(req, res) {
  const student = new Student({firstName: 'a', lastName: 'b', email: '123'});
  await student.save();
  return res.json(student);
}

function getStudent(req, res) {

}

function getAllStudents(req, res) {
  Student.find();
}

function updateStudent(req, res) {

}

function deleteStudent(req, res) {

}

module.exports = {
  addStudent,
  getStudent,
  getAllStudents,
  updateStudent,
  deleteStudent
};