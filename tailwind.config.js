/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ 모든 컴포넌트에서 Tailwind 사용 가능
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'], // ✅ 한글 폰트 기본화
      },
      colors: {
        // ✅ 자주 쓰는 포인트 컬러 등록
        primaryBrown: '#7a5312',
        pointGold: '#c3883c',
        pointDark: '#a06b2c',
        // 기본 강조 색
        red500: '#ef4444', // Tailwind 기본 red-500
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeInUp: 'fadeInUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
