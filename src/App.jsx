// 📁 src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CarListPage from './pages/CarListPage';
import CarDetailPage from './pages/CarDetailPage';

import AdminLoginPage from './admin/pages/AdminLoginPage';
import DashboardPage from './admin/pages/DashboardPage';
import UserListPage from './admin/pages/UserListPage';
import EstimateListPage from './admin/pages/EstimateListPage';
import OrderListPage from './admin/pages/OrderListPage';
import ReferralPage from './admin/pages/ReferralPage';
import ConsultListPage from './admin/pages/ConsultListPage';
import AdminQuotePage from './admin/pages/AdminQuotePage';
import AdminLayout from './admin/layout/AdminLayout';

import PointShopPage from './pointshop/pages/PointShopPage';
import PointShopDetailPage from './pointshop/pages/PointShopDetailPage';

import MobileLoginPage from './pages/MobileLoginPage';
import MobileSignupPage from './pages/MobileSignupPage';

function AppWrapper({ isMobile }) {
    const location = useLocation();
    const isAdminPath = location.pathname.startsWith('/admin');

    // 모바일 전용 라우트
    const isMobileLogin = location.pathname === '/login' && isMobile;
    const isMobileSignup = location.pathname === '/signup' && isMobile;

    return (
        <>
            {/* ✅ PC에서만 Header 보여주기 */}
            {!isAdminPath && !isMobile && <Header />}

            <Routes>
                {/* 사용자용 페이지 */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={isMobile ? <MobileLoginPage /> : <LoginPage />} />
                <Route path="/signup" element={isMobile ? <MobileSignupPage /> : <SignupPage />} />
                <Route path="/cars" element={<CarListPage />} />
                <Route path="/cars/:id" element={<CarDetailPage />} />

                {/* 포인트샵 페이지 */}
                <Route path="/pointshop" element={<PointShopPage />} />
                <Route path="/pointshop/:id" element={<PointShopDetailPage />} />

                {/* 관리자 로그인 */}
                <Route path="/admin/login" element={<AdminLoginPage />} />

                {/* 관리자 내부 페이지 (AdminLayout 내부에서 Header/Sidebar 구성됨) */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="user" element={<UserListPage />} />
                    <Route path="estimates" element={<EstimateListPage />} />
                    <Route path="orders" element={<OrderListPage />} />
                    <Route path="referrals" element={<ReferralPage />} />
                    <Route path="consults" element={<ConsultListPage />} />
                    <Route path="quotes" element={<AdminQuotePage />} />
                </Route>
            </Routes>

            {/* ✅ PC에서만 Footer 렌더링 */}
            {!isAdminPath && !isMobile && <Footer />}
        </>
    );
}

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <AppWrapper isMobile={isMobile} />
        </Router>
    );
}

export default App;
