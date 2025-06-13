import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ExportInfoSection() {
    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const items = [
        {
            icon: '🚗',
            title: '오래된 차량도 OK',
            desc: '연식 무관, 상태만 좋으면 수출 가능!',
            color: 'text-blue-900',
        },
        {
            icon: '♻️',
            title: '폐차 직전 차량도 OK',
            desc: '부품 수출도 인기도 높아요.',
            color: 'text-green-700',
        },
        {
            icon: '🔧',
            title: '고주행 · LPG · 사고차도 OK',
            desc: '국내 기피 차량도 해외에선 인기!',
            color: 'text-gray-800',
        },
        {
            icon: '💰',
            title: '수출은 시세보다 높게',
            desc: '딜러 매입보다 평균 100만원 이상!',
            color: 'text-yellow-500',
        },
        {
            icon: '⚡',
            title: '빠른 절차, 빠른 입금',
            desc: '처음부터 끝까지 빠른처리, 서류 걱정 없이 편하게!',
            color: 'text-orange-600',
        },
    ];

    return (
        <section className="bg-[#f8f8f8] py-10 px-2 sm:px-4">
            <div
                className="max-w-2xl mx-auto"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-duration="600"
            >
                {/* 타이틀 */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold flex items-center justify-center gap-1">
                        <span className="text-black">중고차</span>{" "}
                        <span className="text-yellow-500">수출이란?</span>
                    </h2>

                    <p className="text-sm text-[#444] mt-2 leading-snug font-medium">
                        국내보다 좋은 조건으로 해외 바이어에게<br />
                        판매하는 방법입니다.
                    </p>
                </div>

                {/* 항목 리스트 */}
                <div className="space-y-2">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg px-3 py-2 shadow-sm"
                        >
                            <div className="flex items-start gap-2">
                                <span className="text-base w-5 flex-shrink-0">{item.icon}</span>
                                <div className="w-full">
                                    <p className={`text-sm font-semibold ${item.color}`}>{item.title}</p>
                                    <p className="text-xs text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-2" />
        </section>
    );
}

export default ExportInfoSection;
