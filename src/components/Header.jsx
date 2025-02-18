import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <header className="bg-[#0A141B] text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          className="text-[#CEB5B7] no-underline font-bold"
          style={{ fontSize: "28px" }}
        >
          QuickCart
        </button>
      
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#B5D6D6] text-3xl"
          >
            &#9776;
          </button>
        </div>

        <div className="hidden lg:flex gap-6">
          <button
            onClick={() => navigate('/')}
            className="text-[#B5D6D6] no-underline hover:text-[#FF7477] transition duration-300"
            style={{ fontSize: "20px" }}
          >
            Home
          </button>
          <button
            onClick={() => navigate('/cart')}
            className="text-[#B5D6D6] no-underline hover:text-[#FF7477] transition duration-300"
            style={{ fontSize: "20px" }}
          >
            Cart
          </button>
          <button
            onClick={() => navigate('/sign-up')}
            className="text-[#B5D6D6] no-underline hover:text-[#FF7477] transition duration-300"
            style={{ fontSize: "20px" }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0A141B] text-white p-4 mt-4">
          <button
            onClick={() => navigate('/')}
            className="block text-[#B5D6D6] no-underline hover:text-[#FF7477] py-2 text-lg"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/cart')}
            className="block text-[#B5D6D6] no-underline hover:text-[#FF7477] py-2 text-lg"
          >
            Cart
          </button>
          <button
            onClick={() => navigate('/sign-up')}
            className="block text-[#B5D6D6] no-underline hover:text-[#FF7477] py-2 text-lg"
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
