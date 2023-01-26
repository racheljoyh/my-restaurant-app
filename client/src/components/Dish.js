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
      <div className="title-img-box">
        <h3 className="heading-tertiary">{title}</h3>
        <img className="dish-image" src={image} alt={description} />
      </div>
      <div className="description-box">
        <p className="dish-description">{description}</p>
        <p className="dish-price">${price}</p>
        {isFound ? (
          <button
            onClick={() => removeCartItem(dish.id)}
            className="btn btn-remove"
          >
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => addToCart(dish.id)} className="btn btn-add">
            Add to Cart
          </button>
        )}
        {user.role === "admin" ? (
          <button className="btn" onClick={handleDeleteClick}>
            Delete Dish
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Dish;
