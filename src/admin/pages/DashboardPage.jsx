// 📁 src/admin/pages/DashboardPage.jsx
import React from 'react';
import '../../styles/AdminDashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DashboardPage() {
    const recentQuotes = [
        { id: 1, car: '아반떼 CN7', phone: '010-1234-5678', date: '2025-05-13' },
        { id: 2, car: '그랜저 IG', phone: '010-2222-3333', date: '2025-05-12' },
        { id: 3, car: '쏘렌토 MQ4', phone: '010-4444-5555', date: '2025-05-12' },
    ];

    const monthlyData = [
        { month: '1월', count: 12 },
        { month: '2월', count: 18 },
        { month: '3월', count: 32 },
        { month: '4월', count: 25 },
        { month: '5월', count: 40 }
    ];

    const yearlyData = [
        { year: '2021', count: 210 },
        { year: '2022', count: 340 },
        { year: '2023', count: 410 },
        { year: '2024', count: 520 }
    ];

    return (
        <div className="dashboard-wrapper">
            <h1 className="dashboard-title">📊 관리자 대시보드</h1>

            <div className="dashboard-cards">
                <div className="card stat-card blue">
                    <div className="card-icon">👤</div>
                    <div className="card-content">
                        <p>총 회원 수</p>
                        <h3>128명</h3>
                    </div>
                </div>
                <div className="card stat-card green">
                    <div className="card-icon">🚗</div>
                    <div className="card-content">
                        <p>총 견적 수</p>
                        <h3>254건</h3>
                    </div>
                </div>
                <div className="card stat-card orange">
                    <div className="card-icon">📅</div>
                    <div className="card-content">
                        <p>오늘 견적 수</p>
                        <h3>8건</h3>
                    </div>
                </div>
            </div>

            <div className="dashboard-recent">
                <h2>📝 최근 견적 3건</h2>
                <table className="recent-table">
                    <thead>
                    <tr>
                        <th>차량명</th>
                        <th>전화번호</th>
                        <th>신청일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recentQuotes.map((q) => (
                        <tr key={q.id}>
                            <td>{q.car}</td>
                            <td>{q.phone}</td>
                            <td>{q.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="dashboard-charts">
                <div className="chart-box">
                    <h3>월별 견적 수</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="chart-box">
                    <h3>연간 견적 수</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={yearlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
