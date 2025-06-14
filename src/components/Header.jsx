// 📁 src/components/Header.jsx

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section && location.pathname === '/') {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 300); // 페이지 이동 후 약간의 딜레이
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.location.reload(); // ✅ 현재가 /면 리로드
    } else {
      navigate('/'); // ✅ 다른 경로면 홈으로 이동
    }
  };

  return (
      <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-6 py-2 transform translate-x-1.5">
          {/* ✅ 로고 + 하나무역 */}
          <button onClick={handleLogoClick} className="flex items-center gap-2 focus:outline-none">
            <img src="/images/logo.webp" alt="하나무역 로고" className="w-9 h-9 object-contain" />
            <span className="text-xl font-bold">
            <span className="text-black">하나</span>
            <span className="text-[#fdd835]">무역</span>
          </span>
          </button>

          {/* ✅ 메뉴 */}
          <nav className="hidden md:flex space-x-14 text-black font-medium text-lg">
            <button onClick={() => scrollToSection('export-info')}>중고차수출이란?</button>
            <button onClick={() => scrollToSection('export-steps')}>수출절차</button>
            <button onClick={() => scrollToSection('customer-reviews')}>고객후기</button>
          </nav>

          {/* ✅ 전화번호 */}
          <div className="flex items-center gap-4 text-base font-semibold px-3 py-2 rounded-lg text-black">
            <span role="img" aria-label="phone">📞 010-4851-9989</span>
          </div>
        </div>
      </header>
  );
}

export default Header;
