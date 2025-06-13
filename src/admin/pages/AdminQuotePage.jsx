// 📁 src/admin/pages/AdminQuotePage.jsx
import React, { useState } from 'react';
import MemoPopup from '../components/MemoPopup';
import '../../styles/AdminQuotePage.css';

function AdminQuotePage() {
    const allQuotes = Array.from({ length: 21 }, (_, i) => ({
        id: i + 1,
        name: `고객${i + 1}`,
        car: ['K5', '쏘렌토', '그랜저'][i % 3],
        fuel: ['가솔린', '디젤', 'LPG'][i % 3],
        region: ['서울', '부산', '대전'][i % 3],
        phone: `010-0000-${String(1000 + i).slice(-4)}`,
        date: `2025-05-${String((i % 28) + 1).padStart(2, '0')}`,
        status: ['상담대기', '상담중', '매입완료'][i % 3],
        memo: ''
    }));

    const [quotes, setQuotes] = useState(allQuotes);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMemo, setSelectedMemo] = useState(null);
    const itemsPerPage = 20;

    const handleSave = (id) => {
        if (window.confirm('상태를 저장하시겠습니까?')) {
            alert('저장되었습니다.');
        }
    };

    const handleStatusChange = (id, newStatus) => {
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, status: newStatus } : q));
    };

    const handleMemoSave = (id, text) => {
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, memo: text } : q));
        setSelectedMemo(null);
    };

    const handleMemoDelete = (id) => {
        setQuotes(prev => prev.map(q => q.id === id ? { ...q, memo: '' } : q));
        setSelectedMemo(null);
    };

    const filteredQuotes = quotes.filter(q =>
        q.name.includes(search) ||
        q.car.includes(search) ||
        q.phone.includes(search) ||
        q.region.includes(search)
    );

    const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const paginatedQuotes = filteredQuotes.slice(startIdx, startIdx + itemsPerPage);

    return (
        <div className="adminQuotePage">
            <div className="quoteHeader">
                <div className="quoteTitle">
                    <span className="quoteIcon">📋</span>
                    <h2>상담/견적 현황</h2>
                </div>
                <div className="quoteSearch">
                    <input
                        type="text"
                        placeholder="이름, 차량, 연락처, 지역 검색"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
            </div>

            <div className="quoteTable">
                <div className="quoteTableHeader">
                    <span>이름</span>
                    <span>차량</span>
                    <span>지역</span>
                    <span>연료</span>
                    <span>연락처</span>
                    <span>신청일</span>
                    <span>상태</span>
                    <span>메모</span>
                    <span>관리</span>
                </div>

                {paginatedQuotes.map((q) => (
                    <div className="quoteTableRow" key={q.id}>
                        <span>{q.name}</span>
                        <span>{q.car}</span>
                        <span>{q.region}</span>
                        <span>{q.fuel}</span>
                        <span>{q.phone}</span>
                        <span>{q.date}</span>
                        <span>
              <select
                  value={q.status}
                  onChange={(e) => handleStatusChange(q.id, e.target.value)}
              >
                <option value="상담대기">상담대기</option>
                <option value="상담중">상담중</option>
                <option value="매입완료">매입완료</option>
              </select>
            </span>
                        <span>
              <button className="memoBtn" onClick={() => setSelectedMemo(q)}>보기</button>
            </span>
                        <span>
              <button className="quoteActionBtn" onClick={() => handleSave(q.id)}>💾</button>
            </span>
                    </div>
                ))}
            </div>

            <div className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={currentPage === i + 1 ? 'activePage' : ''}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {selectedMemo && (
                <MemoPopup
                    memo={selectedMemo.memo}
                    onClose={() => setSelectedMemo(null)}
                    onSave={(text) => handleMemoSave(selectedMemo.id, text)}
                    onDelete={() => handleMemoDelete(selectedMemo.id)}
                />
            )}
        </div>
    );
}

export default AdminQuotePage;
