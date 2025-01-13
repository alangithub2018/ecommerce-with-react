import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../constants/env";
import { useNavigate } from "react-router-dom";
import ErrorTemplate from "../../template/Error";
import LoginTemplate from "../../template/Login";
import Modal from "../../template/Modal";

const Register = () => {
  const nav = useNavigate();
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    nav("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    const formData = new FormData(e.target);
    const data = {
      details: {
        fullname: formData.get("fullname"),
      },
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await axios
      .post(`${API_URL}/public/users`, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        openModal();
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  return (
    <LoginTemplate title={"Register new account"}>
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            Full name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="fullname"
              id="fullname"
              autoComplete="fullname"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => nav("/login")}
            className="flex w-60 justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
        {error && (
          <ErrorTemplate
            setError={setError}
            message={error.response.data.data}
          />
        )}
      </form>
      {isOpen && (
        <Modal
          closeModal={closeModal}
          title="Success"
          message="Your account has been created successfully"
        />
      )}
    </LoginTemplate>
  );
};

export default Register;
