export default function getStudentIdsSum(studentList) {
  if (Array.isArray(studentList)) {
    return studentList.reduce(
      (studentIdSum, student) => studentIdSum + student.id,
      0,
    );
  }
  return [];
}
