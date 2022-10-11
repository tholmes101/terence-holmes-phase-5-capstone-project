import { useDispatch, useSelector } from "react-redux";

//import { useHistory } from "react-router-dom";
import { useState } from "react";
import { postEmployee } from "./usersSlice";

function AddEmployee() {
  const dispatch = useDispatch();
 // const history = useHistory();

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [occupation, setOccupation] = useState("");
 const [salary, setSalary] = useState();
//const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleOccupation = (e) => setOccupation(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);


  const usersAmount = useSelector((state) => state.emps.data.length);

  const handleClick = () => {
  // if (name && email) {
      dispatch(
        postEmployee({
          id: usersAmount + 1,
          name,
          email,
          occupation,
          salary

        })
      );
    
    //  setError(null);
    //  history.push("/");
   // } 
   // else {
   //   setError("Fill in all fields");
   // }

   // setName("");
   // setEmail("");
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
            placeholder="Name..."
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          <label htmlFor="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="Email..."
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label htmlFor="occupationInput">Occupation</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Occupation..."
            id="occupationInput"
            onChange={handleOccupation}
            value={occupation}
          />
          <label htmlFor="salaryInput">Salary</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Salary..."
            id="salaryInput"
            onChange={handleSalary}
            value={salary}
          />
          
          <button onClick={handleClick} className="button-primary">
            Add Employee
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddEmployee;