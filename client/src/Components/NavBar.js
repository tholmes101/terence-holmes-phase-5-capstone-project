import React from "react";
import styled from "styled-components";

// Logout Feature - allows users to logout of the app
function NavBar({ user,setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Nav>
        <p> Logged in as: {user.username} </p>
        <button className="button-primary" variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
        
    </Nav>
  );
}


const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;