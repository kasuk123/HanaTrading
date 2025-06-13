import React from 'react';
import { useNavigate } from 'react-router-dom';

function GiftCardItem({ item }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/pointshop/${item.id}`)}
            className="bg-[#f8f9fa] rounded-md shadow-sm px-3 py-2 cursor-pointer transition hover:shadow-md"
        >
            {/* 이미지 영역 - 꽉 차게 */}
            <div className="w-full aspect-square mb-1 bg-[#f8f9fa] flex items-center justify-center rounded">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                />
            </div>

            {/* 상품명 */}
            <div className="text-sm font-semibold text-gray-800 mb-1 truncate">
                {item.name}
            </div>

            {/* 포인트 */}
            <div className="text-sm text-[#f59e0b] font-bold">
                {item.point.toLocaleString()}P
            </div>
        </div>
    );
}

export default GiftCardItem;
