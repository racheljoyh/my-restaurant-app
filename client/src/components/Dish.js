import React from "react";

function Dish({
  dish,
  addToCart,
  removeCartItem,
  cart,
  handleDeleteDish,
  user,
}) {
  const { title, description, price, image } = dish;

  const isFound = cart.some((element) => {
    if (element.id === dish.id) {
      return true;
    }
    return false;
  });

  function handleDeleteClick() {
    fetch(`/dishes/${dish.id}`, {
      method: "DELETE",
    }).then(() => handleDeleteDish(dish));
  }

  return (
    <div className="dish-card">
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
      {user.role === "admin" ? (
        <button onClick={handleDeleteClick}>Delete Dish</button>
      ) : null}
    </div>
  );
}

export default Dish;
