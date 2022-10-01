import React, { useEffect, useState } from 'react'
import { getUsers, postUser, delUser } from './features/users/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import { PacmanLoader } from "react-spinners"

function Users() {
  const [users, setUsers] = useState([]);
  const { data, loading } = useSelector(({ users }) => users);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [salary, setSalary] = useState();

  const dispatch = useDispatch()
  useEffect(() => dispatch(getUsers()), [dispatch])

    return (
    
        <div classname="users">
      {loading ? 
<PacmanLoader color="#36d7b7" /> :
      <form 
      style={{width: "50%", margin: "3%"}}
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: data.length + 1,
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            password_confirmation: passwordConfirmation,
            occupation: occupation,
            salary: salary
          };
          dispatch(postUser(newUser))
        }}
      >
        <label>
          First name
          <input
            type="text"
            name="firstName"
            placeholder="First name..."
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
          ></input>
        </label>
        <br>
        </br>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Last name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          ></input>
        </label>
        <br></br>
        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          ></input>
        </label>
        <br></br>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Enter a password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          ></input>
        </label><br></br>
        <label>
          Password Confirmation
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Re-enter your password..."
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required={true}
          ></input> 
        </label><br></br>
        <label>
          Occupation
          <input
            type="text"
            name="occupation"
            placeholder="Occupation..."
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            required={true}
          ></input>
        </label><br></br>
        <label>
          Salary
          <input
            type="text"
            name="salary"
            placeholder="Salary..."
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            required={true}
          ></input><br></br>
          <input type="submit"></input>
        </label>
      </form>}

      <h1>Users List</h1>

      {data.map((user) => {
        return (
          <div
            style={{ border: "1px solid black", width: "50%" }}
            key={user.id}
          >
            <h2>Full name: {`${user.first_name} ${user.last_name}`}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Occupation: {user.occupation}</h2>
            <h2>Salary: {user.salary}</h2>

            <button onClick={(e) => {
              dispatch(delUser(user))
              }}>🗑</button>
          </div>
        );
      })}
    </div>
  );
}
        

    
  
  export default Users;