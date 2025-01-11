import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
