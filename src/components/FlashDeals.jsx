import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Carousel from "react-bootstrap/Carousel";

const FlashDeals = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); 

  useEffect(() => {
    if (products.length > 0) {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      setSelectedProducts(shuffledProducts.slice(0, 5));
    }
  }, [products]);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

 
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#0A141B] to-[#9CF6F6] p-6 sm:p-8 rounded-lg shadow-2xl my-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#CEB5B7] mb-6 text-center">
        Flash Deals
      </h2>

      <Carousel fade indicators={false} interval={5000}>
        {selectedProducts.map((product, index) => {
          const oldPrice = (product.price * 1.2).toFixed(2); 
          return (
            <Carousel.Item key={index}>
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 sm:p-6 bg-[#B5D6D6] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 w-full sm:w-auto">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-24 h-24 sm:w-40 sm:h-40 object-cover rounded-lg shadow-md"
                  />
                  <div className="text-center sm:text-left mt-4 sm:mt-0">
                    <p className="text-lg sm:text-xl font-semibold text-[#0A141B] truncate">
                      {product.title}
                    </p>
                    <p className="text-[#0A141B] mt-2">
                      <span className="line-through text-gray-500">
                        ${oldPrice}
                      </span>{" "}
                      <span className="text-red-600 font-bold text-lg sm:text-2xl">
                        ${product.price}
                      </span>
                    </p>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="mt-4 bg-[#FF7477] text-white py-2 px-4 sm:px-6 rounded-full hover:bg-[#FF5053] hover:scale-105 transition-all duration-200 text-sm sm:text-base font-semibold shadow-md w-full sm:w-auto"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

               
                <div className="mt-6 sm:mt-0 text-center sm:text-right w-full sm:w-auto">
                  <p className="text-sm text-[#0A141B] font-bold mb-2">
                    Hurry up! Offer ends in:
                  </p>
                  <div className="text-xl sm:text-3xl font-bold text-[#0A141B] bg-[#FFE5B4] p-2 sm:p-3 rounded-lg shadow-inner">
                    {formatTime(timeLeft)}
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default FlashDeals;
