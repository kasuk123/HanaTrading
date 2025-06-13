import React from 'react';

function MainBanner() {
  return (
    <section className="w-full bg-white overflow-hidden pt-[60px] md:pt-0">
      <img
        src="/images/main-banner-export.png"
        alt="중고차 수출 배너"
        className="w-full h-auto object-cover"
      />
    </section>
  );
}

export default MainBanner;
