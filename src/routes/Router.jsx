// 📁 src/routes/Router.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import CarListPage from '../pages/CarListPage';
import CarDetailPage from '../pages/CarDetailPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage'; // ❗️회원가입 페이지도 추가

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/cars" element={<CarListPage />} />
    <Route path="/cars/:id" element={<CarDetailPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>
);

export default AppRoutes;
