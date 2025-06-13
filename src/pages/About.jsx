// 📁 src/pages/About.jsx
import React from 'react';

function About() {
    return (
        <div className="bg-[#fdf6ec] min-h-screen text-[#4b382a] p-6 md:p-12">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg px-10 py-12 space-y-10">

                {/* 상단 로고 */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#8B4513]">하나무역</h1>
                    <p className="text-sm text-gray-400 mt-1">Hanatrading Co., Ltd.</p>
                </div>

                {/* 대표 인사말 */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#a0522d] border-b pb-2 mb-4">대표 인사말</h2>
                    <p className="leading-relaxed text-lg whitespace-pre-line">
                        안녕하십니까, 하나무역 대표 <strong>강성범</strong>입니다.

                        저희 하나무역은 정직함과 신뢰를 바탕으로 고객 여러분의 소중한 차량을 세계 각지로 수출하고 있습니다.
                        다년간의 노하우를 바탕으로, 최적의 조건으로 차량을 평가하고,
                        투명한 절차로 매입부터 수출까지 전 과정을 책임집니다.

                        항상 고객의 입장에서 생각하며, 신뢰받는 파트너로서 함께하겠습니다.
                    </p>
                </section>

                {/* 회사 개요 */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#a0522d] border-b pb-2 mb-4">회사 개요</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-base leading-7">
                        <div>
                            <p><strong>회사명:</strong> 하나무역</p>
                            <p><strong>사업자등록번호:</strong> 208-41-07916</p>
                            <p><strong>업종:</strong> 중고차 수출 및 도소매업</p>
                            <p><strong>연락처:</strong> 010-4851-9989</p>
                        </div>
                        <div>
                            <p><strong>대표자:</strong> 강성범</p>
                            <p><strong>설립일:</strong> 2021년 08월 26일</p>
                            <p><strong>이메일:</strong> hanat9989@naver.com</p>
                            <p><strong>팩스:</strong> 0504-213-0993</p>
                        </div>
                    </div>
                </section>

                {/* 사업장 주소 */}
                <section>
                    <h2 className="text-2xl font-semibold text-[#a0522d] border-b pb-2 mb-4">사업장 주소</h2>
                    <p className="text-base">
                        인천광역시 남동구 선수촌공원로23번길 11,<br />
                        701/6-63 (구월동, 네이처프라자)
                    </p>
                </section>

                {/* 회사 이미지 */}
                <section className="text-center">
                    <img
                        src="/images/company-building.jpg"
                        alt="회사 외부 이미지"
                        className="rounded-lg shadow-md w-full max-w-md mx-auto mt-6"
                    />
                    <p className="text-sm text-gray-500 mt-2">※ 실제 사업장 사진</p>
                </section>
            </div>
        </div>
    );
}

export default About;
