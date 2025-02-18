import React from 'react';
import { useSelector } from 'react-redux';
// import CartItem from '../components/CartItem';

const Checkout = () => {
  const { items } = useSelector((state) => state.cart); // assuming you have a cart slice

  const handleCheckout = () => {
    // Handle the checkout process, maybe integrate a payment API
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl">Checkout</h1>
      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <button onClick={handleCheckout} className="bg-[#FF7477] text-white p-2 rounded">
            Proceed to Payment
          </button>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Checkout;
