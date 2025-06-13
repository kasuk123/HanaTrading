// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Spring Boot 주소

export const getCars = async () => {
  const response = await axios.get(`${API_BASE_URL}/cars`);
  return response.data;
};
