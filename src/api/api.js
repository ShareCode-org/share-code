import axios from 'axios';

export default axios.create({
  baseURL: 'https://share-code-server.glitch.me/',
  headers: {
    Authorization: localStorage.getItem('token')
  }
});