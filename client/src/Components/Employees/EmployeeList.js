import EmployeeInfo from "./EmployeeInfo";

function EmployeeList({ employees}) {
  return (
    <ul className="list">
      {employees.map((employee) => {
        return (
          <EmployeeInfo
            key={employee.id}
            employee={employee}
           
          />
        );
      })}
    </ul>
  );
}

export default EmployeeList;