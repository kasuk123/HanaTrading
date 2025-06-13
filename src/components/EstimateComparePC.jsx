// 📁 src/components/EstimateComparePC.jsx
import React, { useEffect, useState } from "react";

export default function EstimateComparePC() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimate(true), 300);
    }, []);

    return (
        <section className="bg-white py-16 px-6 text-gray-800" data-aos="fade-up">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-2">
                    국내 시세 vs <span className="text-yellow-500">해외 수출 시세</span>
                </h2>
                <p className="text-base text-gray-600 font-medium leading-snug mb-12">
                    똑같은 차량이라도 수출하면 더 높은 가격을 받을 수 있습니다.
                </p>

                <div className="space-y-10 text-left">
                    <div>
                        <div className="flex justify-between mb-2 text-sm font-medium">
                            <span>국내 시세</span>
                            <span className="text-gray-700 font-semibold">300만원</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                            <div
                                className="h-6 bg-gray-400 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: animate ? "60%" : "0%" }}
                            ></div>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between mb-2 text-sm font-medium text-yellow-500">
                            <span>해외 수출가</span>
                            <span className="font-semibold">500만원</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                            <div
                                className="h-6 bg-yellow-400 rounded-full transition-all duration-1000 ease-out animate-pulse"
                                style={{ width: animate ? "100%" : "0%" }}
                            ></div>
                        </div>
                    </div>
                </div>

                <p className="mt-12 text-base text-gray-600 leading-relaxed">
                    <span className="text-yellow-500 font-semibold">200만원 차이</span>를 경험하세요. <br />
                    같은 차, 더 좋은 가격!
                </p>
            </div>
        </section>
    );
}
