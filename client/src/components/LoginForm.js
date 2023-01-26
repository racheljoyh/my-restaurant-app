import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./images/logo.png";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      navigate("/");
    });
  }

  return (
    <>
      <img className="logo-login" src={Logo} />
      <div className="form-container">
        <form className="cta-form" onSubmit={handleSubmit}>
          <h2 className="heading-secondary">Please Login</h2>
          <label>Username:</label>
          <input
            type="text"
            name="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn login-btn" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </button>
        </form>
        <div>
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default LoginForm;
