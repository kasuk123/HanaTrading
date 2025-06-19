// 📂 src/components/CarEstimateFormMobile.jsx

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import PrivacyConsentModal from './PrivacyConsentModal';
import { FaCheckCircle, FaTimesCircle, FaPhoneAlt } from 'react-icons/fa';

function CarEstimateFormMobile({ formData, handleChange, setFormData }) {
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [fieldStatus, setFieldStatus] = useState({
        carName: null,
        year: null,
        fuel: null,
        phone: null,
        region: null,
    });

    useEffect(() => {
        AOS.init({ duration: 700, once: true });
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === "phone") {
            const digitsOnly = value.replace(/\D/g, "").slice(0, 11);
            let formatted = digitsOnly;
            if (digitsOnly.length <= 3) {
                formatted = `${digitsOnly}`;
            } else if (digitsOnly.length <= 7) {
                formatted = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3)}`;
            } else {
                formatted = `${digitsOnly.slice(0, 3)}-${digitsOnly.slice(3, 7)}-${digitsOnly.slice(7)}`;
            }
            setFormData((prev) => ({ ...prev, phone: formatted }));
            setFieldStatus((prev) => ({ ...prev, phone: 'valid' }));
            return;
        }

        if (name === "year" && !/^\d*$/.test(value)) return;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (value !== '' || (type === 'checkbox' && checked)) {
            setFieldStatus((prev) => ({ ...prev, [name]: 'valid' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 차량명
        if (!formData.carName || formData.carName.trim() === '') {
            alert("차량명을 입력해주세요.");
            setFieldStatus((prev) => ({ ...prev, carName: 'invalid' }));
            return;
        }

        // 연식
        if (!formData.year || formData.year.trim() === '') {
            alert("연식을 입력해주세요.");
            setFieldStatus((prev) => ({ ...prev, year: 'invalid' }));
            return;
        }

        // 연료
        if (!formData.fuel || formData.fuel.trim() === '') {
            alert("연료를 선택해주세요.");
            setFieldStatus((prev) => ({ ...prev, fuel: 'invalid' }));
            return;
        }

        // 전화번호
        const digits = formData.phone.replace(/\D/g, '');
        if (!formData.phone || digits.length !== 11 || !digits.startsWith("010")) {
            alert("휴대폰 번호를 올바르게 입력해주세요.");
            setFieldStatus((prev) => ({ ...prev, phone: 'invalid' }));
            return;
        }

        // 지역
        if (!formData.region || formData.region.trim() === '') {
            alert("지역을 입력해주세요.");
            setFieldStatus((prev) => ({ ...prev, region: 'invalid' }));
            return;
        }

        // 개인정보 동의
        if (!formData.agree) {
            alert("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }

        try {
            const payload = {
                carName: formData.carName,
                year: formData.year,
                fuelType: formData.fuel,
                phone: formData.phone,
                region: formData.region,
                agree: formData.agree,
            };

            await axios.post('/api/quotes/apply', payload);
            alert("견적 신청완료! 잠시 후 상담사가 연락을 드릴 예정입니다.");
            window.location.href = '/';

            setFormData({
                carName: '',
                year: '',
                fuel: '',
                phone: '',
                region: '',
                agree: false,
            });

            setFieldStatus({
                carName: null,
                year: null,
                fuel: null,
                phone: null,
                region: null,
            });
        } catch (error) {
            console.error("견적 신청 실패:", error);
            alert("오류가 발생했습니다. 하단 메세지 아이콘을 통해 문의해주세요.");
        }
    };

    const renderInput = (label, name, type = 'text', placeholder = '') => (
        <div className="relative">
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-8 focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
            />
            {fieldStatus[name] === 'valid' && (
                <FaCheckCircle className="absolute right-2 top-2.5 text-green-500 text-lg" />
            )}
            {fieldStatus[name] === 'invalid' && (
                <FaTimesCircle className="absolute right-2 top-2.5 text-red-500 text-lg" />
            )}
        </div>
    );

    return (
        <section id="estimate-form" className="bg-[#f9f9f9] px-4 py-10" data-aos="fade-up">
            <div className="max-w-sm mx-auto border border-white rounded-xl bg-white shadow-md px-4 py-6">
                <div className="text-center mb-6">
                    <p className="text-sm text-gray-600 mb-1 flex items-center justify-center gap-1">
                        <FaPhoneAlt className="text-yellow-400" /> 전국 어디나 24시 상담가능!
                    </p>
                    <h2 className="text-3xl font-bold text-black">
                        내차 <span className="text-yellow-500">무료견적신청</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3 text-sm font-medium">
                    {renderInput('차량명', 'carName', 'text', '차량명 (예: 그랜저HG)')}
                    {renderInput('연식', 'year', 'text', '연식 (예: 2012)')}
                    <div className="relative">
                        <select
                            name="fuel"
                            value={formData.fuel}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 pr-8 text-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                        >
                            <option value="">연료 선택</option>
                            <option value="휘발유">휘발유</option>
                            <option value="경유">경유</option>
                            <option value="LPG">LPG</option>
                            <option value="하이브리드">하이브리드</option>
                            <option value="전기">전기</option>
                        </select>
                        {fieldStatus.fuel === 'valid' && (
                            <FaCheckCircle className="absolute right-2 top-2.5 text-green-500 text-lg" />
                        )}
                        {fieldStatus.fuel === 'invalid' && (
                            <FaTimesCircle className="absolute right-2 top-2.5 text-red-500 text-lg" />
                        )}
                    </div>
                    {renderInput('연락처', 'phone', 'text', '연락처 (예: 010-1234-5678)')}
                    {renderInput('지역', 'region', 'text', '지역 (예: 서울 강남구)')}

                    <div className="flex items-center text-[13px] text-gray-700 mt-1">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <span>
                            개인정보 수집 및 이용 동의
                            <button
                                type="button"
                                onClick={() => setShowTermsModal(true)}
                                className="ml-2 text-white text-xs bg-gray-700 px-2 py-[2px] rounded"
                            >
                                약관보기
                            </button>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded text-[15px] mt-3 transition"
                    >
                        상담신청
                    </button>
                </form>
            </div>

            <PrivacyConsentModal show={showTermsModal} onClose={() => setShowTermsModal(false)} />
        </section>
    );
}

export default CarEstimateFormMobile;
