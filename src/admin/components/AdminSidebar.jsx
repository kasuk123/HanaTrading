// 📁 src/admin/components/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/AdminLayout.css';

function AdminSidebar() {
    const menuItems = [
        { name: '대시보드', path: '/admin/dashboard', icon: '📊' },
        { name: '회원관리', path: '/admin/user', icon: '👨🏻‍💼' },
        { name: '견적/상담 현황', path: '/admin/quotes', icon: '📝' },
        { name: '추천인코드 발급', path: '/admin/referrals', icon: '🔗' },
        { name: '포인트 지급', path: '/admin/points', icon: '💰' },
    ];

    return (
        <aside className="admin-sidebar">
            <h2 className="sidebar-title">하나무역</h2>
            <nav className="sidebar-menu">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? 'menu-item active' : 'menu-item'
                        }
                    >
                        <span className="icon">{item.icon}</span>
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}

export default AdminSidebar;