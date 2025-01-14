import useFetch from "../../hooks/useFetch";

const Products = () => {
  const { data, error, loading } = useFetch("public/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <img
                src={product.images[0]}
                alt={product.product_name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{product.product_name}</h2>
              <p className="text-gray-600 mt-1">Price: ${product.price}</p>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <div className="text-sm text-gray-500 mt-4">
                <p>Brand: {product.features.details.brand}</p>
                <p>Category: {product.features.details.category}</p>
                <p>Rating: {product.features.stats.rating} / 5</p>
                <p>
                  Sold: {product.features.stats.sold}{" "}
                  {product.features.stats.sold === 1 ? "unit" : "units"}
                </p>
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
