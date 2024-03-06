export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let depCount = 0;
      for (let dep in this.allEmployees) {
        depCount++;
      }
      return depCount;
    },
  };
}
