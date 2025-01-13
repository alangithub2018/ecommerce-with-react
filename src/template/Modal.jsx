import React from "react";

const Modal = ({ title, message, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
        <div className="flex items-center justify-center text-green-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m-7 7a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
        <p className="text-gray-600 text-center mb-4">{message}</p>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
