import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
  timeout: 5000
});

export default apiClient;
