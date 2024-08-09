import React, { createContext, useState } from 'react';
import { register } from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleRegister = async (userData) => {
    try {
      const registeredUser = await register(userData);
      setUser(registeredUser); // Store the registered user in the context
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};
