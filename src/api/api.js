import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_URL || 'localhost:3001/',
  headers: {
    Authorization: localStorage.getItem('token')
  }
});