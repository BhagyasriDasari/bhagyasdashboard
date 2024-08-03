// src/utils/api.js
import axios from 'axios';

// Create an Axios instance with default configuration
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000, // Optional: Set a timeout (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Optional: Default Content-Type header
    'X-Custom-Header': 'foobar' // Optional: Custom header example
  }
});

// Add a request interceptor
api.interceptors.request.use(
  config => {
    // Do something before the request is sent
    console.log('Request made with ', config);
    return config;
  },
  error => {
    // Handle request error
    console.error('Error in request: ', error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  response => {
    // Do something with the response data
    console.log('Response received: ', response);
    return response;
  },
  error => {
    // Handle response error
    console.error('Error in response: ', error);
    return Promise.reject(error);
  }
);

export default api;
