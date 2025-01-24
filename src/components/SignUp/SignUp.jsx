import React from 'react';
import video from '/src/assets/todo-list.mp4';

const SignUp = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await fetch('http://localhost:5001/api/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        window.location.href = '/login';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Error signing up user. Please try again.');
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-gray-50 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-80 blur-sm -z-1"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 max-w-xs sm:max-w-md w-full mx-2 overflow-y-scroll">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
          SignUp Luxe
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          Please enter your details to sign up.
        </p>
        <form className="space-y-3 sm:space-y-4" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
              className="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md text-sm sm:text-base focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-purple-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
          Already have an account?{' '}
          <a href="/login" className="text-purple-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
