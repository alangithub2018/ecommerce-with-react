import React from "react";
import { Link } from "react-router-dom";

const LoginTemplate = ({ children, title }) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto w-8/12"
          src="https://img.freepik.com/vector-premium/vector-diseno-logotipo-bolsa-compras-comercio-electronico_1234492-128.jpg?semt=ais_hybrid"
          alt="Your Company"
        />
        <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{children}</div>
      {title.includes("Sign in") && (
        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Create an account
          </Link>
        </p>
      )}
    </div>
  );
};

export default LoginTemplate;
