import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h2>Please Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <label>
            <input
              type="text"
              name="user_name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </form>
      <div>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    </div>
  );
}

export default LoginForm;
