import { useState } from "react";

function Profile({ user, setUser }) {
  const { first_name, last_name, email, username } = user;

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    username: username,
  });

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/edit_profile", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone_number: formData.phone_number,
        email: formData.email,
        user_name: formData.user_name,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => setUser(user));
        alert("Your profile has been updated!");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
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

        <button className="btn" type="submit">
          {isLoading ? "Loading..." : "Save"}
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

export default Profile;
