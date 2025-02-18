import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="flex justify-center items-center mx-auto w-99 h-78 sm:h-92 bg-[#B5D6D6]/20 rounded-lg">
      <div className="w-52 sm:w-78 p-10 bg-transparent shadow-md rounded-lg">
        <h1 className="text-center text-3xl mb-10">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col  space-y-6">
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
            className="p-2 border mb-5 border-gray-400 rounded w-full"
          />
          <div className='flex justify-center text-center'>
          <button type="submit" className="bg-[#FF7477] justify-center text-center text-white p-3 rounded w-48">
            Sign In
          </button>
          </div>
       
        </form>
      </div>
    </div>
  );
};

export default SignIn;
