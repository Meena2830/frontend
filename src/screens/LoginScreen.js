import React, { useState } from 'react';
import { login } from '../api';  // Importing the login function
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginScreen.css'; 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // Added error state
  const [successMessage, setSuccessMessage] = useState('');  // Added success message state
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = { email, password };
      await login(userData);  // Calling the login function
      setSuccessMessage('Login successful! Redirecting...');  // Set success message
      setTimeout(() => {
        navigate('/projects'); // Redirect to the Project page
      }, 2000);
    } catch (error) {
      // Handle login error (e.g., show an error message)
      console.error('Login error:', error);
      setError('Login failed. Please check your credentials and try again.');  // Display error message
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
