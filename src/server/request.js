import axios from 'axios';
import config from '../config/index'

const createInstance = (req) => axios.create({
  baseURL: 'http://localhost:8080/ssr',
  headers: {
    cookie: req.get('cookie') || ''
  },
  params: {}
});

export default createInstance;
