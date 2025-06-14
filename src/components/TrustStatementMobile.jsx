// 📁 src/components/TrustStatementMobile.jsx

import React from 'react';
import { FaCommentDots, FaFileSignature, FaShip } from 'react-icons/fa';

const TrustStatementMobile = () => {
    return (
        <section
            className="w-full min-h-[420px] bg-cover bg-center px-6 py-10 text-white"
            style={{ backgroundImage: "url('/images/trust-banner.webp')" }}
        >
            {/* ✅ 텍스트만! */}
            <h2 className="text-xl font-semibold mb-4 leading-relaxed drop-shadow-md">
                하나무역은<br />
                20년 동안 외길만 걸어온<br />
                <span className="text-yellow-400 text-xl">중고차 수출 전문 기업</span>입니다.
            </h2>

            <div className="flex flex-col gap-2 text-base leading-relaxed drop-shadow-md">
                <div className="flex items-center gap-2">
                    <FaCommentDots className="text-yellow-400" />
                    <span>진심으로 상담하고,</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaFileSignature className="text-yellow-400" />
                    <span>정직하게 매입하며,</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaShip className="text-yellow-400" />
                    <span>투명하게 수출합니다.</span>
                </div>
            </div>
        </section>
    );
};

export default TrustStatementMobile;
