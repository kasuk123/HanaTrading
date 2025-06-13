import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import pointshopItems from '../pointshopData';
import ProductInfoBlock from '../components/ProductInfoBlock';

const brands = ['전체', '신세계', '스타벅스', '배달의민족', '올리브영'];

function PointShopDetailPage() {
    const { id } = useParams();
    const item = pointshopItems.find((item) => item.id.toString() === id);

    const [selectedBrand, setSelectedBrand] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');

    if (!item) {
        return <div className="text-center py-20 text-gray-500">존재하지 않는 상품입니다.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-[#222]">
            {/* ✅ 상단 - 포인트샵 제목 + 유저 포인트 정보 */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-extrabold text-[#222]">포인트샵</h1>
                    <span className="text-sm text-gray-600">
            잔여 포인트 <span className="text-[#5a3e2b] font-bold">12,500P</span>
          </span>
                </div>
            </div>

            {/* ✅ 브랜드 필터 + 검색창 */}
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
                <div className="flex gap-2 flex-wrap">
                    {brands.map((brand) => (
                        <button
                            key={brand}
                            onClick={() => setSelectedBrand(brand)}
                            className={`px-4 py-2 rounded-full text-sm transition border ${
                                selectedBrand === brand
                                    ? 'bg-[#5a3e2b] text-white border-[#5a3e2b]'
                                    : 'bg-white text-gray-800 border-gray-300'
                            }`}
                        >
                            {brand}
                        </button>
                    ))}
                </div>

                <input
                    type="text"
                    placeholder="상품을 검색해주세요"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 px-4 py-2 text-sm border border-yellow-400 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-400"
                />
            </div>

            {/* ✅ 상세 영역 */}
            <div className="flex flex-col md:flex-row gap-10 pt-8 border-t border-gray-300">
                {/* 왼쪽: 이미지 + 상품명 */}
                <div className="flex-1 min-w-[300px] text-center">
                    <h2 className="text-lg font-bold mb-2">
                        {item.brand}{' '}
                        {item.name.includes(item.brand) ? item.name.replace(item.brand, '').trim() : item.name}
                    </h2>
                    <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-xl shadow-md max-w-sm mx-auto"
                    />
                </div>

                {/* 오른쪽: 상품 상세정보 블록 */}
                <div className="flex-1 min-w-[300px]">
                    <ProductInfoBlock item={item} />
                </div>
            </div>

            {/* ✅ 하단: 이용안내/주의사항 */}
            <div className="mt-12 p-6 bg-[#f9f9f9] rounded-lg text-sm leading-relaxed text-[#444]">
                <h3 className="font-bold mb-2">[상품명]</h3>
                <p>- {item.name}</p>

                <h3 className="font-bold mt-4 mb-2">[상품소개]</h3>
                <p>- {item.brand} 모바일 상품권 {item.point.toLocaleString()}원권</p>

                <h3 className="font-bold mt-4 mb-2 text-red-600">[이용안내]</h3>
                <ul className="list-disc ml-5 text-sm">
                    <li className="text-red-600">* 등록일로부터 30일간 사용 가능 (연장 불가)</li>
                    <li className="text-red-600">* 등록 후 취소/환불/부분환불 불가</li>
                    <li className="text-blue-600">* 동일 수신자번호로 중복 발송 시 임의 취소 가능</li>
                    <li>- 본 상품은 발송 후 번호 변경 및 재발송이 불가합니다</li>
                    <li>- 브랜드 정책에 따라 연장 및 환불 대상이 아닙니다</li>
                    <li>- 본인 인증 후 사용 가능 (자금세탁방지법 의무사항)</li>
                </ul>
            </div>
        </div>
    );
}

export default PointShopDetailPage;
