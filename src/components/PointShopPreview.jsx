import React from 'react';
import { Link } from 'react-router-dom';

const PointShopPreview = () => {
    const previewItems = [
        {
            id: 1,
            name: '배달의민족 1만원권',
            image: '/images/배달의민족_10k.jpg',
        },
        {
            id: 2,
            name: '올리브영 1만원권',
            image: '/images/올리브영_10k.jpg',
        },
    ];

    return (
        <section className="bg-white py-8 px-4" id="pointshop">
            <h2 className="text-xl font-bold text-center mb-6 text-gray-800">🎁 포인트샵 미리보기</h2>
            <div className="grid grid-cols-2 gap-4">
                {previewItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-gray-50 rounded-lg shadow-sm overflow-hidden text-center"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-[100px] object-cover"
                        />
                        <div className="p-2 text-sm">{item.name}</div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-6">
                <Link
                    to="/pointshop"
                    className="inline-block mt-2 text-sm font-semibold text-yellow-600 underline"
                >
                    전체 상품 보러가기 (로그인 필요)
                </Link>
            </div>
        </section>
    );
};

export default PointShopPreview;
