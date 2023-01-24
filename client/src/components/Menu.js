import Dish from "./Dish";

function Menu({ dishes, addToCart }) {
  const allDishes = dishes.map((dish) => <Dish key={dish.id} dish={dish} addToCart={addToCart} />);

  return (
    <div>
      <div>{allDishes}</div>
    </div>
  );
}

export default Menu;
