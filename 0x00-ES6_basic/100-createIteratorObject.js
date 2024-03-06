export default function createIteratorObject(report) {
  const listOfDepartment = Object.keys(report.allEmployees);
  let allEmpl = [];
  for (const dep of listOfDepartment) {
    allEmpl = allEmpl.concat(report.allEmployees[dep]);
  }
  return allEmpl;
}
