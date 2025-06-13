import React, { useState } from 'react';
import MobileHeader from '../components/MobileHeader';
import MobileBottomSheet from '../components/MobileBottomSheet';
import MobileFloatingMenu from '../components/MobileFloatingMenu';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

function MobileLoginPage() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false
    });

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/auth/login', formData);
            alert(`${res.data.name}님 환영합니다!`);
            localStorage.setItem('token', res.data.token);
            navigate('/');
        } catch (err) {
            alert('로그인 실패: 아이디나 비밀번호를 확인해주세요.');
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/login-banner-export.png')" }}
        >
            {/* ✅ 헤더 & 바텀시트 */}
            <MobileHeader toggleSidebar={toggleSidebar} />
            {isSidebarOpen && (
                <MobileBottomSheet isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            )}

            {/* ✅ 로그인 박스 */}
            <div className="flex items-center justify-center h-[calc(100vh-64px)] px-4">
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl w-full max-w-sm shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-6">로그인</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            name="username"
                            placeholder="아이디"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 rounded border border-gray-300"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 mb-4 rounded border border-gray-300"
                            required
                        />
                        <div className="flex items-center justify-between mb-4 text-sm">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="accent-yellow-400"
                                />
                                <span>아이디 저장</span>
                            </label>
                            <button
                                type="button"
                                onClick={() => navigate('/signup')}
                                className="text-yellow-600 font-semibold"
                            >
                                회원가입
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
                        >
                            로그인
                        </button>
                    </form>
                </div>
            </div>

            {/* ✅ 하단 바텀 메뉴 */}
            <MobileFloatingMenu />
        </div>
    );
}

export default MobileLoginPage;
