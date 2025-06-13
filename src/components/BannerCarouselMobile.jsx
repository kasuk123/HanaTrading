import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/fonts.css"; // Noto Sans KR 적용

export default function BannerCarouselMobile() {
    return (
        <div className="w-full h-[65vh] relative font-sans mt-4">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {[
                    {
                        title: (
                            <>
                                <span className="text-white whitespace-nowrap">내 차,</span>{" "}
                                해외에서도<br />
                                <span className="text-yellow-300 whitespace-nowrap">‘인기’</span>
                                <span className="text-white whitespace-nowrap">많을 수 있습니다.</span>
                            </>
                        ),
                        desc: (
                            <>
                                고주행, 오래된 차량도 수출 가능!<br />
                                국내보다 더 좋은 조건 OK!<br />
                                1분만 투자하면 예상 시세 확인 가능!
                            </>
                        ),
                        image: "/images/banner1.webp",
                    },
                    {
                        title: (
                            <>
                                시세보다 중요한 건{" "}
                                <span className="text-yellow-300 whitespace-nowrap">‘선택’</span>입니다.
                            </>
                        ),
                        desc: (
                            <>
                                믿고 맡길 수 있는 선택, 결과가 다릅니다.<br />
                                수출은 경험이 만든 결과로 증명됩니다.
                            </>
                        ),
                        image: "/images/banner2.webp",
                    },
                    {
                        title: (
                            <>
                                왜 <span className="text-yellow-300">‘하나무역’</span>이어야 <br />
                                <span className="text-white">할까요?</span>
                            </>
                        ),
                        desc: (
                            <>
                                견적부터 수출까지 원스톱 진행!<br />
                                24시간 접수 · 빠른 대응!<br />
                                중고차 수출 20년 외길 노하우!
                            </>
                        ),
                        image: "/images/banner3.webp",
                    },
                ].map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-full h-full px-[5px]">
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={item.image}
                                    alt={`배너${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-5">
                                    <div className="min-h-[100px] flex flex-col justify-center">
                                        <h2 className="text-3xl font-bold leading-tight text-white">
                                            {item.title}
                                        </h2>
                                    </div>
                                    <p className="mt-1.5 text-sm leading-relaxed text-white">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
