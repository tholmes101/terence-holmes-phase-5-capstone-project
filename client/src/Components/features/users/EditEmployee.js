import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import { updEmployee} from "./usersSlice";

function EditEmployee() {
  const { pathname } = useLocation();
  const empId = parseInt(pathname.replace("/edit-employee/", ""));

  const emp = useSelector((state) =>
    state.users.data.find((emp) => emp.id === empId)
  );

  const dispatch = useDispatch();
  //const history = useHistory();

  const [name, setName] = useState(emp.name);
  const [email, setEmail] = useState(emp.email);
  const [occupation, setOccupation] = useState(emp.occupation);
  const [salary, setSalary] = useState(emp.salary);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleOccupation = (e) => setOccupation(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);

  const handleClick = () => {
    //if (name && email) {
      dispatch(
        updEmployee({
          id: empId,
          name,
          email,
          occupation,
          salary
        })
      );

  //  }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit employee</h1>
      </div>
      <div className="row">
        <div className="four columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="occupationInput">Occupation</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="occupationInput"
            onChange={handleOccupation}
            value={occupation}
          />
          <label htmlFor="salaryInput">Salary</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="salaryInput"
            onChange={handleSalary}
            value={salary}
          />
          
          <button onClick={handleClick} className="button-primary">
            Save employee
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditEmployee;