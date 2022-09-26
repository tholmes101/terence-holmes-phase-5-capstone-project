import React from 'react'

function EmployeeInfo({ employee }) {
    const { FirstName, LastNwme, Email, Phone, HireDate, Salary } = employee;
    return (
        <li className="list">
        
        <p>{FirstName}</p>
        
        
      </li>
    )
  }
  export default EmployeeInfo;