// 📁 src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/users/login', {
        username: formData.username,
        password: formData.password
      });

      // ✅ 사용자 전체 정보 localStorage에 저장
      localStorage.setItem('token', response.data.token); // 혹시 다른 곳에서 쓰는 경우 대비
      localStorage.setItem('user', JSON.stringify({
        token: response.data.token,
        username: response.data.username,
        name: response.data.name  // 👈 name 추가
      }));

      alert('로그인 성공!');
      navigate('/'); // 메인페이지로 이동

    } catch (error) {
      const msg = error.response?.data?.error || '로그인 실패. 다시 확인해주세요.';
      alert(msg);
    }
  };

  return (
      <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/login-banner-export.png')" }}
      >
        <div className="bg-transparent backdrop-blur-sm p-10 rounded-2xl w-[90%] max-w-md shadow-md border border-white">
          <h2 className="text-2xl font-bold text-center mb-6 text-white drop-shadow">로그인</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="username"
                placeholder="아이디"
                value={formData.username}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 w-full"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 w-full"
                required
            />
            <label className="flex items-center gap-2 text-sm text-white drop-shadow">
              <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
              />
              아이디 저장
            </label>
            <button
                type="submit"
                className="bg-[#fdd835] text-[#5a3e2b] font-bold py-2 rounded hover:bg-yellow-400 transition"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
  );
}

export default LoginPage;
