// ProductsList.jsx
// Displays list of products

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function ProductsList() {

  // state to store products
  const [products, setProducts] = useState([]);

  // loading state
  const [loading, setLoading] = useState(false);

  // error state
  const [error, setError] = useState(null);

  // search state
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // navigate to product page
  const gotoProduct = (productObj) => {

    // send product object while navigating
    navigate("/product", { state: { product: productObj } });
  };


  // fetch products when component loads
  useEffect(() => {

    async function getProducts() {

      try {

        setLoading(true);

        const res = await fetch("https://fakestoreapi.com/products");

        if (res.status === 200) {

          const productsData = await res.json();

          setProducts(productsData);

        } else {
          throw new Error("Failed to fetch products");
        }

      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    }

    getProducts();

  }, []);


  // show loading
  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  // show error
  if (error) {
    return <p className="text-center text-red-500">{error.message}</p>;
  }


  // filter products by search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div className="mt-10 px-6">

      {/* Search bar */}
      <div className="flex justify-center mb-6">

        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded-md w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((productObj) => (

          <div
            key={productObj.id}
            onClick={() => gotoProduct(productObj)}
            className="shadow-md p-6 cursor-pointer hover:shadow-xl transition"
          >

            {/* Product image */}
            <img
              src={productObj.image}
              className="h-44 object-contain mx-auto"
            />

            {/* Product title */}
            <p className="text-center mt-3 font-medium">
              {productObj.title}
            </p>

          </div>

        ))}

      </div>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <p className="text-center mt-6 text-gray-500">
          No products found
        </p>
      )}

    </div>
  );
}