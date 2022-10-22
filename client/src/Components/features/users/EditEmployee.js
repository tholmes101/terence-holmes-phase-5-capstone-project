import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import { updEmployee} from "./usersSlice";
import { Link } from "react-router-dom";

function EditEmployee() {
  const { pathname } = useLocation();
  const empId = parseInt(pathname.replace("/edit-employee/", ""));

  const emp = useSelector((state) =>
    state.emps.data.find((emp) => emp.id === empId)
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
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="occupationInput">Occupation</label>
          <input
            className="u-full-width"
            type="text"
            id="occupationInput"
            onChange={handleOccupation}
            value={occupation}
          />
          <label htmlFor="salaryInput">Salary</label>
          <input
            className="u-full-width"
            type="text"
            id="salaryInput"
            onChange={handleSalary}
            value={salary}
          />
          <Link to="/">
          <button onClick={handleClick} className="button-primary">
            Save Changes
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default EditEmployee;