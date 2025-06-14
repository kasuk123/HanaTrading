// 📁 src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import PcHome from '../components/PcHome';
import MobileHome from '../components/MobileHome';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PrivacyConsentModal from '../components/PrivacyConsentModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Home() {
  const [formData, setFormData] = useState({
    carName: '',
    phone: '',
    year: '',
    fuel: '',
    region: '',
    agree: false,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [inquiryList, setInquiryList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    axios.get('/api/quotes/latest')
        .then(res => {
          const data = res.data;
          const list = Array.isArray(data) ? data : (data.quotes || []);
          setInquiryList(list);
        })
        .catch(err => {
          console.error('❌ 상담현황 불러오기 실패:', err);
          setInquiryList([]);
        });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집에 동의해주세요.');
      return;
    }

    try {
      await axios.post('/api/quotes/apply', {
        carName: formData.carName,
        year: formData.year,
        fuelType: formData.fuel,
        phone: formData.phone,
        region: formData.region,
        agree: formData.agree,
      });
      alert('상담 신청이 완료되었습니다!');
      setFormData({ carName: '', phone: '', year: '', fuel: '', region: '', agree: false });
    } catch (err) {
      alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
      <div className="bg-white">
        {!isMobile && <Header />}

        {isMobile ? (
            <MobileHome
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        ) : (
            <>
              {/* ✅ PC용 메인배너 */}
              <section className="relative w-full h-[120vh]">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                  {[
                    {
                      image: "/images/banner1_pc.webp",
                      title: <>내 차, <span className="text-yellow-300">해외에서도 인기</span> 있습니다.</>,
                      desc: <>고주행 · 오래된 차량도 수출 가능!<br />국내보다 더 좋은 조건 OK!<br />1분 투자로 예상 시세 확인 가능!</>
                    },
                  ].map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-no-repeat bg-center bg-cover flex items-center justify-start"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                          <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-center pl-[7%] text-white">
                            <h2 className="text-4xl font-bold leading-snug mb-2">{item.title}</h2>
                            <p className="text-base leading-relaxed font-light">{item.desc}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </section>

              {/* ✅ PC용 소개 문구 */}
              <section className="w-full py-12 px-6 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-extrabold leading-snug text-[#3e2d1a] mb-3">
                    20년 외길, <span className="text-[#c3883c]">정직한 중고차 수출</span>의 길만 걸어왔습니다.
                  </h2>
                  <p className="text-base text-gray-800">
                    🚗 진심으로 상담하고, 정직하게 매입하며, 투명하게 수출합니다.
                  </p>
                </div>
              </section>

              {/* ✅ PC용 본문 섹션 */}
              <PcHome
                  formData={formData}
                  setFormData={setFormData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  inquiryList={inquiryList}
                  setShowModal={setShowModal}
              />
            </>
        )}

        {/* ✅ 개인정보동의 모달 + PC용 푸터 1회만 출력 */}
        <PrivacyConsentModal show={showModal} onClose={() => setShowModal(false)} />
      </div>
  );
}

export default Home;
