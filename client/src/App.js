import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import EditEmployee from "./Components/features/users/EditEmployee";
import EmployeeList from "./Components/features/users/EmployeeList";
import AddEmployee from "./Components/features/users/AddEmployee";
import React, { useEffect, useState } from "react";
import Login from "./Components/Login"
import SignUp from "./Components/SignUp";
import LoginPage from "./Components/LoginPage";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import styled from "styled-components";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return (
    
   <div>
    <Home />
   <Switch>
    
     <Route path="/page">
      <LoginPage setUser={setUser}/>
     </Route>
    <Route path="/login">
      <Login setUser={setUser}/>
    </Route>
    <Route path="/signup">
      <SignUp setUser={setUser}/>
    </Route>
  </Switch>
  </div>

  )
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
        <Route path="/add-employee">
            <AddEmployee />
          </Route>
          <Route path="/edit-employee">
            <EditEmployee />
          </Route>
          <Route path="/">
            <EmployeeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
