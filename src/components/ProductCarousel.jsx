import React, { useState, useEffect } from 'react';

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="w-full">
              <img src={product.thumbnail} alt={product.title} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
