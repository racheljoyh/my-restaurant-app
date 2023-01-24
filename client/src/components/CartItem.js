function CartItem({ cartItem, removeCartItem }) {
  const { title, image, price, description } = cartItem;

  return (
    <div>
      <h2>{title}</h2>
      <img className="dish-image" src={image} alt={description} />
      <p>{price}</p>
      <button className="btn" onClick={() => removeCartItem(cartItem.id)}>
        Remove from Cart
      </button>
    </div>
  );
}

export default CartItem;
