import React from 'react';
import './Login.css';
import video from '/media/sda3/todo-list/src/assets/todo-list2.mp4';

const Login = () => {
  return (
    <div className="login-container">
     <main>
      <header>
        <h1>Login Luxe</h1>
      </header>
        <h2 className='h2'>Welcome Back!</h2>
        <p className='p'>Please enter your credentials to continue.</p>
        <video autoPlay muted loop id="background-video2">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Your email address" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
      </main>

    </div>
  );
};

export default Login;