import React from "react";
import { token } from "../../../../helpers/auth";

const Form = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      product_name: formData.get("productName"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      images: [formData.get("image")],
      features: {
        color: formData.get("color"),
      },
    };
    console.log(data);
    await axios
      .post(`${API_URL}/admin/products`, data, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((res) => {
        console.log(res);
        alert("Product added successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred");
      });
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={10}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
          />
        </div>
        <div>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            name="image"
          />
        </div>
        <div>
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            name="color"
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Form;
