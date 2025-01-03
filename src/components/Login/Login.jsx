import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Login.css';
import video from '/src/assets/todo-list.mp4';

function Login() {
  const navigate = useNavigate(); // Initialize navigate

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
        // Store token in localStorage
        localStorage.setItem('token', data.token); 

        alert(data.message); // Show success message
        
        // Redirect to the openpage after successful login
        navigate('/todolist');  
      } else {
        alert(data.message); // Show error message for invalid credentials
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error logging in. Please try again.');
    }
  };

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
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Your email address" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </main>
    </div>
  );
}

export default Login;
