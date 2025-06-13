// 📁 src/components/Footer.jsx

import React, { useState } from 'react';
import { FaBlogger, FaCommentDots } from 'react-icons/fa';
import PrivacyConsentModal from './PrivacyConsentModal';

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
      <>
        {/* 구분선 */}
        <div className="border-t border-gray-300" />

        <footer className="bg-white text-gray-800 text-sm py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

            {/* 왼쪽: 회사 정보 */}
            <div className="text-xs leading-relaxed text-gray-600">
              <p>하나무역 | 대표: 강성범 | 사업자등록번호: 208-41-07916</p>
              <p>주소: 인천광역시 남동구 선수촌공원로23번길 11, 701/6-6호</p>
              <p>전화: 010-4851-9989 | FAX: 0504-213-0993</p>
              <p className="mt-1 text-gray-400">&copy; 2025 HanaTrading. All rights reserved.</p>
            </div>

            {/* 오른쪽: 아이콘 + 링크 (위치만 바꿈) */}
            <div className="flex flex-col items-end gap-3">
              {/* ✅ 아이콘 위로 이동 */}
              <div className="flex gap-3">
                <a
                    href="https://blog.naver.com/hanatrading-"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="네이버 블로그"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-green-100 flex items-center justify-center"
                >
                  <FaBlogger className="text-green-600 text-xl" />
                </a>
                <a
                    href="http://pf.kakao.com/_nXMrn/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="카카오톡 문의"
                    className="w-9 h-9 rounded-full bg-gray-100 hover:bg-yellow-100 flex items-center justify-center"
                >
                  <FaCommentDots className="text-yellow-500 text-xl" />
                </a>
              </div>

              {/* ✅ 약관 버튼 아래로 */}
              <div className="flex gap-4 text-xs mt-1">
                <button
                    onClick={() => setShowModal(true)}
                    className="hover:underline text-gray-700"
                >
                  이용약관
                </button>
                <button
                    onClick={() => setShowModal(true)}
                    className="hover:underline text-red-500 font-semibold"
                >
                  개인정보처리방침
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* ✅ 공통 약관 모달 */}
        <PrivacyConsentModal show={showModal} onClose={() => setShowModal(false)} />
      </>
  );
}

export default Footer;
