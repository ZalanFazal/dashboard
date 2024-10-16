import axios from 'axios';

// Function to dynamically get the token (from localStorage or another source)
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Create a base Axios instance
const apiClient = axios.create({
  baseURL:  'https://fakestoreapi.com', // Replace with your API URL or environment variable
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Authorization token to every request
apiClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});



// Function to handle GET requests
const get = async (url, params = {}, config = {}) => {
  try {
    const response = await apiClient.get(url, {
      ...config,
      params,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle POST requests
const post = async (url, body = {}, config = {}) => {
  try {
    const response = await apiClient.post(url, body, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle PUT requests
const put = async (url, body = {}, config = {}) => {
  try {
    const response = await apiClient.put(url, body, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to handle DELETE requests
const del = async (url, config = {}) => {
  try {
    const response = await apiClient.delete(url, config);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Centralized error handling function
const handleError = (error) => {
  console.error('API call failed:', error);
  throw error;  // You can also add more advanced error handling, like notifications
};

// Export the functions for use in other files
export const apiService = {
  get,
  post,
  put,
  delete: del,
};
