import React, { useEffect, useState } from "react";

export default function EstimateCompareMobile() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 300);
    }, []);

    return (
        <section className="bg-white px-5 py-10 text-gray-800" data-aos="fade-up">
            {/* 타이틀 */}
            <h2 className="text-2xl font-bold mb-2 text-center">
                국내 시세 vs <span className="text-yellow-500">해외 수출 시세</span>
            </h2>

            {/* 부연 설명 - 연한 회색 + 여백 추가 */}
            <p className="text-sm text-gray-600 font-medium text-center leading-snug mb-8">
                똑같은 차량이라도 수출하면<br />
                더 높은 가격을 받을 수 있습니다.
            </p>

            {/* 그래프 */}
            <div className="space-y-8">
                {/* 국내 시세 */}
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">국내 시세</span>
                        <span className="text-sm font-semibold text-gray-700">300만원</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                        <div
                            className={`h-6 bg-gray-400 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: animate ? "60%" : "0%" }}
                        ></div>
                    </div>
                </div>

                {/* 해외 수출 시세 */}
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-yellow-500">해외 수출가</span>
                        <span className="text-sm font-semibold text-yellow-500">500만원</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                        <div
                            className={`h-6 bg-yellow-400 rounded-full transition-all duration-1000 ease-out animate-pulse`}
                            style={{ width: animate ? "100%" : "0%" }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* 하단 부연 설명 */}
            <div className="mt-10 text-center leading-relaxed">
                <p className="text-sm text-gray-600">
                    <span className="text-yellow-500 font-semibold">200만원 차이</span>를 경험하세요.<br />
                    같은 차, 더 좋은 가격!
                </p>
            </div>
        </section>
    );
}
