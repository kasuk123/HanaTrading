// 📁 src/admin/components/MemoPopup.jsx
import React, { useState } from 'react';
import '../../styles/AdminQuotePage.css';

function MemoPopup({ memo, onClose, onSave, onDelete }) {
    const [text, setText] = useState(memo || '');

    const handleSaveClick = () => {
        if (window.confirm('메모를 저장하시겠습니까?')) {
            onSave(text);
            alert('메모가 저장되었습니다.');
        }
    };

    const handleDeleteClick = () => {
        if (window.confirm('메모를 삭제하시겠습니까?')) {
            onDelete();
            alert('메모가 삭제되었습니다.');
        }
    };

    return (
        <div className="memoPopupOverlay">
            <div className="memoPopup">
                <h3>메모 보기/수정</h3>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="메모를 입력하세요..."
                />
                <div className="memoPopupButtons">
                    <button className="saveBtn" onClick={handleSaveClick}>저장</button>
                    <button className="deleteBtn" onClick={handleDeleteClick}>삭제</button>
                    <button onClick={onClose}>닫기</button>
                </div>
            </div>
        </div>
    );
}

export default MemoPopup;
