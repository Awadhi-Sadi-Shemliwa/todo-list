import React from 'react';
import './SignUp.css';
import video from '/src/assets/todo-list.mp4';

const SignUp = () => {
  const handleSignUp = async (event) => {
    event.preventDefault();
  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await fetch('http://localhost:5001/api/users/signup', { // Update this URL
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
    <div className="signup-page">
      <div className="signup-container">
      <video autoPlay muted loop id="background-video">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h1>SignUp Luxe</h1>
        <h2>Create Account</h2>
        <p>Please enter your details to sign up.</p>
        <form className="signup-form" onSubmit={handleSignUp}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Create a password" required />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;