import axios from 'axios';

export default axios.create({
  baseURL: 'https://share-code-server.herokuapp.com/',
  headers: {
    Authorization: localStorage.getItem('token')
  }
});