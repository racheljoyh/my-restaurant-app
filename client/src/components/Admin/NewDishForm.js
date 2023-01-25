import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewDishForm({ handleAddDish }) {
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category_id: "",
  });

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/dishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        price: formData.price,
        description: formData.description,
        image: formData.image,
        category_id: formData.category_id,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((dish) => {
          handleAddDish(dish);
          navigate("/menu");
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleOnChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <h2>Add New Dish</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleOnChange}
        />
        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleOnChange}
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleOnChange}
        />
        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleOnChange}
        />
        <label>Category: </label>
        <select
          onChange={handleOnChange}
          value={formData.category_id}
          name="category_id"
        >
          <option value=""></option>
          <option value="1">Starter</option>
          <option value="2">Entree</option>
          <option value="3">Dessert</option>
          <option value="4">Beverage</option>
        </select>

        <button className="btn" type="submit">
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
      <div>
        {errors.map((err) => (
          <p key={err}>{err}</p>
        ))}
      </div>
    </div>
  );
}

export default NewDishForm;
