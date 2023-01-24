import { NavLink } from "react-router-dom";
import React from "react";

function NavBar({ user, setUser }) {
  const { first_name } = user;

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <>
      <p>Welcome, {first_name} </p>
      <nav>
        {user.role === "admin" ? (
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/edit_profile">Account</NavLink>
            <NavLink to="/cart">Cart</NavLink>
          </nav>
        ) : (
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>
        )}

        <button onClick={handleLogoutClick}>Logout</button>
      </nav>
    </>
  );
}

export default NavBar;
