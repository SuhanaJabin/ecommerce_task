import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Handle Sign Up logic here
    } else {
      // Show error if passwords don't match
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto w-99 h-120 sm:h-125 bg-[#B5D6D6]/20 rounded-lg">
      <div className="w-52 sm:w-78  bg-transparent shadow-md rounded-lg">
        <h1 className="text-center text-3xl ">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 mb-3 border border-gray-400 rounded w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 mb-3 border border-gray-400 rounded w-full"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="p-2 mb-2 border border-gray-400 rounded w-full"
          />
          <div className="flex justify-center text-center">
            <button type="submit" className="bg-[#FF7477] text-white p-3 rounded w-48">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? 
          <button 
            onClick={() => navigate('/sign-in')} 
            className="text-[#FF7477] hover:underline"
          >
              Sign in!
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
