import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../features/cartSlice';
import '../index.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="container mx-auto cart-container">
      <h2 className="text-3xl font-bold mb-6 text-[#0A141B]">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-[#CEB5B7]">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-[#B5D6D6] shadow-lg rounded-lg p-4 flex items-center cart-item">
              <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-semibold text-[#0A141B]">{item.title}</h3>
                <p className="text-[#0A141B]">${item.price}</p>
                <p className="text-[#0A141B]">Quantity: {item.quantity}</p>
              </div>
              <div className="flex space-x-2 cart-item-actions">
                <button
                  onClick={() => dispatch(incrementQuantity(item))}
                  className="bg-[#FF7477] text-white py-1 px-3 rounded hover:bg-[#FF7477] hover:opacity-80"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decrementQuantity(item))}
                  className="bg-[#0A141B] text-white py-1 px-3 rounded hover:bg-[#9CF6F6] hover:opacity-80"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="bg-[#FF7477] text-white py-1 px-3 rounded hover:bg-[#FF7477] hover:opacity-80"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
