// 📁 src/components/PcHome.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCar, FaClipboardCheck, FaGlobe, FaMoneyBillWave } from 'react-icons/fa';
import EstimateComparePC from '../components/EstimateComparePC';
import ScrollToTopButton from '../components/ScrollToTopButton';
import CustomerReviewSliderPC from '../components/CustomerReviewSliderPC';
import EstimateAndStatus from '../components/EstimateAndStatus';

function PcHome({
                  formData,
                  setFormData,
                  handleChange,
                  handleSubmit,
                  inquiryList,
                  setShowModal
                }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const exportSteps = [
    { title: '견적 상담', desc: '주행거리, 차량 상태 파악', icon: <FaCar className="text-yellow-600 text-4xl mb-2 mx-auto" /> },
    { title: '차량 확인 및 계약', desc: '간단한 서류 작성 후 계약', icon: <FaClipboardCheck className="text-green-600 text-4xl mb-2 mx-auto" /> },
    { title: '대금 입금', desc: '계약 완료 후 신속한 입금', icon: <FaMoneyBillWave className="text-lime-600 text-4xl mb-2 mx-auto" /> },
    { title: '차량 말소 및 수출 준비', desc: '말소 등록 후 수출 준비 진행', icon: <FaGlobe className="text-blue-600 text-4xl mb-2 mx-auto" /> },
  ];

  const exportCards = [
    {
      image: '/images/everycar.webp',
      title: '오래된 차량도 OK',
      desc: '연식 무관, 상태만 좋으면 수출\n가능',
      color: 'text-blue-900'
    },
    {
      image: '/images/scrap.webp',
      title: '폐차 직전 차량도 OK',
      desc: '부품 수출도 인기도 높아요.',
      color: 'text-green-700'
    },
    {
      image: '/images/condition.webp',
      title: '고주행 · LPG · 사고차도 OK',
      desc: '국내 기피 차량도 해외에선\n인기!',
      color: 'text-gray-800'
    },
    {
      image: '/images/highprice.webp',
      title: '수출은 시세보다 높게',
      desc: '딜러 매입보다 평균 100만원↑',
      color: 'text-yellow-500'
    },
    {
      image: '/images/fast.webp',
      title: '빠른 절차, 빠른 입금',
      desc: '처음부터 끝까지 빠른처리,\n서류 걱정 없이 편하게!',
      color: 'text-orange-600'
    }
  ];

  return (
      <main className="pt-20 bg-white">
        <section id="export-info" className="scroll-mt-24 bg-[#f9f9f9] py-16" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-4">
              <span className="text-black">중고차</span> <span className="text-yellow-500">수출이란?</span>
            </h2>
            <p className="text-center text-sm md:text-base text-gray-700 mb-10">
              국내보다 좋은 조건으로 해외 바이어에게<br className="md:hidden" /> 판매하는 방법입니다.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {exportCards.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center text-center">
                    <img src={item.image} alt={item.title} className="h-36 object-contain mb-3" />
                    <h3 className={`text-sm font-bold ${item.color} mb-1`}>{item.title}</h3>
                    <p className="text-xs text-gray-600 whitespace-pre-line">{item.desc}</p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <EstimateComparePC />

        <section id="export-steps" className="scroll-mt-24 bg-white py-16 px-4" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-black">중고차</span>{' '}
            <span className="text-yellow-400">수출절차</span>
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {exportSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200">
                  <div className="text-semibold text-gray-500 mb-1">Step {idx + 1}</div>
                  {step.icon}
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
            ))}
          </div>
        </section>

        <EstimateAndStatus
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            inquiryList={inquiryList}
            handleSubmit={handleSubmit}
            setShowModal={setShowModal}
        />

        <CustomerReviewSliderPC />
        <ScrollToTopButton />
      </main>
  );
}

export default PcHome;
