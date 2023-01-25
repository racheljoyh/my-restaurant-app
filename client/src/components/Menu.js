import Dish from "./Dish";

function Menu({
  dishes,
  addToCart,
  removeCartItem,
  cart,
  handleDeleteDish,
  user,
  setCategory,
  filterBy,
}) {
  function handleFilterChange(e) {
    setCategory(e.target.value);
  }

  const allDishes = dishes.map((dish) => (
    <Dish
      key={dish.id}
      dish={dish}
      addToCart={addToCart}
      removeCartItem={removeCartItem}
      cart={cart}
      handleDeleteDish={handleDeleteDish}
      user={user}
    />
  ));

  return (
    <div className="dish-container">
      <div className="filter">
        <label>
          <strong className="filter-label">Filter: </strong>
          <div className="filter-box">
            <input
              onChange={handleFilterChange}
              type="radio"
              value="All"
              checked={filterBy === "All"}
            />
            All
            <input
              onChange={handleFilterChange}
              type="radio"
              value="Starter"
              checked={filterBy === "Starter"}
            />
            Starters
            <input
              onChange={handleFilterChange}
              type="radio"
              value="Entree"
              checked={filterBy === "Entree"}
            />
            Entrees
            <input
              onChange={handleFilterChange}
              type="radio"
              value="Dessert"
              checked={filterBy === "Dessert"}
            />
            Desserts
            <input
              onChange={handleFilterChange}
              type="radio"
              value="Beverage"
              checked={filterBy === "Beverage"}
            />
            Beverages
          </div>
        </label>
      </div>
      <div>{allDishes}</div>
    </div>
  );
}

export default Menu;
