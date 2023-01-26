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
import NewDishForm from "./components/Admin/NewDishForm";

function App() {
  const [user, setUser] = useState(null);
  const [dishes, setDishes] = useState([]);
  const [cartNumber, setCartNumber] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userIndex, setUserIndex] = useState([]);
  const [orderIndex, setOrderIndex] = useState([]);
  const [category, setCategory] = useState("All");
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

  function handleAddDish(newDish) {
    setDishes([newDish, ...dishes]);
  }

  const filteredDishes = dishes.filter((dish) => {
    if (category === "All") return true;
    return dish.category.title === category;
  });

  function handleDeleteDish(deletedDish) {
    const updatedDishes = dishes.filter((dish) => dish.id !== deletedDish.id);
    setDishes(updatedDishes);
  }

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

  // optimistic rendering of add and delete users
  function handleAddUser(newUser) {
    setUserIndex([newUser, ...userIndex]);
  }

  function handleDeleteUser(deletedUser) {
    const updatedUsers = userIndex.filter((user) => user.id !== deletedUser.id);
    setUserIndex(updatedUsers);
  }

  if (!user) return <Login onLogin={setUser} handleAddUser={handleAddUser} />;

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
              dishes={filteredDishes}
              filterBy={category}
              setCategory={setCategory}
              addToCart={addToCart}
              removeCartItem={removeCartItem}
              cart={cart}
              user={user}
              handleDeleteDish={handleDeleteDish}
            />
          }
        />
        <Route
          path="/edit_profile"
          element={
            <Profile
              user={user}
              setUser={setUser}
              handleDeleteUser={handleDeleteUser}
            />
          }
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
          <Route
            path="orders"
            element={<OrderList orderIndex={orderIndex} />}
          />
          <Route
            path="users"
            element={
              <UserList
                userIndex={userIndex}
                handleDeleteUser={handleDeleteUser}
              />
            }
          />
          <Route
            path="dishes/new"
            element={<NewDishForm handleAddDish={handleAddDish} />}
          />
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
