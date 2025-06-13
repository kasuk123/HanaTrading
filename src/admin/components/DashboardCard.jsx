// 📁 src/admin/components/DashboardCard.jsx

import React from 'react';

function DashboardCard({ title, value, icon }) {
    return (
        <div className="dashboard-card">
            <div className="dashboard-icon">{icon}</div>
            <div className="dashboard-info">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default DashboardCard;
