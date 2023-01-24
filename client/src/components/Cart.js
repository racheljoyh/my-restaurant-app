import CartItem from "./CartItem";

function Cart({ cart, removeCartItem, cartRemoveAll, cartTotal }) {
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
      <p>Total: {cartTotal}</p>
      <button className="btn">Place Order</button>
    </div>
  );
}

export default Cart;
