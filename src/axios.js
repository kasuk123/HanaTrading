// 📁 src/axios.js

import axios from 'axios';

// 운영용 EC2 백엔드 주소 (8080포트)
axios.defaults.baseURL = '/api'; //

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axios;
