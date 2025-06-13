// 📁 src/components/MobileFloatingMenu.jsx

import React from 'react';
import { FaPhoneAlt, FaClipboardList } from 'react-icons/fa';

const MobileFloatingMenu = () => {
    const scrollToEstimateForm = () => {
        const target = document.getElementById('estimate-form');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-3 left-0 w-full z-50 px-4">
            <div className="flex justify-between gap-2">
                {/* 전화상담 버튼 */}
                <a
                    href="tel:01048519989"
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-yellow-400 text-black font-semibold text-base rounded-xl shadow-md"
                >
                    <FaPhoneAlt className="text-lg" />
                    전화상담
                </a>

                {/* 견적신청 버튼 */}
                <button
                    onClick={scrollToEstimateForm}
                    className="flex-1 flex items-center justify-center gap-2 py-4 bg-blue-600 text-white font-semibold text-base rounded-xl shadow-md"
                >
                    <FaClipboardList className="text-lg" />
                    견적신청
                </button>
            </div>
        </div>
    );
};

export default MobileFloatingMenu;
