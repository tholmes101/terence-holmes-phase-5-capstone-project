import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import EditUser from "./Components/features/users/EditUser";
import UserList from "./Components/features/users/UserList";
import AddUser from "./Components/features/users/AddUser";

function App() {
  

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
