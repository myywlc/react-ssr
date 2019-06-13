import axios from 'axios';
import config from '../config/index'

const instance = axios.create({
  baseURL: '/',
  params: {}
});

export default instance;
