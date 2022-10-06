import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import EditEmployee from "./Components/features/users/EditEmployee";
import EmployeeList from "./Components/features/users/EmployeeList";
import AddEmployee from "./Components/features/users/AddEmployee";

function App() {
  

  return (
    <Router>
      <div>
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
      </div>
    </Router>
  
  );
}

export default App;
