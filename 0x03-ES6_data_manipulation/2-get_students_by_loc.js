export default function getStudentByLocation(studentList, studentLocation) {
  if (Array.isArray(studentList)) {
    return studentList.filter(
      (student) => student.location === studentLocation,
    );
  }
  return [];
}
