import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default {
  getType: (endpoint, type) => api.get(`${endpoint}/${type}`),
  getItem: (endpoint, id) => api.get(`${endpoint}/${id}`),
  get: (urls) => {
    return axios.all([...urls.map((url) => axios.get(url))]);
  },
  getItems: (endpoint, page = 1) => {
    return api.get(endpoint, { params: { offset: (page - 1) * 9, limit: 9 } });
  },
};
