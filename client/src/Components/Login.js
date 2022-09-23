import React, { useState } from "react";

const Login = ({handleUserLogin}) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      userName,
      passWord,
    };

    // Check that user input is good by sending 
    // request to the backend and **authenticating user**
    handleUserLogin(credentials)

  };

  return (
    <div className="Login">


      <form onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={passWord}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>



    </div>
  );
};
export default Login;