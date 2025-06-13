import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed right-4 bottom-28 z-50 bg-white text-black p-2 rounded-full shadow-md hover:bg-yellow-400 transition-all duration-300 w-10 h-10 flex items-center justify-center"
                aria-label="맨 위로 스크롤"
            >
                <FaArrowUp className="text-sm" />
            </button>
        )
    );
}
