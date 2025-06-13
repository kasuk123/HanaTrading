import React, { useState } from 'react';
import pointshopItems from '../pointshopData';
import GiftCardItem from '../components/GiftCardItem';

const brands = ['전체', '신세계', '스타벅스', '배달의민족', '올리브영'];

function PointShopPage() {
    const [selectedBrand, setSelectedBrand] = useState('전체');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = pointshopItems.filter((item) => {
        const matchBrand = selectedBrand === '전체' || item.brand === selectedBrand;
        const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchBrand && matchSearch;
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 text-[#222]">
            {/* 구분선 */}
            <hr className="my-4 border-t border-gray-300" />

            {/* 포인트샵 제목 + 유저 포인트 정보 (같은 줄에 딱 붙게) */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-extrabold text-[#222]">포인트샵</h1>
                    <span className="text-sm text-gray-600">
                        잔여 포인트 <span className="text-[#5a3e2b] font-bold">12,500P</span>
                    </span>
                </div>
            </div>

            {/* 브랜드 필터 + 검색창 */}
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

            {/* 구분선 */}
            <hr className="mb-6 border-gray-200" />

            {/* 상품 카드 리스트 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map((item) => (
                    <GiftCardItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default PointShopPage;
