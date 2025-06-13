// 📁 src/components/MobileBottomSheet.jsx

import React from 'react';
import {
    FaTimes,
    FaCarSide,
    FaExchangeAlt,
    FaInfoCircle,
    FaCommentDots,
} from 'react-icons/fa';

function MobileBottomSheet({ isOpen, toggleSidebar }) {
    return (
        <div
            className={`
                fixed top-0 right-0 w-4/5 h-full bg-white z-50
                shadow-xl px-6 pt-[64px] pb-6 rounded-l-2xl
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            style={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
        >

            {/* ✅ 메뉴 리스트 */}
            <ul className="divide-y divide-gray-200 text-gray-800 text-[15px] font-light overflow-y-auto max-h-[calc(100vh-100px)]">
                <li className="py-3 flex items-center gap-3">
                    <FaCarSide className="text-yellow-400" />
                    <a href="#estimate">내 차는 얼마?</a>
                </li>
                <li className="py-3 flex items-center gap-3">
                    <FaInfoCircle className="text-yellow-400" />
                    <a href="#about-export">중고차 수출이란</a>
                </li>
                <li className="py-3 flex items-center gap-3">
                    <FaExchangeAlt className="text-yellow-400" />
                    <a href="#steps">수출 절차</a>
                </li>
                <li className="py-3 flex items-center gap-3">
                    <FaCommentDots className="text-yellow-400" />
                    <a href="#reviews">고객 후기</a>
                </li>
            </ul>
        </div>
    );
}

export default MobileBottomSheet;
