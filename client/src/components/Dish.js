import React from "react";

function Dish({ dish, addToCart }) {
  const { title, description, price, image } = dish;

  return (
    <div>
      <h2>{title}</h2>
      <img className="dish-image" src={image} alt={description} />
      <p>{price}</p>
      <p>{description}</p>
      <button onClick={addToCart} className="btn">
        Add to Cart
      </button>
    </div>
  );
}

export default Dish;
