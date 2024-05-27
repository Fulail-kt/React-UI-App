
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:2000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


// axios interceptor for passing token 
Api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );


export default Api;
