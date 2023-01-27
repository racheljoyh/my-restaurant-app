import { useState, useEffect } from "react";
import axios from "axios";

function Profile({ user, setUser, handleDeleteUser }) {
  const { first_name, last_name, email, username } = user;
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    first_name: first_name,
    last_name: last_name,
    email: email,
    username: username,
  });

  useEffect(() => {
    axios.get(`/user_orders/${user.id}`).then((response) => {
      console.log(response.data);
      setOrders(response.data);
    });
  }, [user.id]);

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
        username: formData.username,
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

  function handleDeleteUserClick() {
    handleDeleteUser(user);
    fetch(`/users/${user.id}`, { method: "DELETE" }).then(() => setUser(null));
    
  }

  const allOrders = orders.map((order) => {
    return (
      <div className="order-details-card" key={order.id}>
        <p>Order Number: {order.identifier}</p>
        <p className="status">Order Status: {order.status}</p>
        <p className="total">Order Total: $ {order.total}</p>
      </div>
    );
  });

  return (
    <div className="form-container-profile">
      <h2 className="heading-tertiary">Update Profile</h2>
      <form className="cta-form-profile" onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleOnChange}
          />
        </div>

        <button className="btn" type="submit">
          {isLoading ? "Loading..." : "Update"}
        </button>
        <button className="btn" onClick={handleDeleteUserClick}>
          Delete Account
        </button>
      </form>

      <div>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
      <h2 className="heading-tertiary profile-header">My Orders</h2>
      <div>{allOrders}</div>
    </div>
  );
}

export default Profile;
