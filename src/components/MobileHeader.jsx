// 📁 src/components/MobileHeader.jsx

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileHeader() {
    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-2 h-[90px]">

            {/* ✅ 로고 + 브랜드명 수평 정렬 (여백 극소화) */}
            <div className="flex items-center gap-[2px]">
                <img
                    src="/images/logo.png"
                    alt="하나무역 로고"
                    className="h-14 object-contain"
                />

                <p className="text-[30px] font-bold tracking-[-0.5px]">
                    <span className="text-black">하나</span>
                    <span className="text-yellow-400">무역</span>
                </p>
            </div>

            {/* ✅ 전화 아이콘 */}
            <a
                href="tel:010-4851-9989"
                className="bg-yellow-400 rounded-full p-3 shadow-md"
            >
                <FaPhoneAlt className="text-black text-xl" />
            </a>
        </header>
    );
}
