import React from 'react';
import './SignUp.css';
import video from '/media/sda3/todo-list/src/assets/todo-list.mp4';

const SignUp = () => {
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
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default SignUp;