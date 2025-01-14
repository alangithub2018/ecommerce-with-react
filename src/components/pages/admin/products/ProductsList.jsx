import { Link } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../atoms/Loader";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import axios from "axios";
import { API_URL } from "../../../../constants/env";

const ProductsList = () => {
  const { data, error, loading } = useFetch("public/products");

  const deleteProduct = async (id) => {
    console.log("Deleting product", id);
    await axios
      .delete(`${API_URL}/admin/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Products</h1>
      {data.length === 0 ? (
        <p className="text-center text-gray-600">No products found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-4 px-6">
                    <img
                      src={product.images[0]}
                      alt={product.product_name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="py-4 px-6">{product.product_name}</td>
                  <td className="py-4 px-6">{product.description}</td>
                  <td className="py-4 px-6">${product.price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-center">
                    <button
                      className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
                      aria-label="Edit"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        console.log("Delete product");
                        deleteProduct(product.id);
                      }}
                      className="ml-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
                      aria-label="Delete"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link
            to="/admin/products/add"
            className="block mt-4 text-blue-600"
          >
            Add Product
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
