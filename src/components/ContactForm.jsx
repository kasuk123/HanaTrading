import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', carInfo: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); // 나중에 백엔드 API로 전송
    alert('문의가 접수되었습니다.');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', background: '#f9f9f9' }}>
      <h3>견적 문의</h3>
      <input name="name" placeholder="이름" onChange={handleChange} required /><br />
      <input name="phone" placeholder="연락처" onChange={handleChange} required /><br />
      <input name="carInfo" placeholder="차량 정보" onChange={handleChange} required /><br />
      <button type="submit">문의 보내기</button>
    </form>
  );
}

export default ContactForm;
