// 📁 src/components/EstimateAndStatus.jsx
import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

function EstimateAndStatus({ formData, handleChange, setFormData, inquiryList, setShowModal }) {
    const [isMobile, setIsMobile] = useState(false);
    const [fieldStatus, setFieldStatus] = useState({
        carName: null,
        year: null,
        fuel: null,
        phone: null,
        region: null,
    });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;

        if (name === 'phone') {
            const digits = value.replace(/\D/g, '').slice(0, 11);
            let formatted = digits;
            if (digits.length <= 3) {
                formatted = digits;
            } else if (digits.length <= 7) {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
            } else {
                formatted = `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
            }
            setFormData(prev => ({ ...prev, phone: formatted }));
            setFieldStatus(prev => ({ ...prev, phone: formatted.length === 13 ? 'valid' : 'invalid' }));
            return;
        }

        if (name === 'year') {
            if (!/^\d*$/.test(value)) return;
            setFormData(prev => ({ ...prev, year: value }));
            setFieldStatus(prev => ({ ...prev, year: value.length > 0 ? 'valid' : 'invalid' }));
            return;
        }

        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: newValue }));
        setFieldStatus(prev => ({ ...prev, [name]: newValue ? 'valid' : 'invalid' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { carName, year, fuel, phone, region, agree } = formData;
        const digits = phone.replace(/\D/g, '');

        if (!carName.trim()) return alert('차량명을 입력해주세요.');
        if (!year.trim()) return alert('연식을 입력해주세요.');
        if (!fuel) return alert('연료를 선택해주세요.');
        if (!digits || digits.length !== 11 || !digits.startsWith('010')) return alert('휴대폰 번호를 올바르게 입력해주세요.');
        if (!region.trim()) return alert('지역을 입력해주세요.');
        if (!agree) return alert('개인정보 수집 및 이용에 동의해주세요.');

        try {
            const payload = {
                carName,
                year,
                fuelType: fuel,
                phone,
                region,
                agree,
            };
            await fetch('/api/quotes/apply', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            alert('견적 신청 완료! 잠시 후 상담사가 연락을 드릴 예정입니다.');
            window.location.reload(); // ✅ 신청 완료 후 새로고침
        } catch (error) {
            console.error('신청 실패:', error);
            alert('오류가 발생했습니다. 하단 메세지 아이콘을 통해 문의해주세요.');
        }
    };

    const renderInput = (name, placeholder) => (
        <div className="relative">
            <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleInput}
                placeholder={placeholder}
                className="w-full border border-gray-300 rounded px-3 py-2 pr-8 focus:ring-2 focus:ring-yellow-400 outline-none bg-white text-sm"
            />
            {fieldStatus[name] === 'valid' && <FaCheckCircle className="absolute right-2 top-2.5 text-green-500 text-lg" />}
            {fieldStatus[name] === 'invalid' && <FaTimesCircle className="absolute right-2 top-2.5 text-red-500 text-lg" />}
        </div>
    );

    return (
        <section className="w-full py-10 bg-[#f9f9f9] px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-start">
                {/* ✅ 견적 신청 폼 */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
                        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                            <div className="text-center mb-4">
                                <p className="text-xs text-gray-600 mb-1 flex justify-center items-center gap-1">
                                    <FaPhoneAlt className="text-yellow-400" /> 전국 어디나 24시 상담가능!
                                </p>
                                <h2 className="text-2xl font-bold">
                                    내차 <span className="text-yellow-500">무료견적신청</span>
                                </h2>
                            </div>
                            {renderInput('carName', '차량명 (예: 그랜저HG)')}
                            {renderInput('year', '연식 (예: 2012)')}
                            <div className="relative">
                                <select
                                    name="fuel"
                                    value={formData.fuel}
                                    onChange={handleInput}
                                    className="w-full border border-gray-300 rounded px-3 py-2 pr-8 text-gray-600 focus:ring-2 focus:ring-yellow-400 outline-none bg-white"
                                >
                                    <option value="">연료 선택</option>
                                    <option value="휘발유">휘발유</option>
                                    <option value="경유">경유</option>
                                    <option value="LPG">LPG</option>
                                    <option value="전기">전기</option>
                                </select>
                                {fieldStatus.fuel === 'valid' && <FaCheckCircle className="absolute right-2 top-2.5 text-green-500 text-lg" />}
                                {fieldStatus.fuel === 'invalid' && <FaTimesCircle className="absolute right-2 top-2.5 text-red-500 text-lg" />}
                            </div>
                            {renderInput('phone', '연락처 (예: 010-1234-5678)')}
                            {renderInput('region', '지역 (예: 서울 강남구)')}
                            <div className="flex items-center text-[13px] text-gray-700 mt-1">
                                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleInput} className="mr-2" />
                                [필수] 개인정보 수집 및 이용 동의
                                <button type="button" onClick={() => setShowModal(true)} className="ml-2 text-yellow-600 underline text-xs">보기</button>
                            </div>
                            <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2.5 rounded text-[15px] mt-3 transition">
                                상담신청
                            </button>
                        </form>
                    </div>
                </div>

                {/* ✅ 상담현황 박스 */}
                <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md border border-gray-200 p-5 flex flex-col items-center self-stretch">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        🚗 <span className="text-black">하나무역</span> <span className="text-yellow-400">상담현황</span>
                    </h2>
                    <div className="flex flex-col gap-2 w-full items-center">
                        {inquiryList.map((item, index) => (
                            <div key={index} className="flex items-center gap-2 justify-center">
                                <span className={`w-[80px] flex justify-center py-[2px] text-xs font-bold rounded-full text-white ${
                                    item.status === '상담대기' ? 'bg-yellow-500' :
                                        item.status === '상담중' ? 'bg-blue-500' :
                                            item.status === '매입완료' ? 'bg-green-600' : 'bg-gray-400'
                                }`}>
                                    {item.status}
                                </span>
                                <span className="text-gray-700 text-bold">{item.carName} 문의합니다</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EstimateAndStatus;
