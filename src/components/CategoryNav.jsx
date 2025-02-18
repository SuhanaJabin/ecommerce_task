import React from 'react';

const CategoryNav = ({ onCategoryChange }) => {
  const categories = ['All', 'Electronics', 'Fashion', 'Home', 'Toys'];

  const handleCategoryClick = (category) => {
    console.log('Category Selected:', category);
    onCategoryChange(category);
  };

  return (
    <nav className="mb-8">
      <ul className="flex space-x-4">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className="text-lg font-semibold hover:text-blue-500"
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
