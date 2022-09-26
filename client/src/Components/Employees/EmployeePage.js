import { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";

function EmployeePage() {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    fetch("/employees")
      .then((r) => r.json())
      .then((Emp) => {
        setEmployee(Emp);
      });
  }, []);
    return (
      <div>
        Employees
      
       <EmployeeList />
    </div>
    )
  }
  export default EmployeePage;