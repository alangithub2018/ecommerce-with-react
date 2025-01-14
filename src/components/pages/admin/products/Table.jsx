import useFetch from "../../hooks/useFetch";

const Table = () => {
  const { data, error, loading } = useFetch("public/products");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Products</h1>
      {data.length === 0 ? (
        <p>No products found</p>
      ) : (
        data.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;
