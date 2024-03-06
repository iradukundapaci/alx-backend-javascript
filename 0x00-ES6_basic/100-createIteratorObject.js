export default function createIteratorObject(report) {
  let allEmpl = [];
  for (let dep in report.allEmployees) {
    allEmpl = allEmpl.concat(report.allEmployees[dep]);
  }
  return allEmpl;
}
