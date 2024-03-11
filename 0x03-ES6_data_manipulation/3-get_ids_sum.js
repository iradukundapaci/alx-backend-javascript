export default function getStudentIdsSum(studentList) {
  return studentList.reduce(
    (studentIdSum, student) => studentIdSum + student.id,
    0,
  );
}
