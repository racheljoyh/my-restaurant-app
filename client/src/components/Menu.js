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
    <>
      <div className="filter">
        <strong className="filter-label">Filter: </strong>
        <div className="filter-box">
          <input
            onChange={handleFilterChange}
            type="radio"
            value="All"
            checked={filterBy === "All"}
          />
          <span className="label">All</span>
          <input
            onChange={handleFilterChange}
            type="radio"
            value="Starter"
            checked={filterBy === "Starter"}
          />
          <span className="label">Starters</span>
          <input
            onChange={handleFilterChange}
            type="radio"
            value="Entree"
            checked={filterBy === "Entree"}
          />
          <span className="label">Entrees</span>
          <input
            onChange={handleFilterChange}
            type="radio"
            value="Dessert"
            checked={filterBy === "Dessert"}
          />
          <span className="label">Desserts</span>
          <input
            onChange={handleFilterChange}
            type="radio"
            value="Beverage"
            checked={filterBy === "Beverage"}
          />
          <span className="label">Beverages</span>
        </div>
      </div>
      <div className="dish-container">
        <div>{allDishes}</div>
      </div>
    </>
  );
}

export default Menu;
