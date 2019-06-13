import axios from 'axios';
import config from '../config/index'

const createInstance = (req) => axios.create({
  baseURL: 'http://http://localhost:8080/ssr/api',
  headers: {
    cookie: req.get('cookie') || ''
  },
  params: {}
});

export default createInstance;
