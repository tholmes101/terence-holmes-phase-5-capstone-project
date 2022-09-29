import React from 'react'
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "75px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "grey",
  textDecoration: "none",
  color: "white",
};

function Nav ({currentUser}) {
    console.log(currentUser);
  return (
    <div className='Nav'>
        {currentUser.userName ? <p>Hello {currentUser.userName}</p> : <Link to='login'/>}
        <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>

      <NavLink
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>

      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>


      <NavLink
        to="/employees"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
       Employees
      </NavLink>

      
    </div>
  )
}
export default Nav;