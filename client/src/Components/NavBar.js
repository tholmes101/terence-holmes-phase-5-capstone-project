import React from "react";

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
    <header>
      
        <button className="button-primary" variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
        <p> Logged in as: {user.username} </p>
    </header>
  );
}

export default NavBar;