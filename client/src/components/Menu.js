import Dish from "./Dish";

function Menu({ dishes, addToCart, removeCartItem, cart }) {
  const allDishes = dishes.map((dish) => (
    <Dish
      key={dish.id}
      dish={dish}
      addToCart={addToCart}
      removeCartItem={removeCartItem}
      cart={cart}
    />
  ));

  return (
    <div>
      <div>{allDishes}</div>
    </div>
  );
}

export default Menu;
