// 📁 src/components/MobileFooter.jsx

import React, { useState } from 'react';
import { FaBlogger, FaCommentDots } from 'react-icons/fa';
import PrivacyConsentModal from './PrivacyConsentModal';

const MobileFooter = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <footer className="bg-white text-gray-800 text-sm px-4 pt-6 pb-28 border-t border-black">
                <div className="max-w-screen-md mx-auto flex flex-col gap-4">

                    {/* 회사 정보 */}
                    <div className="text-xs text-center leading-relaxed text-gray-600">
                        <p>하나무역 | 대표: 강성범 | 사업자등록번호: 208-41-07916</p>
                        <p>주소: 인천광역시 남동구 선수촌공원로23번길 11, 701/6-6호</p>
                        <p>전화: 010-4851-9989 | FAX: 0504-213-0993 </p>
                        <p className="mt-1 text-gray-400">
                            &copy; 2025 HanaTrading. All rights reserved.
                        </p>
                    </div>

                    {/* 이용약관 + 아이콘 한 줄 정렬 */}
                    <div className="flex justify-center items-center gap-4 flex-wrap text-xs mt-0">
                        <button
                            className="underline underline-offset-4 text-gray-700"
                            onClick={() => setShowModal(true)}
                        >
                            이용약관
                        </button>
                        <button
                            className="underline underline-offset-4 text-gray-700"
                            onClick={() => setShowModal(true)}
                        >
                            개인정보처리방침
                        </button>

                        {/* ✅ 네이버 블로그 아이콘 링크 추가 */}
                        <a
                            href="https://blog.naver.com/hanatrading-"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="네이버 블로그"
                        >
                            <FaBlogger
                                className="text-xl"
                                style={{ color: '#03C75A' }}
                            />
                        </a>

                        {/* ✅ 카카오 아이콘 링크 */}
                        <a
                            href="http://pf.kakao.com/_nXMrn/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="카카오톡 문의"
                        >
                            <FaCommentDots
                                className="text-xl"
                                style={{ color: '#FEE500' }}
                            />
                        </a>
                    </div>
                </div>
            </footer>

            {/* 공통 모달 */}
            <PrivacyConsentModal show={showModal} onClose={() => setShowModal(false)} />
        </>
    );
};

export default MobileFooter;
