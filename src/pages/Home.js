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
              <section className="relative w-full overflow-hidden min-h-[720px]">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000 }}
                    pagination={{ clickable: true }}
                    className="w-full h-full"
                >
                  {[ /* ✅ 변경은 아래 이곳에만 있음 */ ]}
                  {[
                    {
                      image: "/images/banner1.webp",
                      title: <>내 차, <span className="text-yellow-300">해외에서도 인기</span> 있습니다.</>,
                      desc: <>고주행 · 오래된 차량도 수출 가능!<br />국내보다 더 좋은 조건 OK!<br />1분 투자로 예상 시세 확인 가능!</>
                    },
                    {
                      image: "/images/banner2.webp",
                      title: <>시세보다 중요한 건 <span className="text-yellow-300">‘선택’</span>입니다.</>,
                      desc: <>믿고 맡길 수 있는 선택, 결과가 다릅니다.<br />수출은 경험이 만든 결과로 증명됩니다.</>
                    },
                    {
                      image: "/images/banner3.webp",
                      title: <>왜 <span className="text-yellow-300">‘하나무역’</span>이어야 할까요?</>,
                      desc: <>견적부터 수출까지 원스톱 진행!<br />24시간 접수 · 빠른 대응!<br />중고차 수출 20년 외길 노하우!</>
                    }
                  ].map((item, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex w-full min-h-[720px] m-0 p-0 bg-[#f3f3f3]"> {/* ✅ 여기 한 줄만 추가됨 */}
                          <div
                              className="flex-1 bg-left bg-no-repeat"
                              style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundPosition: 'left center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% auto'
                              }}
                          >
                            <div className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-start pl-[7%] text-white">
                              <h2 className="text-4xl font-bold leading-snug mb-2">{item.title}</h2>
                              <p className="text-base leading-relaxed text-white font-light">{item.desc}</p>
                            </div>
                          </div>

                          <div className="w-[520px] bg-[#f3f3f3] flex flex-col items-center justify-center gap-6 p-6">
                            <div className="w-full bg-white bg-opacity-95 text-gray-800 rounded-xl shadow-xl p-6">
                              <h3 className="text-2xl font-extrabold text-black mb-2 text-center">
                                내차 <span className="text-yellow-400">무료견적신청</span>
                              </h3>
                              <p className="text-center text-sm mb-4 text-gray-600 font-medium">전국 어디나 24시 상담가능!</p>
                              <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-sm">
                                <input type="text" name="carName" value={formData.carName} onChange={handleChange} placeholder="차량명 (예: 그랜저HG)" className="border border-gray-300 rounded-md px-3 py-2" required />
                                <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="연식 (예: 2012)" className="border border-gray-300 rounded-md px-3 py-2" required />
                                <select name="fuel" value={formData.fuel} onChange={handleChange} className="border border-gray-300 rounded-md px-3 py-2" required>
                                  <option value="">연료 선택</option>
                                  <option value="휘발유">휘발유</option>
                                  <option value="경유">경유</option>
                                  <option value="LPG">LPG</option>
                                  <option value="전기">전기</option>
                                </select>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="연락처 (예: 010-1234-5678)" className="border border-gray-300 rounded-md px-3 py-2" required />
                                <input type="text" name="region" value={formData.region} onChange={handleChange} placeholder="지역 (예: 서울 강남구)" className="border border-gray-300 rounded-md px-3 py-2" required />
                                <div className="flex items-center gap-2 text-xs">
                                  <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
                                  <label className="text-gray-600">
                                    [필수] 개인정보 수집 및 이용 동의
                                    <button type="button" onClick={() => setShowModal(true)} className="ml-2 text-blue-600 underline">보기</button>
                                  </label>
                                </div>
                                <button type="submit" className="mt-2 bg-[#fdd835] hover:bg-yellow-400 text-[#5a3e2b] font-bold py-2 rounded-lg transition">상담신청</button>
                              </form>
                            </div>

                            <div className="w-full bg-white rounded-xl shadow-xl p-5 text-sm">
                              <h2 className="text-2xl font-bold mb-4 text-center">
                                🚗 <span className="text-black">하나무역</span> <span className="text-yellow-400">상담현황</span>
                              </h2>
                              <div className="overflow-hidden h-[160px] relative">
                                <div className="animate-slide-text flex flex-col gap-2 absolute top-0 left-0 w-full">
                                  {inquiryList.map((item, index) => (
                                      <div key={index} className="flex items-center gap-2">
                                        <span className={`px-2 py-[2px] text-xs font-bold rounded-full text-white ${
                                            item.status === '상담대기' ? 'bg-yellow-500' :
                                                item.status === '상담중' ? 'bg-blue-500' :
                                                    item.status === '매입완료' ? 'bg-green-600' : 'bg-gray-400'
                                        }`}>
                                          {item.status}
                                        </span>
                                        <span className="text-gray-700">{item.carName} 문의합니다</span>
                                      </div>
                                  ))}
                                </div>
                              </div>
                              <style jsx>{`
                                @keyframes slideText {
                                  0% { transform: translateY(0); }
                                  100% { transform: translateY(-50%); }
                                }
                                .animate-slide-text {
                                  animation: slideText 12s linear infinite;
                                }
                              `}</style>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </section>

              <PcHome
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
              />
            </>
        )}

        <PrivacyConsentModal show={showModal} onClose={() => setShowModal(false)} />
      </div>
  );
}

export default Home;
