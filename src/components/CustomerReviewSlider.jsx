// 📁 src/components/CustomerReviewSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const reviews = [
    {
        name: "김○철",
        text: "전화 상담부터 차량 탁송, 서류 전달까지 전 과정을 도와주셔서 손 하나 안 대고도 판매가 끝났어요. 하나무역 덕분에 정말 편하게 잘 마무리했습니다.",
        image: "/reviews/review1.jpg"
    },
    {
        name: "이○경",
        text: "수출은 어렵다고만 생각했는데 상담을 통해 전체 절차를 상세히 들으니 너무 간단하게 느껴졌어요. 가격도 예상보다 훨씬 높게 받아 정말 만족했습니다.",
        image: "/reviews/review2.png"
    },
    {
        name: "박○열",
        text: "국내 매입 시세보다 확실히 높아서 놀랐고, 특히 접수부터 매각까지 하루 만에 끝나서 감탄했습니다. 이런 시스템이 있다는 걸 이제야 알게 되었네요.",
        image: "/reviews/review3.jpg"
    },
    {
        name: "최○희",
        text: "사진 몇 장 보내고 상담 받았는데 설명이 너무 친절하고 차분해서 신뢰가 생겼어요. 수출이라는 말이 어렵게 느껴졌는데 실제로는 정말 간단하더라고요.",
        image: "/reviews/review4.jpg"
    },
    {
        name: "정○일",
        text: "차량 상태가 걱정됐지만 하나무역에서는 조건 좋게 받아주셨어요. 전화 한 통이면 바로 상담되고 진행도 빨라서 놀랐습니다. 다음에도 꼭 여기 이용할 것 같아요.",
        image: "/reviews/review5.jpg"
    },
    {
        name: "한○수",
        text: "지방에서도 수출이 가능한지 걱정했지만 기사님이 직접 방문해주셔서 좋았어요. 친절하고 정직하게 진행되어 다시 이용하고 싶은 마음이 생겼습니다.",
        image: "/reviews/review6.jpg"
    }
];

export default function CustomerReviewSlider() {
    return (
        <section className="bg-white py-12 px-4" data-aos="fade-up">
            {/* ✅ 제목 */}
            <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-xl font-bold text-gray-800 flex justify-center items-center gap-2">
                    <FaQuoteLeft className="text-yellow-500 text-xl" />
                    하나무역 실제 고객후기
                    <FaQuoteRight className="text-yellow-500 text-xl" />
                </h2>
                <p className="text-sm text-gray-500 mt-1">믿고 맡긴 고객님들의 생생한 이야기</p>
            </div>

            {/* ✅ 슬라이드 */}
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop={true}
                className="max-w-md mx-auto"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-[#fdfdfd] rounded-2xl shadow-md p-4 min-h-[460px] flex flex-col items-center text-center hover:shadow-lg transition">

                            {/* ✅ 차량 이미지 꽉 차게 */}
                            <img
                                src={review.image}
                                alt={`${review.name} 차량`}
                                className="w-full h-64 object-cover rounded-lg mb-2"
                            />

                            {/* ✅ 후기 텍스트 */}
                            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                                “{review.text}”
                            </p>

                            {/* ✅ 이름 */}
                            <p className="text-sm text-gray-500 font-medium">{review.name} 님</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
