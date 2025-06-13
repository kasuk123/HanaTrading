import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referral: '',
    agreeTerms: false,
    agreePrivacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.agreeTerms || !form.agreePrivacy) {
      alert('필수 약관에 모두 동의해주세요.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const requestData = {
        username: form.username,
        name: form.name,
        phone: form.phone,
        password: form.password,
        referralCode: form.referral || null,
      };

      const response = await axios.post('/api/users/register', requestData);
      alert(response.data.message || '회원가입 완료!');
      navigate('/login');
    } catch (error) {
      const msg = error.response?.data?.error || '회원가입 실패';
      alert(msg);
    }
  };

  return (
      <div
          className="min-h-screen bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/images/login-banner-export.png')" }}
      >
        <div className="bg-transparent backdrop-blur-sm p-6 rounded-2xl w-[90%] max-w-sm shadow-md border border-white">
          <h2 className="text-xl font-bold text-center mb-4 text-white drop-shadow">회원가입</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="text"
                name="username"
                placeholder="아이디 (영문/숫자 조합)"
                value={form.username}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 text-sm"
                required
            />
            <input
                type="text"
                name="name"
                placeholder="이름"
                value={form.name}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 text-sm"
                required
            />
            <input
                type="tel"
                name="phone"
                placeholder="휴대폰 번호"
                value={form.phone}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 text-sm"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={form.password}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 text-sm"
                required
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호 확인"
                value={form.confirmPassword}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 text-sm"
                required
            />
            <input
                type="text"
                name="referral"
                placeholder="추천인 코드 (선택)"
                value={form.referral}
                onChange={handleChange}
                className="bg-white bg-opacity-70 border border-gray-300 rounded px-4 py-2 text-sm"
            />
            <label className="flex items-center gap-2 text-sm text-white drop-shadow">
              <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={form.agreeTerms}
                  onChange={handleChange}
              />
              이용약관에 동의합니다. (필수)
            </label>
            <label className="flex items-center gap-2 text-sm text-white drop-shadow">
              <input
                  type="checkbox"
                  name="agreePrivacy"
                  checked={form.agreePrivacy}
                  onChange={handleChange}
              />
              개인정보 수집 및 이용에 동의합니다. (필수)
            </label>
            <button
                type="submit"
                className="bg-[#fdd835] text-[#5a3e2b] font-bold py-2 rounded hover:bg-yellow-400 transition"
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
  );
}

export default SignupPage;
