// 📁 src/components/RecommendPopup.jsx
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5'; // ⬅️ 닫기 아이콘

function RecommendPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('hideRecommendPopup');
    if (!stored || new Date(stored) <= new Date()) {
      setIsVisible(true);
    }
  }, []);

  const hideTodayPopup = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    localStorage.setItem('hideRecommendPopup', tomorrow.toISOString());
    setIsVisible(false);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
        {/* ✨ 여기! 애니메이션 클래스 적용 */}
        <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-7 text-center animate-fadeInUp border border-yellow-300">

          {/* ❌ 닫기 버튼 (작게) */}
          <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <IoClose size={16} />
            </div>
          </button>

          {/* 제목 */}
          <h2 className="text-xl font-extrabold text-[#7a5312] mb-3">
            🎁 지금 <span className="text-[#c3883c]">내 차 팔면 최대 100,000P</span>!
          </h2>

          {/* 설명 */}
          <p className="text-sm text-gray-800 leading-relaxed">
          <span className="font-semibold text-[#a06b2c]">
            지인 추천 시 최대 100,000P 추가 지급!
          </span><br />
            차량 수출 완료 시 포인트가 즉시 지급되며<br />
            포인트는 <strong>자사 포인트샵에서 상품권 구매</strong>에 사용됩니다.<br />
            <span className="text-xs text-gray-500 block mt-2">
            현금 전환은 불가하지만 <strong className="text-[#c3883c]">법적으로 안전하게 운영</strong> 중이에요 🙆‍♂️
          </span>
          </p>

          {/* 왼쪽 아래 ‘오늘 하루 보지 않기’ */}
          <div className="mt-6 flex justify-start">
            <button
                onClick={hideTodayPopup}
                className="text-xs text-gray-500 hover:text-gray-800 underline"
            >
              오늘 하루 보지 않기
            </button>
          </div>
        </div>
      </div>
  );
}

export default RecommendPopup;
