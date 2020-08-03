import axios from 'axios';
import { BASE_URL } from '@config/enviroments';

const api = axios.create({
  baseURL: `${BASE_URL}api/v1/`,
  timeout: 20000,
});

export default api;
