import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { postEmployee } from "./usersSlice";
import styled from "styled-components";
import { Button, Label, Input } from "./styles";

// Create a basic form to add a new employee
function AddEmployee() {
  const dispatch = useDispatch();
  const history = useHistory();

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [occupation, setOccupation] = useState("");
 const [salary, setSalary] = useState();
 const [errors, setErrors] = useState(null);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleOccupation = (event) => setOccupation(event.target.value);
  const handleSalary = (event) => setSalary(event.target.value);


  const usersAmount = useSelector((state) => state.employees.data.length);

  const handleClick = () => {
  if (name && email && occupation && salary) {
      dispatch(
        postEmployee({
          id: usersAmount + 1,
          name,
          email,
          occupation,
          salary

        })
      );
    
     setErrors(null);
     history.push("/");
   } 
   else {
     setErrors("Fill in all fields");
    }

   setName("");
   setEmail("");
   setOccupation("");
   setSalary();
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <h1>Add Employee</h1>
        </div>
        <div className="row">
          <div className="seven columns">
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
              Add Employee
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default AddEmployee;