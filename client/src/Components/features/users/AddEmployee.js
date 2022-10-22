import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { postEmployee } from "./usersSlice";
import { Link } from "react-router-dom";
//import { Error, FormField } from "./styles";


function AddEmployee() {
  const dispatch = useDispatch();
  const history = useHistory();

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [occupation, setOccupation] = useState("");
 const [salary, setSalary] = useState();
 const [errors, setErrors] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleOccupation = (e) => setOccupation(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);


  const usersAmount = useSelector((state) => state.emps.data.length);

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
    <div className="container">
      <div className="row">
        <h1>Add Employee</h1>
      </div>
      <div className="row">
        <div className="seven columns">
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
          {errors && errors && errors && errors}<br></br>
          <button onClick={handleClick} className="button-primary">
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddEmployee;