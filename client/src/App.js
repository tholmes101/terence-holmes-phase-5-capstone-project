import React, { useState } from "react";
import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import About from "./Components/About";
import Nav from "./Components/Nav";
import Employees from "./Components/Employees";

function App() {
  const [currentUser, setCurrentUser] = useState({})
  let navigate = useNavigate();


  const handleUserLogin = (user) => {
    setCurrentUser(user);
    navigate('/employees')
  }


  return (
    <div className="App">

      <Nav currentUser={currentUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login handleUserLogin={handleUserLogin} />} />
        <Route path="/about" element={<About />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </div>
  );
}

export default App;
