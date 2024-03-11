export default function getStudentByLocation(studentList, studentLocation) {
  return studentList.filter((student) => student.location === studentLocation);
}
