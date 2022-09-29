import { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("/employees")
      .then((r) => r.json())
      .then((employees) => {
        setEmployees(employees);
      });
  }, []);
    return (
      <div>
        <h1>List of Employees</h1>
      
        
<div classname = "EmployeeList"></div>

         <ul className="Items">
          {employees.map((list) => (
          <li key={list.id}>
            {list.FirstName}
          </li>
        ))}
      </ul>
    </div>
    )
  }
  export default Employees;