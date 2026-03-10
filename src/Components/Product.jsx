// Product.jsx
// Displays single product details

import { useLocation } from "react-router";

export default function Product() {

  // get data passed during navigation
  const location = useLocation();

  const product = location.state?.product;


  // if user opens page directly
  if (!product) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (

    <div className="flex justify-center mt-10">

      <div className="max-w-xl shadow-lg p-8">

        {/* Product Image */}
        <img
          src={product.image}
          className="h-60 mx-auto object-contain"
        />

        {/* Title */}
        <h2 className="text-xl font-bold mt-4">
          {product.title}
        </h2>

        {/* Price */}
        <p className="text-green-600 font-semibold mt-2">
          ${product.price}
        </p>

        {/* Description */}
        <p className="mt-3 text-gray-600">
          {product.description}
        </p>

      </div>

    </div>
  );
}