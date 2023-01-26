function CartItem({ cartItem, removeCartItem }) {
  const { title, image, price, description } = cartItem;

  return (
    <div className="cart-card">
      <h3 className="heading-tertiary">{title}</h3>
      {/* <img className="dish-image cart-img" src={image} alt={description} /> */}
      <p className="dish-price">${price}</p>

      <button className="btn" onClick={() => removeCartItem(cartItem.id)}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
