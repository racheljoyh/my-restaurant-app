import CartItem from "./CartItem";

function Cart({ cart, removeCartItem, cartRemoveAll }) {
  console.log(cart);
  const allCartItems = cart.map((cartItem) => (
    <CartItem
      key={cartItem.id}
      cart={cart}
      cartRemoveAll={cartRemoveAll}
      removeCartItem={removeCartItem}
    />
  ));

  return <div>{allCartItems}</div>;
}

export default Cart;
