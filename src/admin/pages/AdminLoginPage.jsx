// 📁 src/admin/pages/AdminLoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AdminLogin.css';

function AdminLoginPage() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: 나중에 JWT 연동
        console.log('로그인 시도:', formData);
        navigate('/admin/dashboard');
    };

    return (
        <div className="admin-login-full-bg"
             style={{
                 backgroundImage: "url('/images/honest-bg.png')",
                 backgroundSize: 'auto 95%',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
                 minHeight: '100vh',
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
                 padding: '20px'
             }}>
            <div className="admin-login-form-box">
                <h2>관리자 로그인</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="아이디" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="비밀번호" onChange={handleChange} required />
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLoginPage;
