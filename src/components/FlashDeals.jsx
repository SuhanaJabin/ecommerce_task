import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import Carousel from "react-bootstrap/Carousel";

const FlashDeals = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  // Select 5 random products when the component mounts
  useEffect(() => {
    if (products.length > 0) {
      const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
      setSelectedProducts(shuffledProducts.slice(0, 5));
    }
  }, [products]);

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format the time left (hours, minutes, seconds)
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className=" w-200  bg-gradient-to-r from-[#0A141B] to-[#9CF6F6] p-8 rounded-lg shadow-2xl my-8" style={{padding:'1em'}}>
      <h2 className="text-3xl font-bold text-[#CEB5B7] mb-6 text-center" style={{fontWeight:'bold',marginTop: '1em'}}>
        Flash Deals
      </h2>

      <Carousel fade indicators={false} interval={5000}>
        {selectedProducts.map((product, index) => {
          const oldPrice = (product.price * 1.2).toFixed(2); // 20% increase in price
          return (
            <Carousel.Item key={index}>
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-[#B5D6D6] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" style={{padding:'1em'}}>
                <div className="flex items-center space-x-6">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <p className="text-xl font-semibold text-[#0A141B] truncate">
                      {product.title}
                    </p>
                    <p className="text-[#0A141B] mt-2">
                      <span className="line-through text-gray-500">
                        ${oldPrice}
                      </span>{" "}
                      <span className="text-red-600 font-bold text-2xl">
                        ${product.price}
                      </span>
                    </p>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="mt-4 bg-[#FF7477] text-white py-2 px-6 rounded-full hover:bg-[#FF5053] hover:scale-105 transition-all duration-200 text-sm font-semibold shadow-md"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 text-center sm:text-right">
                  <p className="text-sm text-[#0A141B] text-bold mb-2">
                    Hurry up! Offer ends in:
                  </p>
                  <div className="text-3xl font-bold text-[#0A141B] bg-[#FFE5B4] p-3 rounded-lg shadow-inner">
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
