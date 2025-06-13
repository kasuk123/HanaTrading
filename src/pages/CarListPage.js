// src/pages/CarListPage.js
import React from 'react';

const CarListPage = () => {
  // 나중에 Spring에서 차량 리스트 가져와서 여기서 렌더링 예정
  const dummyCars = [
    { id: 1, name: '2018 Hyundai Sonata', price: '$8,500' },
    { id: 2, name: '2019 Kia K5', price: '$9,200' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">전체 차량 목록</h2>
      <ul className="space-y-4">
        {dummyCars.map((car) => (
          <li key={car.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-medium">{car.name}</h3>
            <p className="text-gray-600">{car.price}</p>
            <a
              href={`/cars/${car.id}`}
              className="text-blue-500 hover:underline"
            >
              자세히 보기
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarListPage;
