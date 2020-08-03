import axios from 'axios';
import { BASE_URL } from '@config/enviroments';

const api = axios.create({
  baseURL: `${BASE_URL}api/v1/`,
  timeout: 90000, // só para o heroku quando servidor está desligado
});

export default api;
