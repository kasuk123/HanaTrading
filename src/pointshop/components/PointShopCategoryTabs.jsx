import React from 'react';
import { useParams } from 'react-router-dom';
import pointshopItems from '../pointshopData';

function PointShopDetailPage() {
    const { id } = useParams();
    const item = pointshopItems.find(p => p.id === parseInt(id));

    if (!item) return <div>상품을 찾을 수 없습니다.</div>;

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <div className="flex flex-col md:flex-row gap-8">
                <img src={item.image} alt={item.name} className="w-full md:w-1/2 rounded shadow" />
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                    <div className="text-lg text-yellow-600 mb-2">{item.point.toLocaleString()}P</div>
                    <p className="text-sm mb-4">{item.description}</p>
                    <p className="text-sm mb-6">유효기간: {item.validity}</p>

                    <label className="flex items-center gap-2 mb-4">
                        <input type="checkbox" />
                        상품 상세 내용 및 주의사항을 확인했습니다.
                    </label>

                    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">결제하기</button>
                </div>
            </div>
        </div>
    );
}

export default PointShopDetailPage;
