import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./components/Homepage";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import "./App.css";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/dishes").then((r) => {
      if (r.ok) {
        r.json().then((dishes) => setDishes(dishes));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/shopping_cart")
      .then((r) => r.json())
      .then((data) => {
        setCartNumber(data.total_items);
        setCartTotal(data.total_price);
        setCart(data.dishes);
      });
  }, []);

  function addToCart(dish_id) {
    axios.post(`/new/${user.id}/${dish_id}`).then((response) => {
      setCartNumber(cartNumber + 1);
      setCart((cart) => [...cart, response.data]);
      setCartTotal(cartTotal + response.data.price);
    });
  }

  function cartRemoveAll() {
    axios.delete(`/delete/${user.id}`).then(() => {
      setCartNumber(0);
      setCart([]);
      setCartTotal(0);
    });
  }

  function removeCartItem(dish_id) {
    axios.delete(`/destroy/${user.id}/${dish_id}`).then(() => {
      setCartNumber(cartNumber - 1);
      let dish = cart.find((element) => element.id === dish_id);
      setCartTotal(cartTotal - dish.price);
      const newDishes = cart.filter((item) => item.id !== dish.id);
      setCart(newDishes);
    });
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/menu"
          element={
            <Menu
              dishes={dishes}
              addToCart={addToCart}
              removeCartItem={removeCartItem}
              cart={cart}
            />
          }
        />
        <Route
          path="/edit_profile"
          element={<Profile user={user} setUser={setUser} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeCartItem={removeCartItem}
              cartRemoveAll={cartRemoveAll}
              cartTotal={cartTotal}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
