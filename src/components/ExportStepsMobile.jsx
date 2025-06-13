// 📁 src/components/ExportStepsMobile.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    FaComments,
    FaClipboardCheck,
    FaGlobeAsia,
    FaMoneyBillWave,
} from 'react-icons/fa';

const steps = [
    {
        step: 'Step 1',
        title: '견적 상담',
        description: '주행거리, 차량 상태 파악',
        icon: <FaComments className="text-yellow-600 text-2xl" />,
    },
    {
        step: 'Step 2',
        title: '차량 확인 및 계약',
        description: '간단한 서류 작성 후 계약',
        icon: <FaClipboardCheck className="text-green-600 text-2xl" />,
    },
    {
        step: 'Step 3',
        title: '대금 입금',
        description: '계약 완료 후 신속한 입금',
        icon: <FaMoneyBillWave className="text-green-600 text-2xl" />,
    },
    {
        step: 'Step 4',
        title: '차량 말소 및 수출 준비',
        description: '말소 등록 후 수출 준비 진행',
        icon: <FaGlobeAsia className="text-blue-600 text-2xl" />,
    },
];

const ExportStepsMobile = () => {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    return (
        <section className="px-4 py-6 bg-[#f9f9f9]">
            {/* 타이틀 */}
            <h2 className="text-3xl font-bold text-center mb-6">
                <span className="text-gray-800">중고차 </span>
                <span className="text-yellow-500">수출 절차</span>
            </h2>

            {/* 단계 카드 */}
            <div className="flex flex-col gap-4">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        className="border rounded-xl px-4 py-3 flex flex-col items-center text-center shadow-sm bg-white"
                    >
                        <div className="mb-1">{item.icon}</div>
                        <div className="text-sm text-gray-500">{item.step}</div>
                        <div className="text-base font-semibold text-gray-800">{item.title}</div>
                        <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExportStepsMobile;
