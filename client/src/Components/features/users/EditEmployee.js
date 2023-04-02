import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { changeEmployee} from "./usersSlice";
import { Button, Label, Input} from "./styles";

// Creates a basic form to change employee data 
function EditEmployee() {
  const { pathname } = useLocation();
  const employeeId = parseInt(pathname.replace("/edit-employee/", ""));

  const employee = useSelector((state) =>
    state.employees.data.find((employee) => employee.id === employeeId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [occupation, setOccupation] = useState(employee.occupation);
  const [salary, setSalary] = useState(employee.salary);
  const [errors, setErrors] = useState(null);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleOccupation = (event) => setOccupation(event.target.value);
  const handleSalary = (event) => setSalary(event.target.value);

  const handleClick = () => {
    if (name && email && occupation && salary) {
      dispatch(
        changeEmployee({
          id: employeeId,
          name,
          email,
          occupation,
          salary
        })
      );
      setErrors(null);
      history.push("/");
    } else {
      setErrors("Fill in all fields"); 
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit employee</h1>
      </div>
      <div className="row">
        <div className="four columns">
          <Label htmlFor="nameInput">Name</Label>
          <Input
            className="u-full-width"
            type="text"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <Label htmlFor="emailInput">Email</Label>
          <Input
            className="u-full-width"
            type="email"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <Label htmlFor="occupationInput">Occupation</Label>
          <Input
            className="u-full-width"
            type="text"
            id="occupationInput"
            onChange={handleOccupation}
            value={occupation}
          />
          <Label htmlFor="salaryInput">Salary</Label>
          <Input
            className="u-full-width"
            type="text"
            id="salaryInput"
            onChange={handleSalary}
            value={salary}
          />
          {errors && errors && errors && errors}<br></br>
          <Button onClick={handleClick} className="button-primary">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
export default EditEmployee;