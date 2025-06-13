// src/pages/CarDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetailPage = () => {
  const { id } = useParams();

  // 나중에 id 기반으로 백엔드에서 차량 정보 받아오기
  const dummyCar = {
    id,
    name: '2018 Hyundai Sonata',
    price: '$8,500',
    description: '믿을 수 있는 품질의 중형 세단입니다. 상태 양호, 무사고.',
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{dummyCar.name}</h2>
      <p className="text-lg text-gray-700 mb-2">가격: {dummyCar.price}</p>
      <p className="text-gray-600">{dummyCar.description}</p>
    </div>
  );
};

export default CarDetailPage;
