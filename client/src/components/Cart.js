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
    <div>
      <button className="btn" onClick={cartRemoveAll}>
        Remove All Items
      </button>
      <div>{allCartItems}</div>
      <p>Subtotal: ${cartTotal <= 0 ? "0.00" : cartTotal.toFixed(2)}</p>
      <button onClick={handleCheckoutClick} className="btn">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
