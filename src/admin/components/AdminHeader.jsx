import React from 'react';
import '../../styles/AdminLayout.css'; // 스타일 적용 꼭 잊지 말고!

function AdminHeader() {
    return (
        <header className="admin-header">
            <div className="admin-welcome">👨🏻‍💼 강성범님, 환영합니다!</div>
            <button className="logout-btn">로그아웃</button>
        </header>
    );
}

export default AdminHeader;
