import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header>
      
        <button className="button-primary" variant="outline" onClick={handleLogoutClick}>
          Logout
        </button>
    </header>
  );
}

export default NavBar;