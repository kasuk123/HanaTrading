import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const getStatusLabel = (status) => {
    if (!status) return { label: "상담대기", color: "text-blue-500" };
    switch (status.trim()) {
        case "상담대기": return { label: "상담대기", color: "text-blue-500" };
        case "상담중": return { label: "상담중", color: "text-green-600" };
        case "매입완료": return { label: "매입완료", color: "text-red-500" };
        default: return { label: "상담대기", color: "text-blue-500" };
    }
};

const LiveConsultStatusMobile = () => {
    const [consultList, setConsultList] = useState([]);

    useEffect(() => {
        AOS.init({ duration: 700, once: true });

        axios.get('/api/quotes/latest')
            .then(res => {
                // ✅ 배열이 아닐 경우 대비
                const list = Array.isArray(res.data) ? res.data : (res.data.quotes || []);
                setConsultList(list);
            })
            .catch(err => console.error('❌ 상담현황 불러오기 실패', err));
    }, []);

    return (
        <section className="bg-[#f9f9f9] px-4 pt-6 pb-10">
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-sm p-4">
                {/* 제목 */}
                <div data-aos="fade-up" className="text-center mb-3">
                    <p className="text-sm text-gray-600 mb-1">🚗 24시 고객님들의 상담현황!</p>
                    <h2 className="text-3xl font-bold text-black">
                        하나무역 <span className="text-yellow-500">상담현황</span>
                    </h2>
                </div>

                {/* 리스트 */}
                <div className="border border-gray-300 rounded-lg overflow-hidden h-[250px]">
                    <div className="scroll-slide flex flex-col gap-2 py-2 px-2">
                        {(Array.isArray(consultList) ? consultList : []).map((item, i) => {
                            const { label, color } = getStatusLabel(item.status);
                            return (
                                <div
                                    key={item.carName + i}
                                    className="flex justify-between items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50 shadow-sm"
                                >
                                    <p className="font-bold text-sm text-black-500">
                                        {item.carName} 문의합니다
                                    </p>
                                    <span className={`font-bold text-sm ${color}`}>{label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 애니메이션 */}
                <style jsx="true">{`
                    @keyframes scroll-slide {
                        0% { transform: translateY(0); }
                        100% { transform: translateY(-50%); }
                    }

                    .scroll-slide {
                        animation: scroll-slide 15s linear infinite;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default LiveConsultStatusMobile;
