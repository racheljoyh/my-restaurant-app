import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
import Logo from "./images/logo.png";

function NavBar({ user, setUser }) {
  const { first_name, role } = user;

  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <header className="header sticky">
      <div className="logo-greeting">
        <img className="logo" src={Logo} alt="restaurant-logo" />
        <p className="header-name">Red Star Thai</p>
        <p className="greeting">Welcome, {first_name} </p>
      </div>
      {role === "admin" ? (
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink className="main-nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/edit_profile">
                Account
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
            <li>
              <button className="btn" onClick={handleLogoutClick}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink className="main-nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink className="main-nav-link" to="/edit_profile">
                Account
              </NavLink>
            </li>
            <li>
              <button className="btn" onClick={handleLogoutClick}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
