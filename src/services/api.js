import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aws.random.cat'
});

export default api;