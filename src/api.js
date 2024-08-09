import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Register function using the Axios instance
export const register = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw error;
  }
};

// Login function using the Axios instance
export const login = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    console.log('Login Successful:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
      const response = await api.post('/projects', projectData); // Ensure this matches the backend route
      return response.data;
  } catch (error) {
      console.error('Error creating project:', error.message);
      throw error;
  }
};

export const getProjects = async (token) => {
  try {
    const response = await api.get('/projects', { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error.message);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
      const response = await api.post('/tasks', taskData); // Ensure this path matches your backend
      return response.data;
  } catch (error) {
      console.error('Error creating task:', error.message);
      throw error;
  }
};

export const getTasks = async (token) => {
  try {
    const response = await api.get('/tasks', { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    throw error;
  }
};
