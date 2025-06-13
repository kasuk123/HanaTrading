// 📁 src/components/MobileHome.jsx

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import MobileHeader from './MobileHeader';
import MobileBottomSheet from './MobileBottomSheet';
import BannerCarouselMobile from './BannerCarouselMobile';
import ExportInfoSection from './ExportInfoSection';
import CarEstimateFormMobile from './CarEstimateFormMobile';
import EstimateCompareMobile from './EstimateCompareMobile';
import LiveConsultStatus from './LiveConsultStatus';
import ExportStepsMobile from './ExportStepsMobile';
import TrustStatementMobile from './TrustStatementMobile';
import CustomerReviewSlider from './CustomerReviewSlider';
import MobileFloatingMenu from './MobileFloatingMenu';
import PrivacyConsentModal from './PrivacyConsentModal';
import Footer from './Footer';
import MobileFooter from "./MobileFooter"; // ✅ 푸터 임포트 추가
import ScrollToTopButton from "../components/ScrollToTopButton";

function MobileHome({ carList }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [formData, setFormData] = useState({
        carName: '',
        year: '',
        fuel: '',
        region: '',
        phone: '',
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.agree) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

        console.log('📩 견적 신청 데이터:', formData);
        alert('견적 신청이 완료되었습니다.곧 상담원이 전화드릴 예정입니다.');
        // TODO: 서버 전송 로직 연결 예정
    };

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            {/* ✅ 상단 고정 헤더 + 슬라이드 바텀시트 */}
            <MobileHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <MobileBottomSheet isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="pt-16 bg-white text-gray-800 overflow-x-hidden relative z-10">
                {/* 1 메인 배너 */}
                <BannerCarouselMobile />

                {/* 2 수출 설명 */}
                <ExportInfoSection />


                {/* 3 예상가 비교 */}
                <EstimateCompareMobile />

                {/* 4 수출 절차 */}
                <ExportStepsMobile />

                {/* 5 신뢰 문구 */}
                <TrustStatementMobile />

                {/* 6 내 차는 얼마? 폼 */}
                <CarEstimateFormMobile
                    formData={formData}
                    setFormData={setFormData} // ✅ 이거 추가!!!
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />

                {/* 7 실시간 상담 현황 */}
                <LiveConsultStatus carList={carList} />

                {/* 8 고객 후기 */}
                <CustomerReviewSlider />

                {/* 9 푸터 (모바일에서도 보여야 함) */}
                <MobileFooter />

                <ScrollToTopButton />

            </main>

            {/* ✅ ⑩ 하단 플로팅 메뉴 */}
            <MobileFloatingMenu />
        </div>
    );
}

export default MobileHome;
