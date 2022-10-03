import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { useState } from "react";
import { updUser} from "./usersSlice";

function EditUser() {
  const { pathname } = useLocation();
  const userId = parseInt(pathname.replace("/edit-user/", ""));

  const user = useSelector((state) =>
    state.users.data.find((user) => user.id === userId)
  );

  const dispatch = useDispatch();
  //const history = useHistory();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [occupation, setOccupation] = useState(user.occupation);
  const [salary, setSalary] = useState(user.salary);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleOccupation = (e) => setOccupation(e.target.value);
  const handleSalary = (e) => setSalary(e.target.value);

  const handleClick = () => {
    //if (name && email) {
      dispatch(
        updUser({
          id: userId,
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
        <h1>Edit user</h1>
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
            Save user
          </button>
        </div>
      </div>
    </div>
  );
}
export default EditUser;