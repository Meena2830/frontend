import React, { useState } from 'react';
import { register } from '../api';
import { useNavigate } from 'react-router-dom'; 
import './RegisterScreen.css';
 // Import useNavigate

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');  // New state for success message

  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await register(formData);
      console.log('Registration Successful:', responseData);
      setSuccessMessage('Registration successful! Redirecting...');  // Set success message
      setTimeout(() => {
        navigate('/login');  // Redirect to login page after 2 seconds
      }, 2000);
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}  {/* Display success message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
