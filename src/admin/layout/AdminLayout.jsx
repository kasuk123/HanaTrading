// 📁 src/admin/layout/AdminLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';
import '../../styles/AdminLayout.css';

function AdminLayout() {
    return (
        <div className="admin-layout">
            <AdminSidebar />
            <div className="admin-main">
                <AdminHeader />
                <main className="admin-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
