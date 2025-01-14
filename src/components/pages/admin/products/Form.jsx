import React, { useState } from "react";
import { token } from "../../../../helpers/auth";
import Modal from "../../../../template/Modal";
import axios from "axios";
import { API_URL } from "../../../../constants/env";

const Form = () => {
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    product_name: "",
    description: "",
    price: 0,
    images: [],
    features: {
      color: "",
    },
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      product_name: e.target.productName.value,
      description: e.target.description.value,
      price: Number(e.target.price.value),
      images: [e.target.image.value],
      features: {
        details: {
          color: e.target.color.value,
        },
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
        openModal();
        e.target.reset();
        setFormData({
          product_name: "",
          description: "",
          price: 0,
          images: [],
          features: {
            details: {
              color: "",
            },
          },
        });
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred");
        setError(err);
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Add Product
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="flex flex-col">
          <label
            htmlFor="productName"
            className="text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={10}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="price"
            className="text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="image"
            className="text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="color"
            className="text-sm font-medium text-gray-700"
          >
            Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.features.color}
            onChange={(e) => {
              setFormData({
                ...formData,
                features: { ...formData.features, color: e.target.value },
              });
            }}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Product
        </button>
        <p className="text-red-500 text-center">
          {error && JSON.stringify(error)}
        </p>
      </form>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          title="Success"
          message="Your product has been created successfully"
        />
      )}
    </div>
  );
};

export default Form;
