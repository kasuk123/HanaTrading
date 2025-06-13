import React from 'react';

function HonestBanner() {
  return (
    <section
      className="w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/honest-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-10">
        {/* 오른쪽 텍스트 */}
        <div className="flex-1 text-center md:text-right text-[#3e2d1a]">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-snug drop-shadow-md">
            20년 외길, <span className="text-[#c3883c]">정직한 중고차 수출</span>의 길만 걸어왔습니다.
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium drop-shadow-md">
            🚗 진심으로 상담하고, 정직하게 매입하며, 투명하게 수출합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HonestBanner;
