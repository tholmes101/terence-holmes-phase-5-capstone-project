import './App.css';
import { Route, Switch } from "react-router-dom";
import EditEmployee from "./Components/features/users/EditEmployee";
import EmployeeList from "./Components/features/users/EmployeeList";
import AddEmployee from "./Components/features/users/AddEmployee";
import React, { useEffect, useState } from "react";
import LoginPage from "./Components/LoginPage";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About"

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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/page">
          <LoginPage setUser={setUser} />
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
