import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#B5D6D6] shadow-md rounded-lg overflow-hidden w-44 sm:w-56 md:w-56 mx-auto transition-transform transform hover:scale-105 ">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-32 sm:h-40 md:h-40 object-cover"
      />
      <div className="p-3 flex flex-col justify-between">
        <p className="text-sm sm:text-base font-semibold mb-1 text-[#0A141B] truncate">
          {product.title}
        </p>
        <p className="text-[#0A141B] text-sm sm:text-base">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="mt-2 w-full bg-[#FF7477] text-white py-1 px-3 rounded-md hover:bg-[#FF7477] hover:opacity-80 transition-all duration-200 text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
