import React from 'react';

function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t shadow-md flex justify-around items-center py-3 text-sm font-semibold">
      <a href="tel:18334757" className="bg-blue-600 text-white px-4 py-2 rounded">전화상담</a>
      <a href="#estimate" className="bg-[#d4a373] text-white px-4 py-2 rounded">무료 견적 신청</a>
    </div>
  );
}

export default MobileBottomBar;