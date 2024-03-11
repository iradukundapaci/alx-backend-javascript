export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const gradedStudents = newGrades.map((grade) => grade.studentId);
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const gradedStudent = student;

      if (gradedStudents.includes(student.id)) {
        gradedStudent.grade = newGrades.filter(
          (grade) => grade.studentId === student.id,
        )[0].grade;
      } else {
        gradedStudent.grade = 'N/A';
      }
      return student;
    });
}
