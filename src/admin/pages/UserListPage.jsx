import React, { useState } from 'react';
import '../../styles/userListPage.css';

function UserListPage() {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: '김철수',
            username: 'kimcs',
            phone: '010-1234-5678',
            joinDate: '2025-05-01',
            referralCode: 'REF1234',
            referredBy: 'REF5678',
            point: 12000,
        },
        {
            id: 2,
            name: '이영희',
            username: 'leeyh',
            phone: '010-9876-5432',
            joinDate: '2025-05-11',
            referralCode: 'REF5678',
            referredBy: '',
            point: 5000,
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [editId, setEditId] = useState(null);
    const [editForm, setEditForm] = useState({ name: '', username: '', phone: '' });

    const handleEditClick = (user) => {
        setEditId(user.id);
        setEditForm({
            name: user.name,
            username: user.username,
            phone: user.phone,
        });
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleSaveClick = (id) => {
        if (window.confirm('저장하시겠습니까?')) {
            setUsers(users.map(user =>
                user.id === id
                    ? { ...user, name: editForm.name, username: editForm.username, phone: editForm.phone }
                    : user
            ));
            setEditId(null);
            alert('저장되었습니다.');
        }
    };

    const handleDeleteClick = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            setUsers(users.filter(user => user.id !== id));
            alert('삭제되었습니다.');
        }
    };

    const filteredUsers = users.filter(user =>
        user.name.includes(searchTerm) ||
        user.username.includes(searchTerm) ||
        user.phone.includes(searchTerm)
    );

    return (
        <div className="userListPage">
            <div className="userListHeader">
                <div className="userListTitle">
                    <span className="userIcon">👨🏻‍💼</span>
                    <h2>회원관리</h2>
                </div>
                <div className="searchBar">
                    <input
                        type="text"
                        placeholder="이름, 아이디, 전화번호 검색"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="userTable">
                <div className="userTableHeader">
                    <span><input type="checkbox" disabled /></span>
                    <span>이름</span>
                    <span>아이디</span>
                    <span>전화번호</span>
                    <span>가입일</span>
                    <span>추천인 코드</span>
                    <span>추천받은 코드</span>
                    <span>포인트</span>
                    <span>관리</span>
                </div>

                {filteredUsers.map(user => (
                    <div className="userTableRow" key={user.id}>
                        <span><input type="checkbox" /></span>

                        {editId === user.id ? (
                            <>
                                <span><input className="editInput" name="name" value={editForm.name} onChange={handleEditChange} /></span>
                                <span><input className="editInput" name="username" value={editForm.username} onChange={handleEditChange} /></span>
                                <span><input className="editInput" name="phone" value={editForm.phone} onChange={handleEditChange} /></span>
                            </>
                        ) : (
                            <>
                                <span>{user.name}</span>
                                <span>{user.username}</span>
                                <span>{user.phone}</span>
                            </>
                        )}

                        <span>{user.joinDate}</span>
                        <span>{user.referralCode || '-'}</span>
                        <span>{user.referredBy || '-'}</span>
                        <span>{user.point.toLocaleString()}P</span>

                        <span className="actionIcons">
                            {editId === user.id ? (
                                <button className="saveBtn" onClick={() => handleSaveClick(user.id)}>저장</button>
                            ) : (
                                <button className="editBtn" onClick={() => handleEditClick(user)}>✏️</button>
                            )}
                            <button className="deleteBtn" onClick={() => handleDeleteClick(user.id)}>🗑️</button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserListPage;
