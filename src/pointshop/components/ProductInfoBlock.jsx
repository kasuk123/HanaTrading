// 📁 ProductInfoBlock.jsx

import React, { useState } from 'react';

function ProductInfoBlock({ item }) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="bg-[#fdfdfd] p-6 rounded-lg shadow border">
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-yellow-700 font-semibold text-xl mb-1">
                {item.point.toLocaleString()}P
            </p>
            <p className="text-sm text-gray-500 mb-4">유효기간: 30일</p>

            <label className="text-sm flex items-center gap-2 mb-4">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                상품 상세 내용을 확인했습니다.
            </label>

            <button
                className={`w-full py-3 font-bold rounded-lg text-white transition ${
                    checked
                        ? 'bg-black hover:bg-[#222]'
                        : 'bg-gray-300 cursor-not-allowed'
                }`}
                disabled={!checked}
            >
                {item.name} 결제하기
            </button>
        </div>
    );
}

export default ProductInfoBlock;
