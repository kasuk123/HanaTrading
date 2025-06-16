// 📁 src/axios.js

import axios from 'axios';

//  운영 서버 EC2의 Tailscale 고정 IP 주소 사용
axios.defaults.baseURL = 'https://api.hana-tradingcar.com';

// ✅JWT 토큰이 있을 경우 자동으로 Authorization 헤더에 추가
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axios;
