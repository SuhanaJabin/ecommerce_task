
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  
  return (
    <img
      className="d-block w-100"
      src={`https://via.placeholder.com/800x400.png?text=${text}`}  
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
