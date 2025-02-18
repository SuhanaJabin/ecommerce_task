import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('passwords match');
    } else {
      console.log('passwords do not match');
    }
  };

  return (
    <div className="signup-container flex mx-auto rounded-lg">
      <div className="signup-card">
        <h1 className="signup-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="signup-input"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="signup-input"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="signup-input"
          />
          <div className="flex justify-center text-center">
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </div>
        </form>
        <p className="signup-text">
          Already have an account? 
          <button 
            onClick={() => navigate('/sign-in')} 
            className="signup-link"
          >
            Sign in!
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
