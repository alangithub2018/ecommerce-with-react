import { Link } from "react-router-dom";
import { API_URL } from "../../constants/env";

function Home() {
  return (
    <>
      <button className="mx-auto mt-5 my-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <Link to="/admin/products/list">View Admin Products</Link>
      </button>
    </>
  );
}

export default Home;
