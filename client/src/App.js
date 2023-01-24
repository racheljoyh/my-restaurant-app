import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Menu from "./components/Menu";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import HomePage from "./components/Homepage";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import "./App.css";
import axios from "axios";
import AdminHome from "./components/Admin/AdminHome";
import OrderList from "./components/Admin/OrderList";
import UserList from "./components/Admin/UserList";

function App() {
  const [user, setUser] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userIndex, setUserIndex] = useState([]);
  const [orderIndex, setOrderIndex] = useState([]);
  const navigate = useNavigate();

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

  function handleCheckoutClick() {
    if (cartNumber === 0) {
      return;
    } else {
      // window.scrollTo(0, 0);
      // setShow(false);
      navigate("/checkout");
    }
  }

  useEffect(() => {
    // fetching users
    fetch("/admin/users")
      .then((r) => r.json())
      .then((users) => setUserIndex(users));
  }, []);

  useEffect(() => {
    // fetching users
    fetch("/admin/orders")
      .then((r) => r.json())
      .then((orders) => setOrderIndex(orders));
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/*" element={<HomePage />} />
        <Route
          path="/menu"
          element={
            <Menu
              dishes={dishes}
              addToCart={addToCart}
              removeCartItem={removeCartItem}
              cart={cart}
              user={user}
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
              handleCheckoutClick={handleCheckoutClick}
            />
          }
        />
        <Route path="/admin" element={<AdminHome />}>
          <Route index element={<OrderList />} />
          <Route
            path="orders"
            element={<OrderList orderIndex={orderIndex} />}
          />
          <Route path="users" element={<UserList userIndex={userIndex} />} />
        </Route>
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              cartTotal={cartTotal}
              cartNumber={cartNumber}
              user={user}
              setCart={setCart}
              setCartNumber={setCartNumber}
              setCartTotal={setCartTotal}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
