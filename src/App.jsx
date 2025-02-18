import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Checkout from './pages/Checkout';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col w-full p-10 min-h-screen from-[#0A141B] to-[#9CF6F6]">
        <Header />
        <main className="flex-grow container mx-auto p-5 from-[#0A141B] to-[#9CF6F6]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/sign-in" element={<SignIn />} />
  <Route path="/sign-up" element={<SignUp />} />
  <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;