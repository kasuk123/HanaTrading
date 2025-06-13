// 📁 src/axios.js

import axios from 'axios';

// ✅ 현재 ngrok 백엔드 주소 (8080포트 터널링된 주소)
axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axios;
