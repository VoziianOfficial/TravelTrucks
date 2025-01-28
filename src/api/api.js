//src/api/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io',
});

export const fetchCampers = (params) => apiClient.get('/campers', { params });
export const fetchFavorites = (params) => apiClient.get('/favorites', { params });
export const fetchFilters = (params) => apiClient.get('/filters', { params });
