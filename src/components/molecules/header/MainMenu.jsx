import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <nav className="w-full">
        <ul className="flex justify-end text-gray-100">
          <li className="flex items-center">
            <Link
              className="menu-item"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              className="menu-item"
              to="/products"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainMenu;
