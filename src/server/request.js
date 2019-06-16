import axios from 'axios';

const createInstance = req => axios.create({
  baseURL: 'http://localhost:8080/ssr',
});

export default createInstance;
