import CartItem from "./CartItem";

function Cart({
  cart,
  removeCartItem,
  cartRemoveAll,
  cartTotal,
  handleCheckoutClick,
}) {
  const allCartItems = cart.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      cartItem={cartItem}
      cartRemoveAll={cartRemoveAll}
      removeCartItem={removeCartItem}
    />
  ));

  return (
    <div className="cart-container">
      <div>{allCartItems}</div>
      <p className="dish-price">
        Subtotal: ${cartTotal <= 0 ? "0.00" : cartTotal.toFixed(2)}
      </p>
      <button onClick={handleCheckoutClick} className="btn --checkout-btn">
        Checkout
      </button>
      <button className="btn" onClick={cartRemoveAll}>
        Remove All Items
      </button>
    </div>
  );
}

export default Cart;
