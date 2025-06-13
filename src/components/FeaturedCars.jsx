import React from 'react';

function FeaturedCars() {
  const cars = [
    { id: 1, name: 'Hyundai Sonata', year: 2018 },
    { id: 2, name: 'Kia K5', year: 2019 },
  ];

  return (
    <section style={{ padding: '2rem' }}>
      <h3>추천 차량</h3>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.year} {car.name}</li>
        ))}
      </ul>
    </section>
  );
}

export default FeaturedCars;
