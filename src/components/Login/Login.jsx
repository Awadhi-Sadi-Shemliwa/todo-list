import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from '/src/assets/todo-list.mp4';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        alert(data.message);
        navigate('/todolist');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-gray-50 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-70 blur-sm -z-1"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-xs sm:max-w-md">
        <h1 className="text-lg sm:text-3xl font-bold text-center text-gray-800 mb-3 sm:mb-4">Login Luxe</h1>
        <h2 className="text-sm sm:text-xl font-semibold text-gray-800 mb-2">Welcome Back!</h2>
        <p className="text-xs sm:text-gray-600 mb-3">Please enter your credentials to continue.</p>
        <form className="space-y-3 sm:space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm sm:text-base text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm sm:text-base hover:bg-purple-700 transition-colors"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-purple-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
