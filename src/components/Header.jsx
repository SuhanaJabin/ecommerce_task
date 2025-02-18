import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#0A141B] text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => navigate('/')} 
          className="text-[#CEB5B7] no-underline font-bold"
          style={{ fontSize: "28px" }} // Increased font size
        >
          QuickCart
        </button>
        <div className="flex gap-6">
          <button 
            onClick={() => navigate('/')} 
            className="text-[#B5D6D6] no-underline hover:text-[#FF7477] transition duration-300"
            style={{ fontSize: "20px" }} // Increased font size
          >
            Home
          </button>
          <button 
            onClick={() => navigate('/cart')} 
            className="text-[#B5D6D6] no-underline hover:text-[#FF7477] transition duration-300"
            style={{ fontSize: "20px" }} // Increased font size
          >
            Cart
          </button>
          <button 
            onClick={() => navigate('/sign-up')} 
            className="text-[#B5D6D6] no-underline hover:text-[#FF7477] transition duration-300"
            style={{ fontSize: "20px" }} // Increased font size
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
