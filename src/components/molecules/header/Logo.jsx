import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex">
      <Link to="/">
        <img
          src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-bag-white-icon.png"
          alt="logo"
          className="w-10 h-10"
        />
      </Link>
    </div>
  );
};

export default Logo;
