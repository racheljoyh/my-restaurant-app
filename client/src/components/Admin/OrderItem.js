import { useState } from "react";

function OrderItem({ oneOrder }) {
  const { total, identifier, status } = oneOrder;
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { first_name, last_name } = oneOrder.user;
  const [statusChange, setStatusChange] = useState({
    status: "",
  });

  console.log(oneOrder);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch(`/orders/${oneOrder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: statusChange.status,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((status) => setStatusChange(status));
        alert("Customer's order has been updated!");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleOnChange(e) {
    setStatusChange((prevStatus) => {
      return {
        ...prevStatus,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div className="all-orders-card">
      <p>
        Customer: {first_name} {last_name}
      </p>
      <p>Order Number: {identifier}</p>
      <p>Total: ${total}</p>
      <form onSubmit={handleSubmit}>
        <select
          name="status"
          value={statusChange.status}
          onChange={handleOnChange}
        >
          Status:
          <option value={status}>{status}</option>
          <option value="Ready for pickup">Ready for pickup</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button className="btn" type="submit">
          {isLoading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="errors">
        {errors.map((err) => (
          <p key={err}>{err}!</p>
        ))}
      </div>
    </div>
  );
}

export default OrderItem;
