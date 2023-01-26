import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm({ onLogin, handleAddUser }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });

  const navigate = useNavigate();

  function handleOnChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => {
          handleAddUser(user);
          onLogin(user);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }

      navigate("/");
    });
  }

  return (
    <div className="form-container-signup">
      <h2 className="heading-secondary">Sign Up</h2>
      <form className="cta-form-signup" onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleOnChange}
        />
        <label>Last Name: </label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleOnChange}
        />
        <label>Email: </label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <label>Password Confirmation: </label>
        <input
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleOnChange}
        />

        <button className="btn login-btn" type="submit">
          {isLoading ? "Loading..." : "Signup"}
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

export default SignupForm;
