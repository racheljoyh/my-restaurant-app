import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import axios from "axios";

function Checkout({
  cart,
  cartTotal,
  cartNumber,
  user,
  setCart,
  setCartNumber,
  setCartTotal,
}) {
  const [orderId, setOrderId] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function handleClose() {
    setCart([]);
    setCartNumber(0);
    setCartTotal(0);
    setIsOpen(false);
    navigate("/");
  }

  useEffect(() => {
    const orderNumber = require("order-id")("key");
    const id = orderNumber.generate();
    setOrderId(id);
  }, []);

  function handlePlaceOrder(e) {
    e.preventDefault();
    axios
      .post(`/order/${user.id}/${orderId}/${totalWithTax}`)
      .then((response) => console.log(response));
    setIsOpen(true);
  }

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const allCarts = cart.map((dish) => {
    return (
      <div key={dish.id}>
        <p>{dish.title}</p>
        <p>{dish.price}</p>
      </div>
    );
  });

  const tax = cartTotal * 0.04;
  const totalWithTax = tax + cartTotal;

  return (
    <div>
      <h2>Your Order</h2>
      <h3>Items: {cartNumber}</h3>
      <div>{allCarts}</div>
      <p>Subtotal: {cartTotal.toFixed(2)}</p>
      <p>Tax: {tax.toFixed(2)}</p>
      <p>Total: {totalWithTax.toFixed(2)}</p>
      <form onSubmit={handlePlaceOrder}>
        <button className="btn" type="submit">
          Place Order
        </button>
      </form>
      {isOpen === true ? (
        <Popup orderId={orderId} handleClose={handleClose} user={user} />
      ) : null}
    </div>
  );
}

export default Checkout;
