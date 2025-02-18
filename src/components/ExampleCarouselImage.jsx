// src/components/ExampleCarouselImage.jsx
import React from 'react';

const ExampleCarouselImage = ({ text }) => {
  // You can replace the following `src` with actual image paths or props
  return (
    <img
      className="d-block w-100"
      src={`https://via.placeholder.com/800x400.png?text=${text}`}  // Replace with your image URL
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
