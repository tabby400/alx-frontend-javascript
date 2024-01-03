// returns an object with a department name as key an array of employees as value.
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
