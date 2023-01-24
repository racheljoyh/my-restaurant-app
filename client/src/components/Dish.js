import React from "react";

function Dish({ dish, addToCart, removeCartItem, cart }) {
  const { title, description, price, image } = dish;

  const isFound = cart.some((element) => {
    if (element.id === dish.id) {
      return true;
    }
    return false;
  });

  return (
    <div>
      <h2>{title}</h2>
      <img className="dish-image" src={image} alt={description} />
      <p>{price}</p>
      <p>{description}</p>
      {isFound ? (
        <button onClick={() => removeCartItem(dish.id)} className="btn">
          Remove from Cart
        </button>
      ) : (
        <button onClick={() => addToCart(dish.id)} className="btn">
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default Dish;
