export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next() {
      // Check if there are more departments
      if (currentDepartmentIndex < departments.length) {
        const currentDepartment = departments[currentDepartmentIndex];

        // Check if there are more employees in the current department
        if (currentEmployeeIndex < currentDepartment.length) {
          const result = { value: currentDepartment[currentEmployeeIndex], done: false };
          currentEmployeeIndex += 1;
          return result;
        } else {
          // Move to the next department
          currentDepartmentIndex += 1;
          currentEmployeeIndex = 0;
          return this.next(); // Recursive call to move to the next employee
        }
      }

      // more departments, return done
      return { value: null, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
