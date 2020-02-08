import axios from 'axios';

import { apiURI } from '../constants';

const api = axios.create({
  baseURL: apiURI,
});

export default api;
