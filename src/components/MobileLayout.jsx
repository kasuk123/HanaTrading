import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

function MobileLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="relative">
            {isMobile && (
                <>
                    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-4 py-3">
                        <h1 className="text-xl font-bold">하나무역</h1>
                        <button onClick={toggleSidebar} className="text-2xl text-gray-700">
                            <FaBars />
                        </button>
                    </header>
                    <MobileSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                </>
            )}
            <main className={isMobile ? 'pt-16' : ''}>{children}</main>
        </div>
    );
}

export default MobileLayout;
